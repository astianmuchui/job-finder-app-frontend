const ForgotPassword = () => {
    return (
        <div className={"flex flex-col my-auto h-[100%] justify-center space-y-4"}>
            <div className={"flex flex-col items-start mx-auto  space-y-4 w-[80%]"}>

                <h1 className={"text-4xl font-bold text-center text-black"}>Forgot Password ?</h1>
                <p className={"text-black font-normal"}>No worries we will send reset instructions</p>
            </div>
            <div className={"space-y-6 w-[90%]"}>
                <form className={"flex flex-col space-y-4 items-center text-black"}>

                    <div className={"w-[80%] border-2 border-purple-800/40 rounded-3xl "}>

                        <input type="text" placeholder="Email"
                               className={"p-2 w-[100%] border-0 border-purple-800/40 rounded-3xl focus:outline-none focus:ring-0"}/>
                    </div>
                    <div className={"flex w-[80%] space-x-4"}>
                        <button type="submit"
                                className={"w-[50%] p-2 bg-gradient-to-tr from-purple-800/70 via-purple-900/70 to-purple-950/70 text-white rounded-3xl hover:bg-gradient-to-br"}>
                            Resend
                        </button>
                        <button type="submit"
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