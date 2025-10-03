import { useState } from 'react';
import { Link } from 'react-router';
import data from '../data/questions.json';

function QuizScreen() {
  const questions = data.questions;

  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [addedPoints, setAddedPoints] = useState(false);

  const numQuestions = questions?.length;
  const totalPoints = questions?.reduce(
    (prev, question) => prev + question.points,
    0
  );

  function handleNext() {
    setIndex(index => index + 1);
    setAnswer(null);
    setAddedPoints(false);
  }

  function handleAnswer(selectedIndex) {
    setAnswer(selectedIndex);
    const question = questions[index];
    const correctAnswer = selectedIndex === question.correctOption;
    if (correctAnswer && !addedPoints) {
      setPoints(points => points + question.points);
      setAddedPoints(true);
    }
  }

  function handleShowPoints() {
    setIndex(index => index + numQuestions);
  }

  return (
    <>
      <h2 className="text-center text-4xl py-4 text-blue-800 font-bold uppercase">
        Anatomy and Physiology
      </h2>
      <div className="flex justify-between">
        <Link to="/">
          {' '}
          <button className="mb-4 text-2xl py-1 px-2 rounded-lg bg-blue-300 font-semibold text-white cursor-pointer hover:bg-blue-600">
            Home{' '}
          </button>{' '}
        </Link>
        {index ? (
          <button
            onClick={handleShowPoints}
            className="border-1 px-4 py-1 text-2xl rounded-4xl cursor-pointer text-white font-bold bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400"
          >
            My Score &rarr;{' '}
          </button>
        ) : (
          ''
        )}
      </div>

      {index > numQuestions - 1 ? (
        <div className=" bg-blue-300 text-6xl text-center w-[60%] mx-auto mb-4 px-10 py-30 rounded-lg">
          <span>You scored </span>
          <p className="font-semibold mt-6">
            {points} out of {totalPoints} points
          </p>
        </div>
      ) : (
        <div>
          <div className="lg:flex justify-between  gap-8">
            <div className="flex-1 mb-4">
              {index <= questions.length - 1 && (
                <p className="text-2xl mb-2">
                  Question <strong>{index + 1}</strong> of {numQuestions}
                </p>
              )}
              <p className=" text-2xl mb-2 font-semibold">
                {questions[index]?.question}
              </p>
              {questions[index]?.options.map((option, i) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(i)}
                  className={`${
                    i === answer
                      ? 'bg-blue-500 border-blue-500 text-white font-bold'
                      : ''
                  } text-left w-[55%] text-xl border-1 pl-4 pr-4 mb-2 py-1 rounded-4xl cursor-pointer hover:bg-blue-200 hover:border-blue-200`}
                >
                  {option}
                </button>
              ))}{' '}
            </div>
          </div>
          {answer !== null ? (
            <p className="mt-4">
              {index < numQuestions - 1 ? (
                <button
                  onClick={handleNext}
                  className="border-1 px-4 py-1 rounded-4xl cursor-pointer hover:bg-blue-200 hover:border-blue-200"
                >
                  Next &rarr;{' '}
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="border-1 px-4 py-1 text-2xl rounded-4xl cursor-pointer text-white font-bold bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400"
                >
                  My Score &rarr;{' '}
                </button>
              )}
            </p>
          ) : (
            ''
          )}
        </div>
      )}
    </>
  );
}

export default QuizScreen;
