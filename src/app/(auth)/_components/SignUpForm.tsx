'use client'

import {useState} from "react";
import {Eye, EyeOff} from "lucide-react";
import {SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignupSchema = z.object({
    username: z.string({ required_error: "Name is required" }).min(1, { message: "Username is required. Please enter a username" }), // Ensure username is required
    email: z.string({ required_error: "Email is required" }).email({ message: "Please enter a valid email address" }),
    password: z.string({ required_error: "Please fill out this field" })
        .min(8, { message: "Password must be at least 8 characters" })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, { message: "Password must contain at least one uppercase letter, one lowercase letter, and one number" }),
    confirmPassword: z.string({ required_error: "Password confirmation is required" }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match. Please make sure both passwords are identical",
    path: ["confirmPassword"],
});

type SignupSchema = z.infer<typeof SignupSchema>

const SignUpForm = () => {
    const[serverError, setServerError] = useState<string | null>(null);

    const {register, handleSubmit , formState: {errors, isSubmitting}} = useForm<SignupSchema>({
        resolver: zodResolver(SignupSchema)
    });

    const router = useRouter();
    const onSubmit: SubmitHandler<SignupSchema> = async (data) => {
        const { confirmPassword, ...rest } = data; // Exclude confirmPassword from submitted data

        console.log(confirmPassword);
        axios.post(
            "http://localhost:3000/api/auth/signup",
            rest
        ).then((response) => {
            if(response.status === 200){
                router.push("/verifyEmail");
            }
        }).catch((error) => {
            setServerError(error.response.data.message || "Failed to sign up");
        });
    }

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }


    return (
        <div className={`flex flex-col my-auto h-[100%] justify-center space-y-4 `}>
            <div className={"flex flex-col items-center space-y-4 w-[90%]"}>
                <h1 className={"text-2xl lg:text-4xl font-bold text-center text-black"}>SIGN UP</h1>
                <p className={"text-black font-normal text-center "}>
                    Welcome to the GigHaven! Create an account to get started
                </p>
            </div>
            <div className={"space-y-6 w-[90%]"}>
                <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col space-y-4 items-center text-black"}>
                    <div className={"w-[80%] border-2 border-purple-800/40 rounded-3xl "}>

                    <input {...register("username")} type="text" placeholder="Username" disabled={isSubmitting}
                           className={"p-2 w-[100%] border-0 border-purple-800/40 rounded-3xl focus:outline-none focus:ring-0"}/>
                    </div>
                        {errors.username && <p className={"text-red-500 self-start mx-14"}>{errors.username.message}</p>}
                    <div className={"w-[80%] border-2 border-purple-800/40 rounded-3xl "}>

                    <input {...register("email")} type="text" placeholder="Email" disabled={isSubmitting}
                           className={"p-2 w-[100%] border-0 border-purple-800/40 rounded-3xl focus:outline-none focus:ring-0"}/>
                    </div>
                        {errors.email && <p className={"text-red-500 self-start mx-14"}>{errors.email.message}</p>}

                    <div
                        className={"flex flex-row justify-between items-center  w-[80%] border-2 border-purple-800/40 rounded-3xl focus:outline-none focus:ring-0"}>
                        <input {...register("password")} type={passwordVisible ? "password" : "text"} placeholder="Password" disabled={isSubmitting}
                               className={"rounded-bl-3xl rounded-tl-3xl border-0 focus:outline-none focus:ring-0 w-[100%] "}/>
                        { passwordVisible ? <Eye size={25} className={"text-black/50 mr-2"} onClick={togglePasswordVisibility}/> : <EyeOff size={23} className={"text-black/50 mr-2"} onClick={togglePasswordVisibility}/> }
                    </div>
                        {errors.password && <p className={"text-red-500 self-start mx-14 text-start"}>{errors.password.message}</p>}
                    <div
                        className={"flex flex-row justify-between items-center  w-[80%] border-2 border-purple-800/40 rounded-3xl focus:outline-none focus:ring-0"}>
                        <input {...register("confirmPassword")} type={passwordVisible ? "password" : "text"} placeholder="Confirm Password" disabled={isSubmitting}
                               className={"w-[100%] rounded-bl-3xl rounded-tl-3xl border-0 focus:outline-none focus:ring-0"}/>
                        { passwordVisible ? <Eye size={25} className={"text-black/50 mr-2 ]"} onClick={togglePasswordVisibility}/> : <EyeOff size={23} className={"text-black/50 mr-2 ]"} onClick={togglePasswordVisibility}/> }
                    </div>
                        {errors.confirmPassword && <p className={"text-red-500 self-start mx-14"}>{errors.confirmPassword.message}</p>}
                        {serverError && <p className={"text-red-500 self-start mx-14"}>{serverError}</p>}

                    <button type="submit" disabled={isSubmitting}
                            className={"w-[80%] p-2 bg-gradient-to-tr from-purple-800/70 via-purple-900/70 to-purple-950/70 text-white rounded-3xl hover:bg-gradient-to-br"}>
                        Sign Up
                    </button>

                    <div className={"flex flex-row justify-center items-center space-x-2"}>
                        <p className={"text-black"}>
                            Already have an account?
                        </p>
                        <a href="/login" className={"text-purple-800/70 hover:text-purple-900/70"}>
                            Log In
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;
