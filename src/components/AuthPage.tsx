import Image from "next/image";
import React from "react";

interface AuthProps {
    form: JSX.Element
}

const AuthPage = ({form}: AuthProps) => {


    return (
        <div className={"bg-purple-100 w-[100vw] h-[100vh] flex justify-center items-center"}>
            <div
                className={"flex flex-row w-[80%] h-[80%] bg-purple-800/20 shadow-md backdrop:filter backdrop-blur-lg"}>
                <div className={"overflow-hidden w-[40%] h-[100%] bg-white "}>
                    {form}
                </div>
                <div className={"w-[60%] h-[100%] bg-transparent flex justify-center items-center bg-purple-800"}>
                    <div className={"w-[90%] h-[90%] rounded-3xl bg-transparent flex justify-center items-start"}>
                        <Image src={"/logos/logo1.png"} alt={"login"} width={570} height={570}/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AuthPage;