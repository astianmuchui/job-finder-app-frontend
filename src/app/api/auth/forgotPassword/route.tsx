import prisma from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";
import {createPasswordResetToken} from "@/lib/functions";
import {sendEmail} from "@/lib/email";
import {lucia} from "@/lib/lucia";

export async function POST (request: NextRequest) {
    try {
        console.log("Forgot Password request received");
        const res = await request.json();

        const email = res.email;

        const userExists = await prisma.users.findFirst({
            where: {
                email: email
            }
        });

        if (!userExists) {
            return NextResponse.json(
                { message: "Kindly input the email you used to register" },
                { status: 404 }
            );
        }

        const token = await createPasswordResetToken(userExists.id);
        console.log(token);
        const tokenLink = `http://localhost:3000/resetPassword/${token}`;

        const subject = "Password Reset";
        const html = `<p>Click <a href="${tokenLink}">here</a> to reset your password</p>`;

        await sendEmail({to: email, subject: subject , html: html});

        const session = await lucia.createSession(userExists.id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);


        return NextResponse.json(
            { message: "Password reset email sent" },
            {
                status: 200,
                headers: {
                    "Set-Cookie": sessionCookie.serialize(),
                }
            }
        );
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

