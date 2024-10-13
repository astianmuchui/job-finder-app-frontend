import {lucia} from "@/lib/lucia";
import { NextResponse} from "next/server";
import {generateEmailVerificationCode} from "@/lib/functions";
import {sendEmail} from "@/lib/email";
import {cookies} from "next/headers";

export  async  function POST( ) {
    console.log("Resend code 1");
    try {
        console.log("Resend code 2");

        const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
        if(!sessionId){
            return NextResponse.json({error: "Unauthorized"}, {status: 401});
        }

        const {user} = await lucia.validateSession(sessionId);

        if(!user){
            return NextResponse.json({error: "Unauthorized"}, {status: 401});
        }
        console.log("Signup request received");




            const verificationCode = await  generateEmailVerificationCode(user.id, user.email);
            console.log(verificationCode);

            const subject = "Verify your email";
            const html = `<p>Your verification code is : <strong>${verificationCode}</strong></p>`;
            await sendEmail({to: user.email, subject: subject , html: html});


            const session = await lucia.createSession(user.id,{});
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

    } catch (e){
        // db error, email taken, etc
        console.error(e);
        return NextResponse.json(e, { status: 500 });
    }
}