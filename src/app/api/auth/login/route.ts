import {lucia} from "@/lib/lucia";
import prisma from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";
import {verify} from "@node-rs/argon2";

export async function POST(request: NextRequest) {
    try {
        const res = await request.json();

        const email = res.email;

        const user = await prisma.users.findFirst({
            where: {
                email: email
            }
        });

        if (!user) {
            return NextResponse.json({message: "Incorrect email or password"}, {status: 401});
        }

        const isEmailVerified = user.emailVerified;

        if (!isEmailVerified) {
            return NextResponse.json({message: "Email not verified"}, {status: 401});
        }

        const isPasswordCorrect = await verify(user.password, res.password, {
                memoryCost: 2 ** 16,
                timeCost: 3,
                outputLen: 32,
                parallelism: 1
            }
        );

        if (!isPasswordCorrect) {
            return NextResponse.json({message: "Incorrect email or password"}, {status: 401});
        }

        const session = await lucia.createSession(user.id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        return NextResponse.json({message: "Login successful"}, {
            status: 200,
            headers: {
                "Set-Cookie": sessionCookie.serialize()
            }
        });

    } catch (e) {
        console.log(e);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }

}