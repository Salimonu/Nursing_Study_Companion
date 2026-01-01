// import { login as loginAPI } from '../../api/authAPI';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { useNavigate } from 'react-router-dom';
// import { useToast } from '@chakra-ui/react';

// export function useLogin() {
//   const navigate = useNavigate();
//   const toast = useToast();
//   const queryClient = useQueryClient();

//   const { mutate: login, isPending } = useMutation({
//     mutationFn: data => loginAPI(data),
//     onSuccess: () => {
//       navigate('/profile', { replace: true });
//       toast({
//         title: 'Login Successful',
//         description: "You're welcome back",
//         status: 'info',
//         duration: 5000,
//         isClosable: true,
//         position: 'top',
//       });
//       queryClient.invalidateQueries({
//         queryKey: ['user'],
//       });
//     },
//     onError: err => {
//       toast({
//         title: 'Login Failed!',
//         description: err.message || 'Something went wrong. Please try again.',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//         position: 'top',
//       });
//     },
//   });
//   return { login, isPending };
// }

import { useEffect, useState } from 'react';
import supabase from '../../api/supabase';

export const useSubscriptionStatus = () => {
  const [status, setStatus] = useState('free');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        setStatus('free');
        setLoading(false);
        return;
      }

      const { data } = await supabase
        .from('user_profiles')
        .select('subscription_status')
        .eq('id', user.id)
        .single();

      setStatus(data?.subscription_status || 'free');
      setLoading(false);
    };

    fetchStatus();
  }, []);

  return { status, loading };
};
