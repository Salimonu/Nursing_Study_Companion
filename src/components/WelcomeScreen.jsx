import { Link } from 'react-router';

function WelcomeScreen() {
  return (
    <>
      <h1 className="text-center text-4xl py-8 text-blue-800 font-bold uppercase">
        Nursing Study Companion
      </h1>
      <h2 className="uppercase text-4xl text-center mt-20">👋 welcome</h2>
      <p className="text-4xl text-center my-10">
        TEST your knowledge of <strong> ANATOMY and PHYSIOLOGY </strong>
      </p>
      <p className="text-center">
        <Link to="quiz">
          <button className="bg-blue-500 py-2 px-4 hover:bg-blue-800 rounded text-white uppercase text-2xl font-semibold">
            start quiz
          </button>
        </Link>
      </p>
    </>
  );
}

export default WelcomeScreen;
