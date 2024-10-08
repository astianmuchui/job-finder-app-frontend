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
                    </div>
                    <div
                        className={"flex flex-col space-y-4 items-center justify-center w-full text-black bg-gradient-to-br from-pink-400/20 from-10% via-purple-400/20 to-purple-800/40 lg:space-y-4 lg:bg-purple-100 lg:bg-none lg:flex lg:flex-col lg:justify-center lg:items-start lg:pl-20 lg:pr-20  lg:w-[60%]"}>
                        <h1 className={"font-bold text-xl text-center lg:text-5xl lg:text-center"}>Find you Ideal Job
                            with {name}</h1>
                        <p className={"text-md lg:text-2xl font-light"}>Unlock Opportunities: Your Next Career Move
                            Awaits</p>
                        <div
                            className={"flex flex-row items-center p-1 lg:w-[50%] lg:flex lg:flex-row lg:items-center lg:justify-between lg:border-2 lg:p-2  bg-white rounded-2xl"}>
                            <div className={"flex flex-row items-center pl-2"}>

                                <Search size={20} className={"text-black/40"}/>
                                <input type="text" placeholder={"Search for jobs"}
                                       className={"p-2 rounded-lg border-0 active:border-0 "}/>
                            </div>
                            <button
                                className={"bg-purple-800/70 p-2 text-lg rounded-xl text-white hover:bg-transparent hover:border-2 hover:outline-none hover:border-purple-800/70 hover:text-black lg:w-[30%] "}>Search
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HeroesSection;
