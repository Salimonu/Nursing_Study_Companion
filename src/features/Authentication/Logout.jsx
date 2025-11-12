import { Box, Icon, Spinner } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import useLogout from './useLogout';

function Logout() {
  const { logout, isPending } = useLogout();

  return (
    <div
      onClick={logout}
      className="cursor-pointer hover:text-shadow-lg hover:text-shadow-blue-300 px-3"
    >
      <div className="hidden md:block">
        {isPending ? (
          <p>
            {' '}
            <Spinner size="xs" /> <span className="  text-xl">Log Out</span>
            <Icon
              as={FiLogOut}
              w={8}
              h={8}
              color="white"
              p="8px"
              boxSize={10}
            />
          </p>
        ) : (
          <p className="flex items-center">
            {' '}
            <span className=" text-white text-xl">Log Out</span>{' '}
            <Icon
              as={FiLogOut}
              w={8}
              h={8}
              color="white"
              p="8px"
              boxSize={10}
            />{' '}
          </p>
        )}
      </div>
      <div className="md:hidden">
        {isPending ? (
          <p>
            {' '}
            <Spinner size="xs" />
            <Icon
              as={FiLogOut}
              w={8}
              h={8}
              color="white"
              p="8px"
              boxSize={10}
            />
          </p>
        ) : (
          <Icon as={FiLogOut} w={8} h={8} color="white" p="8px" boxSize={10} />
        )}
      </div>
    </div>
  );
}

export default Logout;
