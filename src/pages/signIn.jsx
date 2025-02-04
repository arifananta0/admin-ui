import FormSignIn from "../components/fragments/FormSignIn";
import Authlayout from "../components/layouts/AuthLayout";

const SignInPage = () => {
  return (
    <Authlayout type="sign in">
      <FormSignIn />
    </Authlayout>
  );
};

export default SignInPage;