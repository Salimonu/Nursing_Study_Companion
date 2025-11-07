import { Box, Icon, Spinner } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import useLogout from './useLogout';

function Logout() {
  const { logout, isPending } = useLogout();

  return (
    <div
      onClick={logout}
      className="text-white bg-orange-400 cursor-pointer hover:bg-orange-500 px-3 rounded-3xl flex items-center"
    >
      {isPending ? (
        <p>
          {' '}
          <Spinner size="xs" />
          <span className="  text-xl">Log Out</span>
          <Icon as={FiLogOut} w={8} h={8} color="white" p="8px" boxSize={10} />
        </p>
      ) : (
        <p>
          {' '}
          <span className=" text-white text-xl">Log Out</span>{' '}
          <Icon as={FiLogOut} w={8} h={8} color="white" p="8px" boxSize={10} />{' '}
        </p>
      )}
    </div>
  );
}

export default Logout;
