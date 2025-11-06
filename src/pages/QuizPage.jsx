import { Link } from 'react-router-dom';

import { useSearchParams } from 'react-router-dom';

import Button from '@/ui/Button';
import Restart from '@/ui/Restart';
import Logout from '@/features/Authentication/Logout';
import { useQuiz } from '@/hooks/useQuiz';
import QuestionCard from '@/ui/QuestionCard';
import Timer from '@/ui/Timer';

function QuizPage() {
  const [searchParams] = useSearchParams();

  const section = searchParams.get('section');
  const { dispatch, section1, section2, section3 } = useQuiz();

  const sectionState =
    section === 'section1'
      ? section1
      : section === 'section2'
      ? section2
      : section3;

  const { index } = sectionState;

  const btnStyleFill =
    'border-1 px-4 py-2 text-2xl rounded-3xl cursor-pointer text-white font-bold bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400';

  return (
    <div className="mx-auto w-[80%] ">
      <Link to="/">
        <span className=" text-white bg-orange-400 hover:bg-orange-300 inline-block mt-4 py-2 px-3 rounded-2xl text-2xl font-semibold">
          Home
        </span>{' '}
      </Link>
      <p className="text-center text-2xl mt-8 pb-4 font-bold uppercase">
        Anatomy and Physiology
      </p>
      <p className="text-center mb-4 text-3xl font-semibold uppercase border-2 border-dotted border-blue-700 text-blue-700 py-2 px-4 rounded-2xl">
        {section}
      </p>
      <div className="my-6">
        <Timer section={section} />
      </div>
      <div className="my-6">
        <QuestionCard section={section} />
      </div>

      <div className="flex justify-between">
        <Restart section={section} />

        <div className="flex justify-between mb-10">
          {index ? (
            <Button style={btnStyleFill}>
              <Link
                to={`results?section=${section}`}
                onClick={() => {
                  dispatch({ type: 'show_points', section });
                }}
              >
                End Quiz &rarr;{' '}
              </Link>
            </Button>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
    // </Container>
  );
}

export default QuizPage;
