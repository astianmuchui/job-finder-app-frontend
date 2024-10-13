import AuthPage from "@/app/(auth)/_components/AuthPage";
import ForgotPassword from "@/app/(auth)/_components/ForgotPassword";


const ForgotPasswordPage = () => {
    return (
        <div>
        <AuthPage form={<ForgotPassword/>} />
        </div>
    );
}

export default ForgotPasswordPage;