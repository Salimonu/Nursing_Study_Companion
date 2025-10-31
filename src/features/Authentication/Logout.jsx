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
        <div
          onClick={logout}
          className="bg-red-700 cursor-pointer hover:bg-red-500 py-1 px-3 rounded-4xl flex items-center"
        >
          <Icon
            as={FiLogOut}
            w={8}
            h={8}
            // bg="red"
            p="8px"
            boxSize={10}
          />{' '}
          <span className="text-white font-semibold text-2xl">Log Out</span>{' '}
        </div>
      )}
    </Box>
  );
}

export default Logout;
