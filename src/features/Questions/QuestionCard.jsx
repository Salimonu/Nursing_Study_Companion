import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsSendFill } from 'react-icons/bs';

import useQuestions from './useQuestions';
import { useQuiz } from '../../hooks/useQuiz';
import Loader from '../../ui/Loader';
import Error from '../../ui/Error';
import Button from '@/ui/Button';

function QuestionCard({ section }) {
  const { isLoading, data, error } = useQuestions({ section });
  const { dispatch, ...quizState } = useQuiz();

  const btnStyleOutline =
    'text-xl border-1 px-4 py-2 rounded-3xl font-semibold cursor-pointer hover:bg-blue-200 hover:border-blue-200';
  const btnStyleFill =
    'flex gap-1 text-white text-xl px-4 py-2 bg-blue-500 rounded-3xl font-semibold cursor-pointer hover:bg-blue-600';

  const {
    questions,
    index,
    answerIndexes,

    // isCorrect,
  } = quizState[section];

  // const correctCount = isCorrect.filter(ans => ans === true).length;
  const numQuestions = questions.length;

  useEffect(() => {
    if (data)
      dispatch({
        type: 'DATA_RECEIVED',
        section: section,
        payload: data,
      });
  }, [data, dispatch, section]);

  if (isLoading) return <Loader />;

  if (error) return <Error value={'questions'} />;
  return (
    <>
      <div>
        <div className="lg:flex justify-between gap-8 mb-4">
          <div className="flex-1 mb-4">
            <p className="text-2xl mb-2">
              Question <strong>{index + 1}</strong> of{' '}
              <strong> {numQuestions}</strong>
            </p>
            <p className=" text-2xl mb-2 font-semibold">
              {questions[index]?.question}
            </p>
            {questions[index]?.options.map((option, i) => (
              <button
                key={option}
                onClick={() =>
                  dispatch({
                    type: 'NEW_ANSWER',
                    section,
                    payload: {
                      selectedIndex: i,
                    },
                  })
                }
                className={`${
                  i === answerIndexes?.at(index)
                    ? 'bg-blue-500 border-blue-500 text-white font-bold'
                    : ''
                } text-left w-[80%] text-xl border-1 pl-4 pr-4 my-2 py-2 rounded-4xl cursor-pointer hover:bg-blue-200 hover:border-blue-200`}
              >
                {option}
              </button>
            ))}{' '}
          </div>
        </div>
        <div>
          <div className="flex justify-between items-start">
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
              {index < numQuestions - 1 ? (
                <button
                  onClick={() =>
                    dispatch({
                      type: 'NEXT_QUESTION',
                      section: section,
                    })
                  }
                  className={btnStyleOutline}
                >
                  Next &rarr;
                </button>
              ) : (
                <Link
                  to={`results?section=${section}`}
                  onClick={() => {
                    dispatch({ type: 'show_points', section });
                  }}
                >
                  <Button style={btnStyleFill}>
                    Submit <BsSendFill size={22} />
                  </Button>
                </Link>
              )}
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionCard;
