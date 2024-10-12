import {lucia} from "@/lib/lucia";
import prisma from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";
import {createPasswordResetToken} from "@/lib/functions";
import {sendEmail} from "@/lib/email";

export async function POST (request: NextRequest) {
    try {
        console.log("Forgot Password request received");
        const res = await request.json();
        const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
        if (!sessionId) {
            return NextResponse.json({error: "Unauthorized"}, {status: 401});
        }

        const {user} = await lucia.validateSession(sessionId);

        if (!user) {
            return NextResponse.json({error: "Unauthorized"}, {status: 401});
        }

        const email = res.email;

        const userExists = await prisma.users.findFirst({
            where: {
                email: email
            }
        });

        if (!userExists) {
            return NextResponse.json(
                { message: "User does not exist" },
                { status: 404 }
            );
        }

        const token = await createPasswordResetToken(user.id);
        console.log(token);
        const tokenLink = `http://localhost:3000/resetPassword/${token}`;

        const subject = "Password Reset";
        const html = `<p>Click <a href="${tokenLink}">here</a> to reset your password</p>`;

        await sendEmail({to: email, subject: subject , html: html});

        return NextResponse.json(
            { message: "Password reset email sent" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

