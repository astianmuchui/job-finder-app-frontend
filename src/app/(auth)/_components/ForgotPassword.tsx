'use client'

import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";
import {useState} from "react";

const ForgotPasswordSchema = z.object({
    email: z.string({required_error: "Email is required"}).email({message: "Please enter a valid email address."}).min(1, {message: "Please fill out this field"}),
});

type ForgotPasswordSchema = z.infer<typeof ForgotPasswordSchema>

const ForgotPassword = () => {
const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(ForgotPasswordSchema)
});

const [serverError, setServerError] = useState<string | null>(null);

const onSubmit: SubmitHandler<ForgotPasswordSchema> = (data) => {
    axios.post("http://localhost:3000/api/auth/forgotPassword", data).then((response) => {
        console.log(response.data);
        if(response.status === 200){
            console.log("Email sent successfully");
        }
    }).catch((error) => {
        setServerError(error.response.data.message || "Kindly input the email you used to register");
    });
    console.log(data);
}

const handleResend= (data: ForgotPasswordSchema) => {
    console.log("Resend");
    axios.post("http://localhost:3000/api/resendResetPassword", data).then((response) => {
        console.log(response.data);
        if(response.status === 200){
            console.log("Email sent successfully");
        }
    }
    ).catch((error) => {
        console.error(error);
    });

}

    return (
        <div className={"flex flex-col my-auto h-[100%] justify-center space-y-4"}>
            <div className={"flex flex-col items-start mx-auto  space-y-4 w-[80%]"}>

                <h1 className={"text-2xl lg:text-4xl font-bold text-center text-black"}>Forgot Password ?</h1>
                <p className={"text-black font-normal"}>No worries we will send reset instructions</p>
            </div>
            <div className={"space-y-6 w-[90%]"}>
                <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col space-y-4 items-center text-black"}>

                    <div className={"w-[80%] border-2 border-purple-800/40 rounded-3xl "}>

                        <input disabled={isSubmitting} {...register("email")} type="text" placeholder="Email"
                               className={"p-2 w-[100%] border-0 border-purple-800/40 rounded-3xl focus:outline-none focus:ring-0"}/>
                    </div>
                    {errors.email && <p className={"text-red-500 self-start mx-14"}>{errors.email.message}</p>}
                    {serverError && <p className={"text-red-500 self-start mx-14"}>{serverError}</p>}
                    <div className={"flex w-[80%] space-x-4"}>
                        <button type="button" onClick={()=>handleResend} disabled={isSubmitting}
                                className={"w-[50%] p-2 bg-gradient-to-tr from-purple-800/70 via-purple-900/70 to-purple-950/70 text-white rounded-3xl hover:bg-gradient-to-br"}>
                            Resend
                        </button>
                        <button disabled={isSubmitting} type="submit"
                                className={"w-[50%] p-2 bg-gradient-to-tr from-purple-800/70 via-purple-900/70 to-purple-950/70 text-white rounded-3xl hover:bg-gradient-to-br"}>
                            Send
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default ForgotPassword;