import { Link } from 'react-router';

function QuizScreen() {
  return (
    <div>
      <h2 className="text-center text-4xl py-8 text-blue-800 font-bold uppercase">
        Anatomy and Physiology
      </h2>
      <Link to="/">
        <button className="text-2xl p-1 rounded bg-blue-400 text-white cursor-pointer hover:bg-blue-600">
          Home
        </button>
      </Link>
      <div className="w-[50vw] mx-auto">
        <p className="text-2xl">
          Question <strong>4</strong> of 20
        </p>
        <h4 className="text-center text-5xl mb-6">question</h4>
        <div className="text-center">
          <button className=" text-3xl border-1 mb-2 px-4 py-1 rounded-4xl cursor-pointer hover:bg-blue-200 hover:border-blue-200">
            option
          </button>
        </div>
        <div className="text-center">
          <button className=" text-3xl border-1 mb-2 px-4 py-1 rounded-4xl cursor-pointer hover:bg-blue-200 hover:border-blue-200">
            option
          </button>
        </div>
        <div className="text-center">
          <button className=" text-3xl border-1 mb-2 px-4 py-1 rounded-4xl cursor-pointer hover:bg-blue-200 hover:border-blue-200">
            option
          </button>
        </div>
        <div className="text-center">
          <button className=" text-3xl border-1 mb-2 px-4 py-1 rounded-4xl cursor-pointer hover:bg-blue-200 hover:border-blue-200">
            option
          </button>
        </div>

        <p className="flex justify-between mt-4">
          <button className="border-1 px-4 py-1 rounded-4xl cursor-pointer hover:bg-blue-200 hover:border-blue-200">
            {' '}
            &larr; Previous
          </button>
          <button className="border-1 px-4 py-1 rounded-4xl cursor-pointer hover:bg-blue-200 hover:border-blue-200">
            {' '}
            Next &rarr;
          </button>
        </p>
      </div>
    </div>
  );
}

export default QuizScreen;
