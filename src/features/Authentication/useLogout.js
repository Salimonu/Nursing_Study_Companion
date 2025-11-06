import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutAPI } from '../../api/authAPI';
import { useNavigate } from 'react-router';
import { useToast } from '@chakra-ui/react';

function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const toast = useToast();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      queryClient.removeQueries();
      toast({
        title: 'Logout Successful',
        description: "You're logged out",
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      navigate('/', { replace: true });
    },
  });

  return { logout, isPending };
}

export default useLogout;
