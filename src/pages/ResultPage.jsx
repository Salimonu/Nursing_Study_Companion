import { Link, useSearchParams } from 'react-router-dom';
import { useQuiz } from '@/hooks/useQuiz';
import Button from '@/ui/Button';

function ResultPage() {
  const [searchParams] = useSearchParams();
  const section = searchParams.get('section');
  const { dispatch, section1, section2, section3 } = useQuiz();

  const sectionState =
    section === 'section1'
      ? section1
      : section === 'section2'
      ? section2
      : section3;

  const { questions, isCorrect } = sectionState;

  const totalQuestions = questions.length;
  const correcAnswers = isCorrect.filter(Boolean).length;
  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        🎉 Quiz Completed!{' '}
      </h2>
      <p className="text-3xl mb-2 text-blue-600 font-bold">{section} </p>
      <p className="text-lg mb-4 ">
        {' '}
        You answered <strong>{correcAnswers}</strong> out of{' '}
        <strong>{totalQuestions}</strong> correctly.
      </p>
      <Link
        to={`/profile/quiz?section=${section}`}
        onClick={() => {
          dispatch({ type: 'RESTART', section });
        }}
      >
        <Button style="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold cursor-pointer">
          Retry Quiz
        </Button>
      </Link>
      <Link
        to="/profile"
        onClick={() => {
          dispatch({ type: 'RESTART', section });
        }}
      >
        back home
      </Link>
    </div>
  );
}

export default ResultPage;
