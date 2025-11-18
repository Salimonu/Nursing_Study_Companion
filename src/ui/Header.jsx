import { Spinner } from '@chakra-ui/react';
import { BsFacebook, BsList, BsWhatsapp, BsXLg } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import logo from '/quiz4nurses-logo.png';

import { useUser } from '@/features/Authentication/useUser';
import useLogout from '@/features/Authentication/useLogout';

function Header({ isOpen, onOpen }) {
  const { isAuthenticated } = useUser();
  const { logout, isPending: logOutPending } = useLogout();

  return (
    <>
      <div className="flex justify-between items-end mb-6 px-4 bg-linear-65 from-blue-300 to-orange-300">
        {/* 1st box */}
        <div className="py-3 flex justify-start items-end">
          <Link to="/">
            <img src={logo} alt="quiz4nurses logo" className="w-40" />
            {/* <span className="font-bold text-6xl text-blue-800">Q</span>
            <span className=" text-4xl font-bold text-blue-800">
              uiz4Nurses
            </span> */}
          </Link>
        </div>

        {/* 2nd box */}
        <div className="flex justify-between items-center gap-2 py-3">
          <div className="hidden md:block text-2xl  mr-6 font-semibold">
            <NavLink to="/" className="mr-4 hover:underline">
              Home
            </NavLink>
            <NavLink to="about" className="mr-4 hover:underline">
              {' '}
              About
            </NavLink>
            <a
              className="hover:underline"
              href="https://chat.whatsapp.com/FJLSUX7byyN4bzTB5M0SkY?mode=wwt"
              target="_blank"
            >
              Forum
            </a>
          </div>
          <a
            className=" mr-2"
            href="https://chat.whatsapp.com/FJLSUX7byyN4bzTB5M0SkY?mode=wwt"
            target="_blank"
          >
            <BsWhatsapp size={30} color="#193cb8" />
          </a>

          <a
            className="hidden sm:block"
            href="https://www.facebook.com/share/18vYDY7qrE/"
            target="_blank"
          >
            <BsFacebook size={30} color="#193cb8" />
          </a>
        </div>

        {/* 2nd box */}
        {isAuthenticated ? (
          <li
            onClick={logout}
            className="hidden md:block cursor-pointer mr-4 text-orange-700 hover:text-shadow-orange-300 hover:underline hover:text-shadow-lg text-2xl font-semibold py-3"
          >
            {' '}
            {logOutPending ? <Spinner size="xs" mr="6px" /> : ''}
            Logout
          </li>
        ) : (
          ''
        )}
        {isOpen ? (
          <div className="xl:hidden py-3 ">
            <BsXLg
              color="#193cb8"
              onClick={onOpen}
              className="cursor-pointer text-4xl hover:scale-120 duration-800"
            />
          </div>
        ) : (
          <div className="xl:hidden py-3 ">
            <BsList
              color="#193cb8"
              onClick={onOpen}
              className=" z-[999] cursor-pointer text-4xl hover:scale-120 duration-800"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
