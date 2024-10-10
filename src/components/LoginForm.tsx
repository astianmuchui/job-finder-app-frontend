'use client'
import {Eye, EyeOff} from "lucide-react";
import {useState} from "react";


const LoginForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    return (
        <div className={`flex flex-col my-auto h-[100%] justify-center space-y-4`}>
            <div className={"flex flex-col items-center space-y-4 w-[90%]"}>
                <h1 className={"text-4xl font-bold text-center text-black"}>Welcome Back !</h1>
                <p className={"text-black font-normal"}>
                    Unlock Opportunities: Your Next Career Move Awaits
                </p>
            </div>
            <div className={"space-y-6 w-[90%]"}>
                <form className={"flex flex-col space-y-4 items-center text-black"}>

                    <div className={"w-[80%] border-2 border-purple-800/40 rounded-3xl "}>

                        <input type="text" placeholder="Email"
                               className={"p-2 border-0 border-purple-800/40 rounded-3xl w-full focus:outline-none focus:ring-0"}/>
                    </div>
                    <div
                        className={"flex flex-row justify-between items-center  w-[80%] border-2 border-purple-800/40 rounded-3xl focus:outline-none focus:ring-0"}>
                        <input type={passwordVisible ? "password" : "text"} placeholder="Password"
                               className={"w-[100%] p-2 rounded-bl-3xl rounded-tl-3xl border-0 focus:outline-none focus:ring-0"}/>
                        {passwordVisible ?
                            <Eye size={25} className={"text-black/50 mr-2 "} onClick={togglePasswordVisibility}/> :
                            <EyeOff size={23} className={"text-black/50 mr-2 "} onClick={togglePasswordVisibility}/>}

                    </div>
                    <div className={"flex flex-row justify-end  w-[80%]"}>
                        <p>
                            <a href="/forgot_password" className={"text-purple-800/70 hover:text-purple-900/70"}>
                                Forgot Password?
                            </a>
                        </p>
                    </div>
                    <button type="submit"
                            className={"w-[80%] p-2 bg-gradient-to-tr from-purple-800/70 via-purple-900/70 to-purple-950/70 text-white rounded-3xl hover:bg-gradient-to-br"}>
                        Login
                    </button>

                    <div className={"flex flex-row justify-center items-center space-x-2"}>
                        <p className={"text-black"}>
                            Don't have an account?
                        </p>
                        <a href="/signup" className={"text-purple-800/70 hover:text-purple-900/70"}>
                            Sign Up
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;