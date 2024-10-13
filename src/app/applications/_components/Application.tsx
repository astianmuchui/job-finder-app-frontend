'use client'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import SearchBar from "@/app/applications/_components/SearchBar";
import {ChevronRight} from "lucide-react";

const applications = [
    {
        id: 1,
        jobTitle: "Frontend Developer",
        company: "TechCorp",
        dateApplied: "2023-05-15",
        deadline: "2023-06-15",
        status: "Under Review",
        referred: false,
    },
    {
        id: 2,
        jobTitle: "UX Designer",
        company: "DesignHub",
        dateApplied: "2023-05-10",
        deadline: "2023-06-01",
        status: "Referred",
        referred: true,
    },{
        id: 3,
        jobTitle: "UX Designer",
        company: "DesignHub",
        dateApplied: "2023-05-10",
        deadline: "2023-06-01",
        status: "Referred",
        referred: true,
    },{
        id: 4,
        jobTitle: "UX Designer",
        company: "DesignHub",
        dateApplied: "2023-05-10",
        deadline: "2023-06-01",
        status: "Referred",
        referred: true,
    },{
        id: 5,
        jobTitle: "UX Designer",
        company: "DesignHub",
        dateApplied: "2023-05-10",
        deadline: "2023-06-01",
        status: "Referred",
        referred: true,
    },{
        id: 6,
        jobTitle: "UX Designer",
        company: "DesignHub",
        dateApplied: "2023-05-10",
        deadline: "2023-06-01",
        status: "Referred",
        referred: true,
    },{
        id: 7,
        jobTitle: "UX Designer",
        company: "DesignHub",
        dateApplied: "2023-05-10",
        deadline: "2023-06-01",
        status: "Referred",
        referred: true,
    },{
        id: 8,
        jobTitle: "UX Designer",
        company: "DesignHub",
        dateApplied: "2023-05-10",
        deadline: "2023-06-01",
        status: "Referred",
        referred: true,
    },{
        id: 9,
        jobTitle: "UX Designer",
        company: "DesignHub",
        dateApplied: "2023-05-10",
        deadline: "2023-06-01",
        status: "Referred",
        referred: true,
    },{
        id: 10,
        jobTitle: "UX Designer",
        company: "DesignHub",
        dateApplied: "2023-05-10",
        deadline: "2023-06-01",
        status: "Referred",
        referred: true,
    },{
        id: 11,
        jobTitle: "UX Designer",
        company: "DesignHub",
        dateApplied: "2023-05-10",
        deadline: "2023-06-01",
        status: "Referred",
        referred: true,
    },{
        id: 12,
        jobTitle: "UX Designer",
        company: "DesignHub",
        dateApplied: "2023-05-10",
        deadline: "2023-06-01",
        status: "Referred",
        referred: true,
    },{
        id: 13,
        jobTitle: "UX Designer",
        company: "DesignHub",
        dateApplied: "2023-05-10",
        deadline: "2023-06-01",
        status: "Referred",
        referred: true,
    },{
        id: 14,
        jobTitle: "UX Designer",
        company: "DesignHub",
        dateApplied: "2023-05-10",
        deadline: "2023-06-01",
        status: "Referred",
        referred: true,
    },{
        id: 15,
        jobTitle: "UX Designer",
        company: "DesignHub",
        dateApplied: "2023-05-10",
        deadline: "2023-06-01",
        status: "Referred",
        referred: true,
    },{
        id: 16,
        jobTitle: "UX Designer",
        company: "DesignHub",
        dateApplied: "2023-05-10",
        deadline: "2023-06-01",
        status: "Referred",
        referred: true,
    },
    // Add more mock applications as needed
]

const ApplicationComponent = () => {
    return (
        <div className={"bg-purple-100 flex w-full h-[100vh] flex-col  items-center overflow-hidden"}>
            <div className={" lg:w-[50%]"}>
                <SearchBar/>
            </div>
            <div className={" w-[90%] h-[90%] m-2 p-2 grid gap-4 md:grid-cols-2 lg:grid-cols-3  grid-flow-dense overflow-y-auto  scrollbar-webkit "}>
                {applications.map((app) => (
                    <Card key={app.id} className="hover:shadow-lg transition-shadow h-[25vh]">
                        <CardHeader>
                            <CardTitle>{app.jobTitle}</CardTitle>
                            <CardDescription>{app.company}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-500">Applied: {app.dateApplied}</span>
                                <Badge variant={app.referred ? "secondary" : "outline"}>{app.status}</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">Deadline: {app.deadline}</span>
                                <Button variant="ghost" size="sm" >
                                    View <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )

}

export default ApplicationComponent;