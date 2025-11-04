import Button from '@/ui/Button';
import { Box, Container, Spacer, Text } from '@chakra-ui/react';
import { Link } from 'react-router';

function HomePage() {
  return (
    <>
      <div className="py-3 px-6 text-center">
        <h2 className="text-6xl/16 font-bold mb-5">Master what you learned!</h2>
        <p className="text-2xl mb-4 text-gray-700">
          Excel in your nursing exams with Quiz4nurses App. Read, Revise, Test
          anytime anywhere.
        </p>
        <Button style="text-3xl text-white bg-blue-800 font-semibold bg-blue-400 p-2 rounded-3xl">
          <Link to="/signup"> Sign up for free </Link>
        </Button>
        <p className="text-2xl mt-4 mb-2">Already have an account?</p>
        <Button style="text-3xl text-white bg-blue-800 font-semibold bg-blue-400 p-2 rounded-3xl">
          <Link to="/login"> Login </Link>
        </Button>
      </div>
    </>
  );
}

export default HomePage;
