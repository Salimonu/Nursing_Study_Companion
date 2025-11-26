import { useEffect, useRef } from 'react';
import { Spinner } from '@chakra-ui/react';
import { BsFacebook, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { NavLink, Link } from 'react-router-dom';

import Logout from '@/features/Authentication/Logout';
import useLogout from '@/features/Authentication/useLogout';
import { useUser } from '@/features/Authentication/useUser';
import logo from '/quiz4nurses-logo.png';

function Sidebar({ isOpen, closeSideBar }) {
  const { isAuthenticated } = useUser();
  const { logout, isPending: logOutPending } = useLogout();
  const sidebarRef = useRef(null);

  useEffect(() => {
    // Close the sidebar if a user clicked outside the sidebar
    function handleCloseSideBar(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSideBar();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleCloseSideBar);
      document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = 'auto';
    return () => {
      document.removeEventListener('mousedown', handleCloseSideBar);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, closeSideBar]);

  return (
    <>
      <div className="overlay"></div>

      <div
        ref={sidebarRef}
        className="sidegrid sidebar fixed z-50 top-0 h-screen w-[70vw] py-3 text-xl bg-blue-50/90 text-blue-800 font-semibold"
      >
        {/* row 1 */}
        <div className="pt-3 px-10 flex justify-start items-end">
          {/* <Link to="/">
            <span className="ml-4 font-bold text-6xl text-blue-800">Q</span>
            <span className=" text-4xl font-bold text-blue-800">
              uiz4Nurses
            </span>
          </Link> */}

          <Link to="/">
            <img
              src={logo}
              alt="quiz4nurses logo"
              onClick={closeSideBar}
              className="w-40"
            />
          </Link>
        </div>
        {/* row 2 */}
        <div>
          <ul className="flex flex-col p-10 gap-8">
            <li
              onClick={closeSideBar}
              className="px-5 hover:text-shadow-lg hover:text-shadow-blue-300"
            >
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              onClick={closeSideBar}
              className="px-5 hover:text-shadow-lg hover:text-shadow-blue-300 mr-4"
            >
              <Link to="about"> About</Link>
            </li>
            <li
              onClick={closeSideBar}
              className="px-5 hover:text-shadow-lg hover:text-shadow-blue-300 mr-4"
            >
              <a
                href="https://chat.whatsapp.com/FJLSUX7byyN4bzTB5M0SkY?mode=wwt"
                target="_blank"
              >
                Forum
              </a>
            </li>
            {isAuthenticated ? (
              <li
                onClick={logout}
                className="cursor-pointer px-5 hover:text-shadow-lg text-orange-700 hover:text-shadow-orange-300 mr-4"
              >
                {' '}
                {logOutPending ? <Spinner size="xs" mr="6px" /> : ''}
                Logout
              </li>
            ) : (
              ''
            )}
          </ul>
        </div>
        {/* row 3 */}
        <div>
          <ul className="flex gap-10 p-5 ">
            <li className="px-3">
              <a
                href="https://www.linkedin.com/in/hammed-salimonu-6a388322a/"
                target="_blank"
              >
                <BsLinkedin className="hover:scale-140 duration-800" />
              </a>
            </li>
            <li className="px-3">
              <a
                href="https://www.facebook.com/share/18vYDY7qrE/"
                target="_blank"
              >
                <BsFacebook className="hover:scale-140 duration-800" />
              </a>
            </li>
            <li className="px-3">
              <a
                href="https://chat.whatsapp.com/FJLSUX7byyN4bzTB5M0SkY?mode=wwt"
                target="_blank"
              >
                <BsWhatsapp className="hover:scale-140 duration-800" />
              </a>
            </li>
          </ul>

          <p className="mx-8 py-2 text-xl border-t-1">
            &copy; 2025.{' '}
            <a
              href="https://qmedwebsolutions.netlify.app/"
              target="_blank"
              className="underline hover:font-semibold duration-1000"
            >
              Qmed Web Solutions.
            </a>{' '}
            All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
