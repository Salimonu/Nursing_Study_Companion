import { Box, Icon, Spinner } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import useLogout from './useLogout';

function Logout() {
  const { logout, isPending } = useLogout();

  return (
    <Box>
      {isPending ? (
        <Spinner size="xs" />
      ) : (
        <Icon
          as={FiLogOut}
          w={8}
          h={8}
          bg="red"
          p="8px"
          boxSize={10}
          onClick={logout}
        />
      )}
    </Box>
  );
}

export default Logout;
