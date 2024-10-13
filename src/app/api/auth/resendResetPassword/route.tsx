import {lucia} from "@/lib/lucia";
import prisma from "@/lib/prisma";

import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";
import {createPasswordResetToken} from "@/lib/functions";
import {sendEmail} from "@/lib/email";

export  async function POST(request: NextRequest){
    const{email} = await request.json();

    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
    if(!sessionId){
        return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }

    const {user} = await lucia.validateSession(sessionId);

    if(!user){
        return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }

    const userExist = await prisma.users.findFirst({
        where: {
            email: email
        }
    });

    if(!userExist){
        return NextResponse.json({message: "User does not exist"}, {status: 404});
    }

    const resetToken = await createPasswordResetToken(userExist.id);
    const tokenLink = "http://localhost:3000/resetPassword" + resetToken;
    const subject = "Reset Password";

    const html = `<p>Click <a href="${tokenLink}">here</a> to reset your password</p>`;

    await sendEmail({to: userExist.email, subject: subject, html: html});

    return NextResponse.json(
        { message: "Password reset email sent" },
        { status: 200 }
    );

}