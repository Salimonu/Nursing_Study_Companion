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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-blue-50 border-2 border-orange-500 rounded-2xl p-8"
    >
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          {...register('email', { required: true })}
          placeholder="Email"
          autoComplete="username"
          disabled={isPending}
          borderColor="blue"
        />
      </FormControl>

      <FormControl mt="20px">
        <FormLabel>Enter your password</FormLabel>
        <Input
          type="password"
          {...register('password', { required: true })}
          placeholder="password"
          borderColor="blue"
          disabled={isPending}
        />
      </FormControl>

      <Box>
        <Button
          type="submit"
          w="60%"
          mt="20px"
          bg="blue"
          _hover={{ bg: 'blue.700' }}
          textColor="white"
          fontSize="22px"
          disabled={isPending}
        >
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
          fontSize="20px"
          border="solid"
          borderColor="blue"
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
