import { Link } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
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
    // <Container>
    <div className="mx-auto w-[60%] ">
      <p className="text-center text-4xl pb-4 text-blue-800 font-bold uppercase">
        Anatomy and Physiology
      </p>
      <p className="text-center mb-4 text-4xl font-semibold">{section}</p>
      <div className="flex justify-between py-2 text-2xl font-semibold">
        <Link to="/">
          <span className="hover:underline">Home</span>
        </Link>
        <Logout />
      </div>

      <Timer section={section} />

      <QuestionCard section={section} />

      <div className="flex justify-between">
        <Restart section={section} />

        <div className="flex justify-between mb-10">
          {index ? (
            <Button
              style={btnStyleFill}
              onclick={() => {
                dispatch({ type: 'show_points', section: section });
              }}
            >
              <Link to={`results?section=${section}`}>End Quiz &rarr; </Link>
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
