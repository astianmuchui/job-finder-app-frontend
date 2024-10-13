
import AuthPage from "@/app/(auth)/_components/AuthPage";
import LoginForm from "@/app/(auth)/_components/LoginForm";

const LoginPage = () => {


    return (
       <AuthPage form={<LoginForm/>}/>
    );
}

export default LoginPage;