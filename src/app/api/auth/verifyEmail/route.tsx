import {lucia} from "@/lib/lucia";
import prisma from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";
import {isWithinExpirationDate} from "oslo";

export  async function POST (request: NextRequest) {
    try {


        const {code} = await request.json();

        const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
        console.log(sessionId);


        if (!sessionId) {
            console.log("no session id")
            return NextResponse.json({error: "Unauthorized"}, {status: 401});

        }

        const {user} = await lucia.validateSession(sessionId);


        if (!user) {
            return NextResponse.json({error: "Unauthorized"}, {status: 401});
        }

        const verificationCode = await prisma.verificationCode.findFirst({
            where: {
                userId: user.id,
                code,

            }
        })

        if (!verificationCode) {
            return NextResponse.json({error: "Invalid verification code"}, {status: 401});
        }

        if (!isWithinExpirationDate(verificationCode.expire_at)) {
            return NextResponse.json({error: "Your verification Code has expired request for a new one"}, {status: 401});
        }

        await prisma.users.update({
            where: {
                id: user.id
            },
            data: {
                emailVerified: true
            },
        });

        await prisma.verificationCode.deleteMany({
            where: {
                userId: user.id
            }
        })

        await lucia.invalidateSession(user.id);

        const session = await lucia.createSession(user.id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        return NextResponse.json({message: "Email verified"}, {
            status: 200,
            headers: {
                "Set-Cookie": sessionCookie.serialize(),
            },
        });
    }catch (e) {
        console.log(`"this is the error" ${e}`)
        return NextResponse.json(e, { status: 500 });
    }

}