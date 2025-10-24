import { useForm } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Spinner,
  Text,
  Box,
} from '@chakra-ui/react';
import { useLogin } from './useLogin';
import { useNavigate } from 'react-router';

function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm();

  const { login, isPending } = useLogin();

  const onSubmit = data => {
    login(data, {
      onSettled: () => {
        reset();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 p-8">
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          {...register('email', { required: true })}
          placeholder="Email"
          autoComplete="username"
          disabled={isPending}
        />

        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl mt="20px">
        <FormLabel>Enter your password</FormLabel>
        <Input
          type="password"
          {...register('password', { required: true })}
          placeholder="password"
          disabled={isPending}
        />

        <FormHelperText>Use a strong password.</FormHelperText>
      </FormControl>

      <Box>
        <Button type="submit" w="60%" mt="20px" disabled={isPending}>
          {isPending ? (
            <Box>
              {' '}
              <Spinner size="xs" /> Submit{' '}
            </Box>
          ) : (
            'Submit'
          )}
        </Button>
        <Button
          w="30%"
          ml="20px"
          mt="20px"
          onClick={() => {
            navigate('/homepage');
          }}
        >
          Cancel
        </Button>
      </Box>
    </form>
  );
}

export default LoginForm;
