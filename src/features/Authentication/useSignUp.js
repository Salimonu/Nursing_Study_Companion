import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signUp as signUpAPI } from '../../api/authAPI';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

export function useSignUp() {
  const navigate = useNavigate();
  const toast = useToast();
  const queryClient = useQueryClient();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signUpAPI,
    onSuccess: user => {
      navigate('/profile', { replace: true });
      queryClient.invalidateQueries({
        queryKey: ['user'],
      });

      toast({
        title: 'Account successfully created',
        description: 'Pls check your email for confirmation',
        status: 'info',
        duration: 60000,
        isClosable: true,
        position: 'top',
      });
    },
  });

  return { signup, isPending };
}
