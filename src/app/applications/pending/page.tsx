'use client'

import ApplicationComponent from "@/app/applications/_components/Application";
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import axios from "axios";

const PendingPage = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('query') || ' ';
    const [applications, setApplications] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                await axios.get("http://localhost:3000/api/application/pending").then(
                    (response) => {
                        setApplications(response.data.applications);
                    }
                ).catch((error) => {
                    console.log(error)

                });

                // Perform search filtering right after fetching
                if (query.length === 0) {
                    setData(applications);
                } else {
                    const filteredApplications = applications.filter((application) =>
                        Object.values(application).some((value) =>
                            String(value).toLowerCase().includes(query.toLowerCase())
                        )
                    );
                    setData(filteredApplications);
                }
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [query, applications]);

    if (loading) {
        return (
            <div className={"bg-purple-100 flex w-full h-[100vh] flex-col  items-center overflow-hidden"}>
                <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <div className={"bg-purple-100 flex w-full h-[100vh] flex-col  items-center overflow-hidden"}>
            <ApplicationComponent applications={data} placeholder={"Search..."}/>
        </div>
    );
}

export default PendingPage;