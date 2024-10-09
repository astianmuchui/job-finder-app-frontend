import React from "react";
import {CARDS} from "@/lib/Constants";
import {CardStack} from "@/components/ui/card-stack";

const HowItWorks = () => {
    return (
        <div className={"bg-purple-800/70 h-[70vh] flex flex-row"}>

            <div className={"flex flex-col space-y-8 justify-center items-start w-[40%] pl-6"}>
                <h1 className={"border-2 pt-2 pb-2 pl-6 pr-6 bg-purple-200 w-56 text-center text-black rounded-full text-xl"}>How It
                    works</h1>
                <h1 className={"text-5xl"}>Explore jobs from 1000+ companies</h1>
                <p>
                    Log in to access a personalized job feed tailored to your preferences based on your search and
                    application history. Easily track and refer to your previous applications. Use our advanced filters
                    to search for jobs by category, helping you quickly find roles that match your skills and interests,
                    all in one organized and efficient platform.
                </p>
                <button
                    className={"bg-purple-200 p-2 text-lg rounded-xl text-black hover:bg-transparent hover:border-2 hover:outline-none hover:border-purple-800/70 hover:text-black lg:w-[30%] "}>Discover More
                </button>
            </div>
            <div className={"flex items-center justify-center w-[60%]"}>
                <CardStack items={CARDS}/>
            </div>
        </div>
    )
}

export default HowItWorks;