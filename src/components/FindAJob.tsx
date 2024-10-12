import {JobCategories} from "@/lib/Constants";
import SmallCategoryCard from "@/components/SmallCategoryCard";
import JobCard from "@/components/JobCard";
import React from "react";
import Link from "next/link";

type FindAJobProps = {
    id: string
}

const FindAJob = ({id}:FindAJobProps) => {
    return (
        <div id={id} className={"bg-purple-100 h-[85rem] space-y-6 pt-10"}>
            <div className={"flex flex-col justify-between items-center text-black space-y-6 pt-6"}>
                <h1 className={"text-2xl lg:text-5xl font-bold"}>Jobs of the day</h1>
                <p className={"text-lg text-center lg:text-xl font-light "}>
                    Your dream Job is a tap away. Find the best jobs in the market and apply with a single click.
                </p>
            </div>
            <div className="flex flex-row flex-wrap justify-center  lg:pt-8 lg:space-x-6">
                <select
                className="block lg:hidden p-2 w-[90vw] rounded-md bg-purple-100 text-black border border-gray-300 focus:outline-none focus:ring-0 focus:border-purple-500 shadow-sm">
                {JobCategories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-black/20 backdrop:filter backdrop-blur-md  text-black">
                        {category.name}
                    </option>
                ))}
            </select>


                <div className="hidden lg:flex flex-row flex-wrap justify-center lg:space-x-6">
                    {JobCategories.map((category) => (
                        <SmallCategoryCard category={category} key={category.id}/>
                    ))}
                </div>
            </div>
            <div
                className={"overflow-auto flex flex-wrap justify-center items-center gap-2 w-[90%] h-[60rem] mx-auto p-4 mt-6"}>
                {Array.from({length: 8}, (_, index) => <JobCard key={index}/>)}
            </div>
            <div className={"flex justify-center items-center mx-auto mt-6 w-[40%]"}>
                <Link href="/">
                    <button
                        className="w-max py-3 px-6 bg-gradient-to-tr from-purple-800/70 via-purple-900/70 to-purple-950/70 text-white rounded-lg hover:bg-gradient-to-br">
                        Explore More
                    </button>
                </Link>
            </div>


        </div>
    );
};

export default FindAJob;
