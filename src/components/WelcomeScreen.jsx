import { Link } from 'react-router';
import Feedback from './feedback';

function WelcomeScreen() {
  return (
    <>
      <p className="uppercase text-4xl text-center mt-20">👋 welcome</p>
      <p className="text-4xl text-center mt-10 mb-30">
        TEST your knowledge of <strong> ANATOMY and PHYSIOLOGY </strong>
      </p>
      <p className="text-center ">
        <Link to="sections">
          <button className="bg-blue-500 py-2 px-4 hover:bg-blue-800 rounded text-white uppercase text-2xl font-semibold">
            start quiz
          </button>
        </Link>
      </p>
    </>
  );
}

export default WelcomeScreen;
