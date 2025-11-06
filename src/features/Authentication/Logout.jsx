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
          className="bg-orange-400 cursor-pointer hover:bg-orange-500 px-3 rounded-3xl flex items-center"
        >
          <Icon as={FiLogOut} w={8} h={8} color="white" p="8px" boxSize={10} />{' '}
          <span className=" text-white text-xl">Log Out</span>{' '}
        </div>
      )}
    </Box>
  );
}

export default Logout;
