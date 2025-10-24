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
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 p-8">
        <FormControl>
          <Flex gap="14px" align="center">
            <FormLabel>FirstName</FormLabel>
            <Input
              type="text"
              {...register('firstName', { required: true })}
              placeholder="Enter your firstname"
              autoComplete="username"
              disabled={isPending}
            />
            {errors.name && (
              <p
                style={{ color: 'red', textAlign: 'center', marginTop: '6px' }}
              >
                Name is required
              </p>
            )}
          </Flex>
          <FormHelperText textAlign="center">
            Enter your firstname or nickname.
          </FormHelperText>
        </FormControl>

        <FormControl mt="20px" isInvalid={errors.email}>
          <Flex columnGap="14px" align="center">
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
              <p
                style={{ color: 'red', textAlign: 'center', marginTop: '6px' }}
              >
                Email is required
              </p>
            )}
          </Flex>
          <FormHelperText textAlign="center">
            We will never share your email.
          </FormHelperText>
        </FormControl>

        {/* <FormControl mt="20px" isInvalid={errors.whatsapp}>
          <Flex gap="14px" align="center">
            <FormLabel>WhatsApp No</FormLabel>
            <Input
              type="tel"
              {...register('whatsapp', {
                pattern: {
                  value: /^[0-9]{11,15}$/,
                  message: 'Enter a valid WhatsApp number (11–15 digits)',
                },
              })}
              placeholder="Enter your whatsapp no"
              autoComplete="tel"
              disabled={isPending}
            />
          </Flex>

          <FormHelperText textAlign="center">
            You will get FIRST CLASS update.
          </FormHelperText>

          {errors.whatsapp && (
            <p style={{ color: 'red', textAlign: 'center', marginTop: '6px' }}>
              {errors.whatsapp.message}
            </p>
          )}
        </FormControl> */}

        <FormControl mt="20px">
          <Flex gap="14px" align="center">
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
              <p
                style={{ color: 'red', textAlign: 'center', marginTop: '6px' }}
              >
                Password is required; minimum 8 characters
              </p>
            )}
          </Flex>
          <FormHelperText textAlign="center">
            Use a strong password.
          </FormHelperText>
        </FormControl>

        <FormControl mt="20px" isInvalid={errors.password}>
          <Flex gap="10px" align="center">
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
              <p
                style={{ color: 'red', textAlign: 'center', marginTop: '6px' }}
              >
                Passwords do NOT match
              </p>
            )}
          </Flex>
          <FormHelperText textAlign="center">
            Passwords must match.
          </FormHelperText>
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
    </div>
  );
}

export default SignUpForm;
