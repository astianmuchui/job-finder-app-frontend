import {lucia} from "@/lib/lucia";
import prisma from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";
import { hash } from "@node-rs/argon2";
import {generateIdFromEntropySize} from "lucia";
import {generateEmailVerificationCode} from "@/lib/functions";
import {sendEmail} from "@/lib/email";

export  async  function POST(req: NextRequest ) {
    try {
        console.log("Signup request received");

    const user = await req.json();
    const password = user.password;
    const hashedPassword = await hash(password, {
        memoryCost: 2 ** 16,
        timeCost: 3,
        outputLen: 32,
        parallelism: 1
    });

    const userId = generateIdFromEntropySize(16);

    const userExists = await prisma.users.findFirst({
        where: {
            email: user.email
        }
    });

    console.log(userExists);

    if(userExists) {
        return NextResponse.json(
            {
                message: "User already exists either as a Company or a User Account",
            },
            { status: 500 }
        );
    }
    else {
        await prisma.users.create({
            data: {
                id: userId,
                email: user.email,
                username: user.username,
                password: hashedPassword,
            }
        });

        const verificationCode = await  generateEmailVerificationCode(userId, user.email);
        console.log(verificationCode);

        const subject = "Verify your email";
        const html = `<p>Your verification code is : <strong>${verificationCode}</strong></p>`;
        await sendEmail({to: user.email, subject: subject , html: html});


        const session = await lucia.createSession(userId,{});
        const sessionCookie = lucia.createSessionCookie(session.id);
        return NextResponse.json(
            { message: "Signup successful, verification email sent." },
            {
                status: 200,
                headers: {
                    "Set-Cookie": sessionCookie.serialize(),
                },
            }
        );
    }
    } catch (e){
        // db error, email taken, etc
        console.error(e);
        return NextResponse.json(e, { status: 500 });
    }
}