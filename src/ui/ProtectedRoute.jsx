import { useUser } from '../features/Authentication/useUser';
import { Center, Spinner } from '@chakra-ui/react';

import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  // Load the authenticated user
  const { isPending, isAuthenticated } = useUser();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

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
