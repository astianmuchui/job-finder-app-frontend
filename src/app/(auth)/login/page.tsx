
import AuthPage from "@/components/AuthPage";
import LoginForm from "@/components/LoginForm";

const LoginPage = () => {


    return (
       <AuthPage form={<LoginForm/>}/>
    );
}

export default LoginPage;