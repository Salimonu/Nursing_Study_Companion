import { Link, Navigate } from 'react-router-dom';

// import img from '@/assets/img/male-nurse-reading.jpg';
import Button from '@/ui/Button';
import Carousel from '@/ui/Carousel';

import { useUser } from '@/features/Authentication/useUser';
import { Center, Spinner } from '@chakra-ui/react';

function HomePage() {
  const { isPending, isAuthenticated } = useUser();

  const quoteStyle =
    'rounded-2xl border-solid border-orange-300 border-6 bg-[url(@/assets/img/male-nurse-reading.jpg)] bg-cover bg-bottom bg-no-repeat relative text-3xl text-white h-[350px] w-[90%] mx-auto';

  if (isAuthenticated) {
    return <Navigate to="/profile" replace />;
  }
  return (
    <>
      <div className="py-3 px-6 text-center">
        <h2 className="text-6xl/16 font-bold mb-5">Master what you learn!</h2>
        <p className="text-2xl mb-4 text-gray-700">
          Excel in your nursing exams with Quiz4nurses App. Read, Revise and
          Recall anytime anywhere.
        </p>
        <Link to="/signup">
          <Button style="text-3xl text-white bg-blue-600 w-[80%] mx-auto font-semibold bg-blue-400 p-2 rounded-3xl">
            Sign up for free
          </Button>
        </Link>
        <p className="text-2xl mt-4 mb-2">Already have an account?</p>
        <Link to="/login">
          <Button style="text-3xl text-white bg-orange-400 w-[80%] mx-auto font-semibold bg-blue-400 p-2 rounded-3xl">
            Login
          </Button>
        </Link>
      </div>
      <div className={quoteStyle}>
        <div className="absolute inset-0 rounded-2xl bg-blue-900/70">
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default HomePage;
