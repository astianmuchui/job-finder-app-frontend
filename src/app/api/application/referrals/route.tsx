import {validateRequest} from "@/lib/lucia";
import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function GET() {
    try {
        const result  =  await validateRequest();
        if(!result){
            NextResponse.json({message: "Unauthorised"} ,{status: 401
            })
        }
        const { user } = result ?? {};


        if (!user) {
            return NextResponse.json({error: "Unauthorized"}, {status: 401});
        }

        const applications = await prisma.application.findMany(
            {
                where: {
                    userId: user.id,
                    status: 'refered'
                },
                include: {
                    job: true,
                    comment: true,
                }
            }
        );

        const responseApplications = applications.map((application) => ({
            id: application.id,
            jobTitle: application.job.title,
            companyName: application.job.companyName,
            cvUrl: application.cvUrl,
            dateApplied: application.createdAt,
            deadline: application.job.deadline,
            status: application.status,
            comment: application.comment?.comment
        }));


        return NextResponse.json(
            {responseApplications},
            {status: 200}
        );
    }catch (e) {
        console.log(e);
        return NextResponse.json({error: "Error fetching applications"}, {status: 500});
    }
}