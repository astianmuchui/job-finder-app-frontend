'use client'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useRouter} from "next/navigation";
import {useState} from "react";

const VerifyEmailSchema = z.object({
    code: z.string({required_error: "Code is required"}).min(6, {message: "Verification Code must be 6 digits"}),
});


const VerifyEmail = () => {
    const router = useRouter()
    const [serverError, setServerError] = useState<string | null>(null)
    const form = useForm<z.infer<typeof VerifyEmailSchema>>({
        resolver: zodResolver(VerifyEmailSchema),
        defaultValues: {
            code: "",
        }
    })



    function onSubmit(data: z.infer<typeof VerifyEmailSchema>) {
        axios.post("http://localhost:3000/api/verifyEmail", data).then((response) => {
                if (response.status === 200) {
                    router.push("/login")
                }
            }
        ).catch((error) => {
            console.error(error)
        })
    }

    function resendCode() {
        axios.post("http://localhost:3000/api/resendEmailCode").then((response) => {
                if (response.status === 200) {
                    console.log("Code Resent")
                }
            }
        ).catch((error) => {
            setServerError(error.response.data.error)
        })
    }

    return (
        <div className={"flex flex-col my-auto h-[100%] justify-center items-center space-y-6"}>
            <div className={"flex flex-col items-center mx-auto  space-y-4 w-[80%]"}>
                <h1 className={"text-2xl lg:text-4xl font-bold text-center text-black"}>Verify Email</h1>
                <p className={"text-black font-normal"}>Please check your email for the verification code</p>
            </div>
            <Form {...form}>


                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField name={"code"} control={form.control} render={({field}) => (
                        <FormItem>
                            <FormLabel>Verify Email</FormLabel>
                            <FormControl>
                                <InputOTP
                                    maxLength={6}
                                    {...field}
                                >
                                    <InputOTPGroup>

                                        <InputOTPGroup>


                                            <InputOTPSlot index={0}/>
                                            <InputOTPSlot index={1}/>
                                            <InputOTPSlot index={2}/>
                                        </InputOTPGroup>
                                        <InputOTPSeparator/>
                                        <InputOTPGroup>

                                            <InputOTPSlot index={3}/>
                                            <InputOTPSlot index={4}/>
                                            <InputOTPSlot index={5}/>
                                        </InputOTPGroup>

                                    </InputOTPGroup>

                                </InputOTP>
                            </FormControl>
                            <FormDescription>
                                Enter the 6-digit verification code sent to your email.
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />
                    {serverError && <p className={"text-red-500 self-start mx-14"}>{serverError}</p>}

                    <div className={"flex w-[80%] space-x-4 mt-10"}>
                        <button type="button" onClick={()=> resendCode()}
                                className={"w-[50%] p-2 bg-gradient-to-tr from-purple-800/70 via-purple-900/70 to-purple-950/70 text-white rounded-3xl hover:bg-gradient-to-br"}>
                            Resend
                        </button>
                        <button type="submit"
                                className={"w-[50%] p-2 bg-gradient-to-tr from-purple-800/70 via-purple-900/70 to-purple-950/70 text-white rounded-3xl hover:bg-gradient-to-br"}>
                            Verify
                        </button>
                    </div>
                </form>
            </Form>
        </div>
    )
};

export default VerifyEmail;