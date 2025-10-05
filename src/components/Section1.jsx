import { Link } from 'react-router';
import ScoreBoard from './ScoreBoard';
import Restart from './Restart';
import { useQuiz } from '../hooks/useQuiz';

function QuizScreen() {
  const { section1, dispatch } = useQuiz();
  const correctCount = section1.isCorrect.filter(ans => ans === true).length;
  console.log(section1.answer);
  const numQuestions = section1.questions.length;
  const totalPoints = section1.questions.reduce(
    (prev, question) => prev + question.points,
    0
  );

  return (
    <>
      <h2 className="text-center text-4xl pb-4 text-blue-800 font-bold uppercase">
        Anatomy and Physiology
      </h2>
      <div className="flex justify-between mb-10">
        <div className="py-2 text-2xl font-semibold">
          <Link to="/">
            <span className="hover:underline">Home-</span>
          </Link>
          <Link to="/sections">
            <span className="hover:underline">Sections-</span>
          </Link>
          <span className="mb-4 text-2xl font-semibold ">Section 1</span>
        </div>
        {section1.index ? (
          <button
            onClick={() =>
              dispatch({ type: 'show_points', section: 'section1' })
            }
            // onClick={handleShowPoints}
            className="border-1 px-4 py-2 text-2xl rounded-2xl cursor-pointer text-white font-bold bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400"
          >
            My Score &rarr;{' '}
          </button>
        ) : (
          ''
        )}
      </div>

      {section1.index > numQuestions - 1 ? (
        <ScoreBoard
          points={section1.points}
          correctCount={correctCount}
          totalPoints={totalPoints}
        />
      ) : (
        <div>
          <div className="lg:flex justify-between gap-8 mb-4">
            <div className="flex-1 mb-4">
              {section1.index <= numQuestions - 1 && (
                <p className="text-2xl mb-2">
                  Question <strong>{section1.index + 1}</strong> of{' '}
                  {numQuestions}
                </p>
              )}
              <p className=" text-2xl mb-2 font-semibold">
                {section1.questions[section1.index]?.question}
              </p>
              {section1.questions[section1.index]?.options.map((option, i) => (
                <button
                  key={option}
                  onClick={() =>
                    dispatch({
                      type: 'new_answer',
                      section: 'section1',
                      payload: {
                        selectedIndex: i,
                      },
                    })
                  }
                  className={`${
                    i === section1.answer?.at(section1.index)
                      ? 'bg-blue-500 border-blue-500 text-white font-bold'
                      : ''
                  } text-left w-[55%] text-xl border-1 pl-4 pr-4 mb-2 py-1 rounded-4xl cursor-pointer hover:bg-blue-200 hover:border-blue-200`}
                >
                  {option}
                </button>
              ))}{' '}
            </div>
          </div>
          <div className="flex justify-between">
            {section1.answer !== null ? (
              <p className="">
                {section1.index < numQuestions - 1 ? (
                  <>
                    <button
                      onClick={() =>
                        dispatch({
                          type: 'PREVIOUS_QUESTION',
                          section: 'section1',
                        })
                      }
                      className="border-1 px-4 py-1 rounded-4xl cursor-pointer hover:bg-blue-200 hover:border-blue-200"
                    >
                      Previous &rarr;{' '}
                    </button>
                    <button
                      onClick={() =>
                        dispatch({ type: 'next_question', section: 'section1' })
                      }
                      className="border-1 px-4 py-1 rounded-4xl cursor-pointer hover:bg-blue-200 hover:border-blue-200"
                    >
                      Next &rarr;{' '}
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() =>
                      dispatch({ type: 'next_question', section: 'section1' })
                    }
                    // onClick={handleNext}
                    className="border-1 px-4 py-1 text-2xl rounded-4xl cursor-pointer text-white font-bold bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400"
                  >
                    My Score &rarr;{' '}
                  </button>
                )}
              </p>
            ) : (
              ''
            )}
            <div></div>
            <Restart />
          </div>
        </div>
      )}
    </>
  );
}

export default QuizScreen;
