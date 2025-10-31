import { Link } from 'react-router';
import ScoreBoard from './ScoreBoard';
import Restart from './Restart';
import { useQuiz } from '../hooks/useQuiz';
import { useQuery } from '@tanstack/react-query';
import { getQuestions } from '../api/questionsAPI';
import Loader from './Loader';
import { useEffect } from 'react';
import Error from './Error';
import Timer from './Timer';
import Button from './Button';
import Logout from '@/features/Authentication/Logout';

function QuestionCard({ section }) {
  const { dispatch, ...quizState } = useQuiz();
  const btnStyleOutline =
    'border-1 px-4 py-1 rounded-3xl font-semibold cursor-pointer hover:bg-blue-200 hover:border-blue-200';
  const btnStyleFill =
    'border-1 px-4 py-2 text-2xl rounded-3xl cursor-pointer text-white font-bold bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400';

  const {
    questions,
    index,
    answerIndexes,
    userAnswer,
    isCorrect,
    secondsLeft,
  } = quizState[section];

  const correctCount = isCorrect.filter(ans => ans === true).length;
  const numQuestions = questions.length;

  const { isLoading, data, error } = useQuery({
    queryKey: ['questions', section],
    queryFn: () => getQuestions(section),
  });

  useEffect(() => {
    if (data)
      // getQuestions('section').then(data => {}
      dispatch({
        type: 'DATA_RECEIVED',
        section: section,
        payload: data,
      });
  }, [data, dispatch, section]);

  if (isLoading) return <Loader />;

  if (error) return <Error />;
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
          <span className="mb-4 text-2xl font-semibold ">{section}</span>
        </div>

        {index ? (
          <Button
            style={btnStyleFill}
            onclick={() => dispatch({ type: 'show_points', section: section })}
          >
            My Score &rarr;{' '}
          </Button>
        ) : (
          ''
        )}
        <Timer section={section} />
      </div>

      {index > numQuestions - 1 ? (
        <ScoreBoard
          correctCount={correctCount}
          numQuestions={numQuestions}
          section={section}
        />
      ) : (
        <div>
          <div className="lg:flex justify-between gap-8 mb-4">
            <div className="flex-1 mb-4">
              {index <= numQuestions - 1 && (
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
                  onClick={() =>
                    dispatch({
                      type: 'NEW_ANSWER',
                      section: section,
                      payload: {
                        selectedIndex: i,
                      },
                    })
                  }
                  className={`${
                    i === answerIndexes?.at(index)
                      ? 'bg-blue-500 border-blue-500 text-white font-bold'
                      : ''
                  } text-left w-[55%] text-xl border-1 pl-4 pr-4 mb-2 py-1 rounded-4xl cursor-pointer hover:bg-blue-200 hover:border-blue-200`}
                >
                  {option}
                </button>
              ))}{' '}
            </div>
          </div>
          <div>
            {answerIndexes !== null ? (
              <div className="flex justify-between items-start">
                {index < numQuestions - 1 ? (
                  <>
                    <button
                      onClick={() =>
                        dispatch({
                          type: 'PREVIOUS_QUESTION',
                          section: section,
                        })
                      }
                      className={btnStyleOutline}
                    >
                      &larr; Previous{' '}
                    </button>
                    <button
                      onClick={() =>
                        dispatch({
                          type: 'NEXT_QUESTION',
                          section: section,
                        })
                      }
                      className={btnStyleOutline}
                    >
                      Next &rarr;{' '}
                    </button>
                    <Restart section={section} />
                    <Logout />
                  </>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        dispatch({
                          type: 'PREVIOUS_QUESTION',
                          section: section,
                        })
                      }
                      className="border-1 px-4 py-1 rounded-4xl cursor-pointer hover:bg-blue-200 hover:border-blue-200"
                    >
                      &larr; Previous{' '}
                    </button>
                    <button
                      onClick={() => dispatch({ type: 'show_points', section })}
                      className="border-1 px-4 py-1 text-2xl rounded-4xl cursor-pointer text-white font-bold bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400"
                    >
                      My Score &rarr;{' '}
                    </button>
                    <Restart section={section} />
                  </>
                )}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default QuestionCard;
