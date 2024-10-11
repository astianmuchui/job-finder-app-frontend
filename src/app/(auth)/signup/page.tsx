
import AuthPage from "@/components/AuthPage";
import SignUpForm from "@/components/SignUpForm";

const SignupPage = () => {


    return (
        <AuthPage form={<SignUpForm/>}/>
    );
}

export default SignupPage;