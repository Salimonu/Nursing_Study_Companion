import { updateCurrentUser } from '../../api/authAPI';
import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: async () => {
      toast({
        title: 'Update successful',
        description: 'Account successfully updated',
        status: 'success',
        duration: 60000,
        isClosable: true,
        position: 'top',
      });
      await queryClient.invalidateQueries({
        queryKey: ['user'],
      });
      await queryClient.refetchQueries({ queryKey: ['user'] });
    },
    onError: () => {
      toast({
        title: 'Update failed',
        description: 'Failed to update account',
        status: 'error',
        duration: 60000,
        isClosable: true,
        position: 'top',
      });
    },
  });

  return { updateUser, isUpdating };
}
