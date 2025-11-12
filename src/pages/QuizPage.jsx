import { Link } from 'react-router-dom';

import { useSearchParams } from 'react-router-dom';

import Button from '@/ui/Button';
import Restart from '@/ui/Restart';
import Logout from '@/features/Authentication/Logout';
import { useQuiz } from '@/hooks/useQuiz';
import QuestionCard from '@/ui/QuestionCard';
import Timer from '@/ui/Timer';
import { BiStopCircle } from 'react-icons/bi';

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

  const btnStyle =
    'flex gap-1 text-white text-xl px-4 py-2 bg-orange-500 rounded-3xl font-semibold cursor-pointer hover:bg-orange-600';

  return (
    <div className="mx-auto w-[86%] ">
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
            <Link
              to={`results?section=${section}`}
              onClick={() => {
                dispatch({ type: 'show_points', section });
              }}
            >
              <Button style={btnStyle}>
                End Quiz <BiStopCircle size={28} />
              </Button>
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
