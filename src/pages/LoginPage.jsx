import { Container } from '@chakra-ui/react';
import LoginForm from '../features/Authentication/LoginForm';

function LoginPage() {
  return (
    <Container>
      <div className="text-3xl my-10">
        <p>Log in to your account</p>
      </div>
      <LoginForm />
    </Container>
  );
}

export default LoginPage;
