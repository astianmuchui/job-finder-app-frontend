import {  NextResponse } from "next/server";
import { lucia, validateRequest } from "@/lib/lucia";
import { cookies } from "next/headers";

export async function POST() {
    const result = await validateRequest();

    if (!result) {
        return NextResponse.json({ error: "Unauthorized, no result" }, { status: 401 });
    }

    const { user, session } = result;

    if (!session) {
        return NextResponse.json({ error: "Unauthorized, no session" }, { status: 401 });
    }


    await lucia.invalidateSession(session.id);

    const SessionCookie =  lucia.createBlankSessionCookie();
    cookies().set(
        SessionCookie.name,
        SessionCookie.value,
        SessionCookie.attributes
    );

    console.log("Session invalidated:", session.id);
    console.log("Session cookie cleared:", SessionCookie);

    return new Response(null, {
        status: 200,
        headers: {
            "Referrer-Policy": "strict-origin",
        },
    });
}