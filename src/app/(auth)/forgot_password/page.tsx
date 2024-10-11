import AuthPage from "@/components/AuthPage";
import ForgotPassword from "@/components/ForgotPassword";


const ForgotPasswordPage = () => {
    return (
        <div>
        <AuthPage form={<ForgotPassword/>} />
        </div>
    );
}

export default ForgotPasswordPage;