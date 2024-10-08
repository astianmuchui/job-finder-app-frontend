'use client'
import React from "react";
import NavBar from "@/components/NavBar";
import {name} from "@/lib/Constants";
import {Search} from "lucide-react";

const HeroesSection = () => {
    return (
        <>
            <div className={"overflow-hidden relative w-full h-[90vh]"}>
                <NavBar/>
                <div className={"text-white bg-purple-100 lg:pb-0  lg:mt-16 w-full flex  h-[100%]"}>
                    <div
                        className={"hidden lg:block lg:absolute lg:bg-purple-800/70 lg:backdrop:filter lg:backdrop:backdrop-blur-md lg:w-[50%] lg:left-[1250px] lg:h-[100%] lg:rounded-bl-[15rem] rotate-[40deg] "}>
                    </div>Find
                    <div className={"flex flex-row items-center justify-center w-full text-black bg-red-800 lg:space-y-4 lg:bg-purple-100 lg:flex lg:flex-col lg:justify-center lg:pr-20  lg:w-[60%]"}>
                        <h1 className={"font-bold text-2xl text-center lg:text-5xl lg:text-center"}>Find you Ideal Job with {name}</h1>
                        <p className={"text-2xl font-light"}>Unlock Opportunities: Your Next Career Move Awaits</p>
                        <div className={"flex flex-row items-center justify-center border-2 p-2 bg-white rounded-xl"}>
                            <Search size={20} className={"text-black/40"}/>
                            <input type="text" placeholder={"Search for jobs"} className={"p-2 rounded-lg border-0 active:border-0 "}/>
                            <button className={"bg-purple-800/70 p-2 text-lg rounded-xl text-white hover:bg-transparent hover:border-2 hover:outline-none hover:border-purple-800/70 hover:text-black"}>Search</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HeroesSection;
