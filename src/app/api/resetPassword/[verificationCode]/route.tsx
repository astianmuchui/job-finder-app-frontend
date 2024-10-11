import prisma from "@/lib/prisma";
import { hash } from "@node-rs/argon2";
import { NextRequest, NextResponse } from "next/server";
import { encodeHex } from "oslo/encoding";
import { sha256 } from "oslo/crypto";
import { isWithinExpirationDate } from "oslo";
import { lucia } from "@/lib/lucia";
import { cookies } from "next/headers";

export  async function POST (req: NextRequest) {
    try {
        const res = await req.json();

        const{searchParams} = new URL(req.url);
        const verificationCode = searchParams.get("verificationCode");
        const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;

        if (!sessionId){
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const {user} = await lucia.validateSession(sessionId);

        if (!user){
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const tokenHash =encodeHex( await sha256(new TextEncoder().encode(verificationCode || "")));
        const token = await prisma.passwordResetTokens.findFirst({
            where: {
                userId: user.id,
                token_hash: tokenHash,
            },
        });

        if (!token || isWithinExpirationDate(token.expiresAt)) {
            return NextResponse.json({ message: "User does not exist" });
        }

        await lucia.invalidateSession(sessionId);

        const hashedPassword = await hash(res.password,{
            timeCost: 3,
            memoryCost: 2 ** 16,
            parallelism: 1,
            outputLen: 32,
        });

        await prisma.users.update({
            where: {
                id: user.id,
            },
            data: {
                password: hashedPassword,
            },
        });

        await prisma.passwordResetTokens.deleteMany({
            where: {
                token_hash: tokenHash,
            },
        });

        const session = await lucia.createSession(user.id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        return NextResponse.json(
            { message: "Your Password has been reset Successfully" },
            {
                status: 200,
                headers: {
                    "Set-Cookie": sessionCookie.serialize(),
                    "Referrer-Policy": "strict-origin",
                },
            }
        );


    }catch (e) {
        console.error(e);
        return NextResponse.json(e, { status: 500 });
    }
}
