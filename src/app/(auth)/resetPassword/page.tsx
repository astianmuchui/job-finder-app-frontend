import AuthPage from "@/components/AuthPage";
import ResetPassword from "@/components/ResetPassword";


const ResetPasswordPage = () => {
    return (
        <div>
            <AuthPage form={<ResetPassword/>} />
        </div>
    );
}

export default ResetPasswordPage;