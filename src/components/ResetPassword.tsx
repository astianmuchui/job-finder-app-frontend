'use client'

import {Eye, EyeOff} from "lucide-react";
import {useState} from "react";

const ResetPassword = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }
    return (
        <div className={"flex flex-col my-auto h-[100%] justify-center space-y-4"}>
            <div className={"flex flex-col items-start mx-auto  space-y-4 w-[80%]"}>

                <h1 className={"text-4xl font-bold text-center text-black"}>Reset your Password </h1>

            </div>
            <div className={"space-y-6 w-[90%]"}>
                <form className={"flex flex-col space-y-4 items-center text-black"}>

                    <div
                        className={"flex flex-row justify-between items-center  w-[80%] border-2 border-purple-800/40 rounded-3xl focus:outline-none focus:ring-0"}>
                        <input type={passwordVisible ? "password" : "text"} placeholder="New Password"
                               className={"rounded-bl-3xl rounded-tl-3xl border-0 focus:outline-none focus:ring-0 w-[100%] "}/>
                        {passwordVisible ?
                            <Eye size={25} className={"text-black/50 mr-2"} onClick={togglePasswordVisibility}/> :
                            <EyeOff size={23} className={"text-black/50 mr-2"} onClick={togglePasswordVisibility}/>}

                    </div>
                    <div
                        className={"flex flex-row justify-between items-center  w-[80%] border-2 border-purple-800/40 rounded-3xl focus:outline-none focus:ring-0"}>
                        <input type={passwordVisible ? "password" : "text"} placeholder="Confirm Password"
                               className={"w-[100%] rounded-bl-3xl rounded-tl-3xl border-0 focus:outline-none focus:ring-0"}/>
                        {passwordVisible ?
                            <Eye size={25} className={"text-black/50 mr-2 ]"} onClick={togglePasswordVisibility}/> :
                            <EyeOff size={23} className={"text-black/50 mr-2 ]"} onClick={togglePasswordVisibility}/>}
                    </div>
                    <div className={"flex w-[80%] space-x-4"}>
                        <button type="submit"
                                className={"w-[80%] mx-auto p-2 bg-gradient-to-tr from-purple-800/70 via-purple-900/70 to-purple-950/70 text-white rounded-3xl hover:bg-gradient-to-br"}>
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );

}

export default ResetPassword;