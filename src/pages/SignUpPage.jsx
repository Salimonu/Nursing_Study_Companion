import { Container } from '@chakra-ui/react';
import SignUpForm from '../features/Authentication/SignUpForm';

function SignUpPage() {
  return (
    <Container width="80vw">
      <div className="text-3xl mt-10 mb-6">
        <p>SignUp</p>
      </div>
      <SignUpForm />
    </Container>
  );
}

export default SignUpPage;
