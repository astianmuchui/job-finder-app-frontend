'use client'
import {  Modal } from "flowbite-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import SearchBar from "@/app/applications/_components/SearchBar";
import {Calendar, Clock, Eye, MessageSquare} from "lucide-react";
import {Application} from "@/lib/Types";
import React, {useState} from "react";
import {Separator} from "@/components/ui/separator";

type ApplicationProps = {
    applications: Application[];
    placeholder: string;
}
const ApplicationComponent = ({applications,placeholder} : ApplicationProps) => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);

    const handleViewClick = (application: Application) => {
        setSelectedApplication(application);
        setOpenModal(true);
    };



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
                                <Button variant="outline" size="sm" onClick={() => handleViewClick(app)}>
                                    <Eye className="h-4 w-4 mr-2" />
                                    View
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <Modal className={"w-[40%] rounded-none"}  dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Body>
                    {selectedApplication && (
                        <Card className="max-w-3xl mx-auto">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-3xl">{selectedApplication.title}</CardTitle>
                                        <CardDescription className="text-xl mt-2">{selectedApplication.companyName}</CardDescription>
                                    </div>
                                    <Badge variant={selectedApplication.status === 'referred' ? 'default' : 'secondary'} className="text-lg">
                                        {selectedApplication.status}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex space-x-6">
                                    <div className="flex items-center">
                                        <Calendar className="h-5 w-5 mr-2" />
                                        <span>Applied: {selectedApplication.createdAt}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="h-5 w-5 mr-2" />
                                        <span>Deadline: {selectedApplication.deadline}</span>
                                    </div>
                                </div>

                                <Separator />



                                {selectedApplication.comments && (
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Reviewer Comments</h3>
                                        <div className="bg-secondary p-4 rounded-md">
                                            <div className="flex items-start">
                                                <MessageSquare className="h-5 w-5 mr-2 mt-1" />
                                                <p>{selectedApplication.comments}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}

export default ApplicationComponent;