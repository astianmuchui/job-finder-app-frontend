import React from "react";
import {CARDS} from "@/lib/Constants";
import {CardStack} from "@/components/ui/card-stack";
import Link from "next/link";

const HowItWorks = () => {
    return (
        <div className={"bg-purple-800/70 flex flex-col h-[70vh] lg:flex lg:flex-row "}>

            <div className={"flex flex-col space-y-8 justify-center my-auto items-start lg:w-[40%] pl-6"}>
                <h1 className={"border-2 pt-2 pb-2 pl-6 pr-6 bg-purple-200 w-56 text-center text-black rounded-full text-xl"}>How It
                    works</h1>
                <h1 className={"text-xl lg:text-5xl"}>Explore jobs from 1000+ companies</h1>
                <p>
                    Log in to access a personalized job feed tailored to your preferences based on your search and
                    application history. Easily track and refer to your previous applications. Use our advanced filters
                    to search for jobs by category, helping you quickly find roles that match your skills and interests,
                    all in one organized and efficient platform.
                </p>
                <Link href="/">
                    <button
                        className="lg:w-[10vw] p-3 bg-gradient-to-br from-pink-400/20 from-10% via-purple-400/20 to-purple-300/70 text-white rounded-lg hover:bg-gradient-to-bl">
                        Get Started
                    </button>
                </Link>
            </div>
            <div className={"hidden  lg:flex items-center justify-center w-[60%]"}>
                <CardStack items={CARDS}/>
            </div>
        </div>
    )
}

export default HowItWorks;