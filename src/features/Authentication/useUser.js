import { getCurrentUser } from '../../api/authAPI';
import { useQuery } from '@tanstack/react-query';

export function useUser() {
  const { isPending, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const isAuthenticated = user?.aud === 'authenticated';

  return { isPending, isAuthenticated, user };
}
