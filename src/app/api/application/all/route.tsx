import {lucia} from '@/lib/lucia';
import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";
import {cookies} from "next/headers";

export async function GET() {
    try {
        const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;


        if (!sessionId) {
            console.log("no session id")
            return NextResponse.json({error: "Unauthorized"}, {status: 401});
        }

        const {user} = await lucia.validateSession(sessionId);


        if (!user) {
            return NextResponse.json({error: "Unauthorized"}, {status: 401});
        }

        const applications = await prisma.application.findMany({
            where: {
                userId: user.id
            },
            include: {
                job: true,
                comment: true, // Fetch the comment if it exists (optional)
            },
        });

        const responseApplications = applications.map((application) => ({
            id: application.id,
            jobTitle: application.job.title,
            companyName: application.job.companyName, // Use job.company, or "Unknown" if job is null
            dateApplied: application.createdAt,
            deadline: application.job.deadline,
            status: application.status,
            comment: application.comment.comment // Include comment text if it exists
        }));


        return NextResponse.json(
            {responseApplications},
            {status: 200}
        );
    } catch (e) {
        console.log(e);
        return NextResponse.json({error: "Error fetching applications"}, {status: 500});
    }


}