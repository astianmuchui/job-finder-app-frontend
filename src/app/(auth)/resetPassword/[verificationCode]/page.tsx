import AuthPage from "@/app/(auth)/_components/AuthPage";
import ResetPassword from "@/app/(auth)/_components/ResetPassword";


const ResetPasswordPage = () => {
    return (
        <div>
            <AuthPage form={<ResetPassword/>} />
        </div>
    );
}

export default ResetPasswordPage;