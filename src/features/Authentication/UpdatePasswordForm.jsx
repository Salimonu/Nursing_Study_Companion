import { useForm } from 'react-hook-form';

import { useUpdateUser } from './useUpdateUser';

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormHelperText,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

function UpdatePasswordForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();
  // const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Flex gap="14px" align="center">
          <FormLabel>New password (min 8 chars)</FormLabel>
          <Input
            type="password"
            {...register('password', {
              required: true,
              minLength: {
                value: 8,
                message: 'Password needs a minimum of 8 characters',
              },
            })}
            placeholder="Enter new password"
            autoComplete="current-password"
            disabled={isUpdating}
          />
          {errors.password && (
            <p style={{ color: 'red', textAlign: 'center', marginTop: '6px' }}>
              Password needs a minimum of 8 characters
            </p>
          )}
        </Flex>
        <FormHelperText textAlign="center">
          Use a strong password.
        </FormHelperText>
      </FormControl>

      <FormControl>
        <Flex gap="14px" align="center">
          <FormLabel>Confirm password</FormLabel>
          <Input
            type="password"
            {...register('passwordConfirm', {
              required: true,
              validate: value =>
                getValues().password === value || 'Passwords need to match',
            })}
            placeholder="Confirm password"
            autoComplete="new-password"
            disabled={isUpdating}
          />
          {errors.passwordConfirm && (
            <p style={{ color: 'red', textAlign: 'center', marginTop: '6px' }}>
              Passwords must match
            </p>
          )}
        </Flex>
        <FormHelperText textAlign="center">
          Confirm your password.
        </FormHelperText>
      </FormControl>

      <Box>
        <Button type="submit" w="60%" mt="20px" disabled={isUpdating}>
          {isUpdating ? (
            <Box>
              {' '}
              <Spinner size="xs" /> Update password{' '}
            </Box>
          ) : (
            'Update password'
          )}
        </Button>
        <Button
          w="30%"
          ml="20px"
          mt="20px"
          onClick={() => {
            navigate('/homepage');
          }}
          variation="secondary"
        >
          Cancel
        </Button>
      </Box>
    </form>
  );
}

export default UpdatePasswordForm;
