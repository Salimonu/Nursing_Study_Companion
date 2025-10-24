import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import supabase from '../../api/supabase';
import { Center, Spinner } from '@chakra-ui/react';

function useAuthSync() {
  const queryClient = useQueryClient();
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    // 1️⃣ Get initial session
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error('❌ Error getting session:', error);
      }

      if (data?.session?.user) {
        queryClient.setQueryData(['user'], data.session.user);
      } else {
        queryClient.removeQueries(['user']);
      }

      // ✅ Important: mark as ready *after* fetching session
      setIsAuthReady(true);
    };

    getSession();

    // 2️⃣ Listen for auth changes (login/logout/refresh)
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user) {
          queryClient.setQueryData(['user'], session.user);
        } else {
          queryClient.removeQueries(['user']);
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [queryClient]);

  return isAuthReady;
}

export function AuthSyncWrapper({ children }) {
  const isAuthReady = useAuthSync();

  if (!isAuthReady) {
    return (
      <Center h="100vh">
        <Spinner size="xl" color="blue.600" />
      </Center>
    );
  }

  return children;
}
