
import AuthPage from "@/app/(auth)/_components/AuthPage";
import VerifyEmail from "@/app/(auth)/_components/VerifyEmail";

const VerifyEmailPage = () => {


    return (
        <AuthPage form={<VerifyEmail/>}/>
    );
}

export default VerifyEmailPage;