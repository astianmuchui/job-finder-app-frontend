
import AuthPage from "@/app/(auth)/_components/AuthPage";
import SignUpForm from "@/app/(auth)/_components/SignUpForm";

const SignupPage = () => {


    return (
        <AuthPage form={<SignUpForm/>}/>
    );
}

export default SignupPage;