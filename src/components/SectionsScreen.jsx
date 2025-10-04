import { Link, NavLink, Outlet, useLocation } from 'react-router';

function SectionsScreen() {
  const location = useLocation();

  const isLandingPage = location.pathname === '/sections';

  const baseClasses =
    'py-2 px-6 rounded uppercase text-xl font-semibold transition-colors';
  const activeClasses = 'bg-blue-800 text-white';
  const inactiveClasses = 'bg-blue-500 text-white hover:bg-blue-700';

  return (
    <>
      {isLandingPage && (
        <div>
          <h2 className="text-center text-4xl pb-4 text-blue-800 font-bold uppercase">
            Anatomy and Physiology
          </h2>
          {/* <h2 className="uppercase text-4xl text-center mt-20">👋 welcome</h2> */}
          <Link to="/">
            <span className=" py-2 mb-4 text-2xl font-semibold cursor-pointer hover:underline">
              Home-
            </span>

            {/* {' '}
            <button className="mb-4 text-2xl py-1 px-2 rounded-lg bg-blue-300 font-semibold text-white cursor-pointer hover:bg-blue-600">
              Home{' '}
            </button>{' '} */}
          </Link>
          <span className="mb-4 text-2xl font-semibold ">Sections</span>

          <p className="text-4xl text-center my-10">
            Select <strong> a section </strong>
          </p>

          <div className="flex flex-col gap-4">
            <NavLink
              to="section1"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              Section 1
            </NavLink>

            <NavLink
              to="section2"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              Section 2
            </NavLink>

            <NavLink
              to="section3"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              Section 3
            </NavLink>
          </div>
        </div>
      )}
      <div className="mt-8">
        <Outlet />
      </div>

      {/* -----------------------------------
        <Link to="Section1">
          <button className="bg-blue-500 py-2 px-4 hover:bg-blue-800 rounded text-white uppercase text-2xl font-semibold">
            Section 1
          </button>
        </Link>
        <Link to="Section2">
          <button className="bg-blue-500 py-2 px-4 hover:bg-blue-800 rounded text-white uppercase text-2xl font-semibold">
            Section 2
          </button>
        </Link>
        <Link to="Section3">
          <button className="bg-blue-500 py-2 px-4 hover:bg-blue-800 rounded text-white uppercase text-2xl font-semibold">
            Section 3
          </button>
        </Link>
      </div>

      <div className="mt-8">
        <Outlet />
      </div> */}
    </>
  );
}

export default SectionsScreen;
