import { useQuery } from '@tanstack/react-query';
import { fetchSubscriptionStatus } from '@/api/subscriptionAPI';
import { CACHE_TIME, RETRY, STALE_TIME } from '@/utils/constants';

export const useSubscriptionStatus = () => {
  const {
    data: status = 'free',
    isLoading: loading,
    isError: statusError,
  } = useQuery({
    queryKey: ['subscription-status'],
    queryFn: fetchSubscriptionStatus,
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
    retry: RETRY,
  });

  return {
    status,
    loading,
    statusError,
  };
};

// export const useSubscriptionStatus = () => {
//   const {
//     data: status = 'free',
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ['subscription-status'],
//     queryFn: fetchSubscriptionStatus,
//     staleTime: 1000 * 60 * 5, // 5 minutes cache
//     cacheTime: 1000 * 60 * 10, // 10 minutes in memory
//     retry: 1,
//   });

//   return {
//     status,
//     loading: isLoading,
//     isError,
//   };
// };

// import { useEffect, useState } from 'react';
// import supabase from '../../api/supabase';

// export const useSubscriptionStatus = () => {
//   const [status, setStatus] = useState('free');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStatus = async () => {
//       const {
//         data: { user },
//       } = await supabase.auth.getUser();
//       if (!user) {
//         setStatus('free');
//         setLoading(false);
//         return;
//       }

//       const { data } = await supabase
//         .from('user_profiles')
//         .select('subscription_status')
//         .eq('id', user.id)
//         .single();

//       setStatus(data?.subscription_status || 'free');
//       setLoading(false);
//     };

//     fetchStatus();
//   }, []);

//   return { status, loading };
// };
