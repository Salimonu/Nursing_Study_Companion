import { useForm } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Spinner,
  Flex,
  Box,
  Text,
} from '@chakra-ui/react';
import { useSignUp } from './useSignUp';
import { useNavigate } from 'react-router';

function SignUpForm() {
  const navigate = useNavigate();
  const { signup, isPending } = useSignUp();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ firstName, email, password }) => {
    signup(
      { firstName, email, password },
      {
        onSettled: reset,
      }
    );
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-blue-50 border-4 border-blue-600 rounded-2xl p-8 "
      >
        <FormControl>
          <FormLabel>FirstName</FormLabel>
          <Input
            type="text"
            {...register('firstName', { required: true })}
            placeholder="Enter your firstname"
            autoComplete="username"
            disabled={isPending}
          />
          {errors.name && (
            <p style={{ color: 'red', textAlign: 'center', marginTop: '6px' }}>
              Name is required
            </p>
          )}
        </FormControl>

        <FormControl mt="20px" isInvalid={errors.email}>
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            {...register('email', {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Pls, Provide a valid email address.',
              },
            })}
            placeholder="Enter your email address"
            autoComplete="email"
            disabled={isPending}
          />
          {errors.email && (
            <p style={{ color: 'red', textAlign: 'center', marginTop: '6px' }}>
              Email is required
            </p>
          )}

          <FormHelperText textAlign="right">
            ** We will never share your email.
          </FormHelperText>
        </FormControl>

        <FormControl mt="20px">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            {...register('password', {
              required: true,
              minLength: {
                value: 8,
                message: 'Use minimum of 8 characters',
              },
            })}
            placeholder="Enter a strong password"
            autoComplete="username"
            disabled={isPending}
          />
          {errors.password && (
            <p style={{ color: 'red', textAlign: 'center', marginTop: '6px' }}>
              Password is required; minimum 8 characters
            </p>
          )}
        </FormControl>

        <FormControl mt="20px" isInvalid={errors.password}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            {...register('passwordConfirm', {
              required: true,
              validate: value =>
                value === getValues().password || 'Passwords must match',
            })}
            placeholder="Confirm your password"
            autoComplete="username"
            disabled={isPending}
          />
          {errors.passwordConfirm && (
            <p style={{ color: 'red', textAlign: 'right', marginTop: '6px' }}>
              Passwords do NOT match
            </p>
          )}
        </FormControl>

        <Box>
          <Button
            type="submit"
            w="60%"
            mt="30px"
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
            mt="30px"
            fontSize="20px"
            border="solid"
            borderColor="blue"
            onClick={reset}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default SignUpForm;
