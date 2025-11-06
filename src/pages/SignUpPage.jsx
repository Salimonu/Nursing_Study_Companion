import { Container } from '@chakra-ui/react';
import SignUpForm from '../features/Authentication/SignUpForm';

function SignUpPage() {
  return (
    <Container width="90vw">
      <div className="text-3xl mt-10 mb-6">
        <p>Sign Up for free</p>
      </div>
      <SignUpForm />
    </Container>
  );
}

export default SignUpPage;
