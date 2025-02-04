import FormSignUp from "../components/fragments/FormSignUp";
import Authlayout from "../components/layouts/AuthLayout";

const SignUpPage = () => {
  return (
    <Authlayout type="sign up">
      <FormSignUp />
    </Authlayout>
  );
};

export default SignUpPage;