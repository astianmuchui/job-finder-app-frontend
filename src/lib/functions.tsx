import {lucia} from "@/lib/lucia";
import prisma from "@/lib/prisma";
import {generateRandomString, alphabet, sha256} from "oslo/crypto";
import {createDate, TimeSpan} from "oslo";
import {generateIdFromEntropySize} from "lucia";
import {encodeHex} from "oslo/encoding";

export async function generateEmailVerificationCode(
    userId: string,
    email: string
): Promise<string> {
    await prisma.verificationCode.deleteMany({
        where: {
            userId: userId,
        },
    })
    const code = generateRandomString(6, alphabet("0-9"));
    await prisma.verificationCode.create({
        data: {
            userId: userId,
            email,
            code,
            expire_at: createDate(new TimeSpan(15, "m")), // 15 minutes
        },
    });
    return code;
}


export async function createPasswordResetToken(userId: string) {
    await prisma.passwordResetTokens.deleteMany({
        where: {
            userId: userId,
        },
    });

    const tokenId = generateIdFromEntropySize(16);
    const token = encodeHex(await sha256(new TextEncoder().encode(tokenId)));

    await prisma.passwordResetTokens.create({
        data: {
            userId: userId,
            token_hash: token,
            expiresAt: createDate(new TimeSpan(2, "h")),
        },
    });

    return token;
}