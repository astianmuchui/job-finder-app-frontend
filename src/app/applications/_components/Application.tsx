'use client'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import SearchBar from "@/app/applications/_components/SearchBar";
import {ChevronRight} from "lucide-react";
import {Application} from "@/lib/Types";

type ApplicationProps = {
    applications: Application[];
    placeholder: string;
}
const ApplicationComponent = ({applications,placeholder} : ApplicationProps) => {


    return (
        <div className={"bg-purple-100 flex w-full h-[100vh] flex-col  items-center overflow-hidden"}>
            <div className={" lg:w-[50%]"}>
                <SearchBar placeholder={placeholder} />
            </div>
            <div className={" w-[90%] h-[90%] m-2 p-2 grid gap-4 md:grid-cols-2 lg:grid-cols-3  grid-flow-dense overflow-y-auto  scrollbar-webkit "}>
                {applications.map((app) => (
                    <Card key={app.id} className="hover:shadow-lg transition-shadow h-[25vh]">
                        <CardHeader>
                            <CardTitle>{app.title}</CardTitle>
                            <CardDescription>{app.companyName}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-500">Applied: {app.createdAt}</span>
                                <Badge variant={app.status == "referred" ? "secondary" : "outline"}>{app.status}</Badge>
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