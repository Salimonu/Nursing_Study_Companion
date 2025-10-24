import { useUser } from '../features/Authentication/useUser';
import { Center, Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // Load the authenticated user
  const { isPending, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated) navigate('/homepage', { replace: true });
    },
    [navigate, isAuthenticated, isPending]
  );

  // While loading show a Spinner
  if (isPending)
    return (
      <Center h="100vh">
        <Spinner size="xl" color="blue.600" />
      </Center>
    );

  // if there is a user redirect to profilepage
  if (isAuthenticated) return children;

  return null;
}

export default ProtectedRoute;
