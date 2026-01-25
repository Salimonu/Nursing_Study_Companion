import { useQuery } from '@tanstack/react-query';
import { fetchSubscriptionStatus } from '@/api/subscriptionAPI';
import { CACHE_TIME, RETRY, STALE_TIME } from '@/utils/constants';

export const useSubscriptionStatus = () => {
  const {
    data,
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
    subscriptionStatus: data?.subscription_status ?? 'free',
    expiresAt: data?.expires_at ?? null,
    loading,
    statusError,
  };

};
