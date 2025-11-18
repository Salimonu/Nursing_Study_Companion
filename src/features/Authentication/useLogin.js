import { login as loginAPI } from '../../api/authAPI';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

export function useLogin() {
  const navigate = useNavigate();
  const toast = useToast();
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: data => loginAPI(data),
    onSuccess: () => {
      navigate('/profile', { replace: true });
      toast({
        title: 'Login Successful',
        description: "You're welcome back",
        status: 'info',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
    },
    onError: err => {
      toast({
        title: 'Login Failed!',
        description: err.message || 'Something went wrong. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    },
  });
  return { login, isPending };
}
