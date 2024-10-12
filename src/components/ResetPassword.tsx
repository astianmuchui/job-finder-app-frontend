'use client'

import {Eye, EyeOff} from "lucide-react";
import {useState} from "react";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";
import {useParams, useRouter} from "next/navigation";

const ResetSchema = z.object({
    password: z.string({required_error: "Password is required"}).min(8, {message: "Password must be at least 8 characters"}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {message: "Password must contain at least one uppercase letter, one lowercase letter and one number"}),
    confirmPassword: z.string({ required_error: "Password confirmation is required" }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match. Please make sure both passwords are identical",
    path: ["confirmPassword"],
});

type ResetSchema = z.infer<typeof ResetSchema>

const ResetPassword = () => {
    const router = useRouter();
    const [serverError, setServerError] = useState<string | null>(null);
    const {verificationCode} = useParams();
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<ResetSchema>({
        resolver: zodResolver(ResetSchema)
    });

    const onSubmit: SubmitHandler<ResetSchema> = (data) => {
        const {confirmPassword, ...rest} = data;
        axios.post(`http://localhost:3000/api/resetPassword/${verificationCode}`, rest).then((response) => {
            console.log(response.data);
            if (response.status === 200) {
                router.push("/login");
            }
        }).catch((error) => {
            setServerError(error.response.data.message || "Failed to reset password");
        });

    };

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }
    return (
        <div className={"flex flex-col my-auto h-[100%] justify-center space-y-4"}>
            <div className={"flex flex-col items-start mx-auto  space-y-4 w-[80%]"}>

                <h1 className={" text-2xl lg:text-4xl font-bold text-center text-black"}>Reset your Password </h1>

            </div>
            <div className={"space-y-6 w-[90%]"}>
                <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col space-y-4 items-center text-black"}>

                    <div
                        className={"flex flex-row justify-between items-center  w-[80%] border-2 border-purple-800/40 rounded-3xl focus:outline-none focus:ring-0"}>
                        <input disabled={isSubmitting} {...register("password")}
                               type={passwordVisible ? "password" : "text"} placeholder="New Password"
                               className={"rounded-bl-3xl rounded-tl-3xl border-0 focus:outline-none focus:ring-0 w-[100%] "}/>
                        {passwordVisible ?
                            <Eye size={25} className={"text-black/50 mr-2"} onClick={togglePasswordVisibility}/> :
                            <EyeOff size={23} className={"text-black/50 mr-2"} onClick={togglePasswordVisibility}/>}

                    </div>
                    {errors.password && <p className={"text-red-500 self-start mx-14"}>{errors.password.message}</p>}
                    <div
                        className={"flex flex-row justify-between items-center  w-[80%] border-2 border-purple-800/40 rounded-3xl focus:outline-none focus:ring-0"}>
                        <input disabled={isSubmitting} {...register("confirmPassword")}
                               type={passwordVisible ? "password" : "text"} placeholder="Confirm Password"
                               className={"w-[100%] rounded-bl-3xl rounded-tl-3xl border-0 focus:outline-none focus:ring-0"}/>
                        {passwordVisible ?
                            <Eye size={25} className={"text-black/50 mr-2 ]"} onClick={togglePasswordVisibility}/> :
                            <EyeOff size={23} className={"text-black/50 mr-2 ]"} onClick={togglePasswordVisibility}/>}
                    </div>
                    {errors.confirmPassword &&
                        <p className={"text-red-500 self-start mx-14"}>{errors.confirmPassword.message}</p>}
                    {serverError && <p className={"text-red-500 self-start mx-14"}>{serverError}</p>}
                    <div className={"flex w-[80%] space-x-4"}>
                        <button disabled={isSubmitting} type="submit"
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