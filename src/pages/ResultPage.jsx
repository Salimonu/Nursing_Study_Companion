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
  const score = (correcAnswers / totalQuestions) * 100;
  return (
    <div className=" px-8">
      <Link
        to="/"
        onClick={() => {
          dispatch({ type: 'RESTART', section });
        }}
      >
        <span className="text-white mb-8 bg-orange-400 hover:bg-orange-300 inline-block mt-4 py-2 px-3 rounded-2xl text-2xl font-semibold">
          Home
        </span>{' '}
      </Link>
      <h2 className="text-3xl font-bold text-blue-600 mb-8">
        🎉 Quiz Completed!{' '}
      </h2>

      <p className="text-center my-6 text-3xl font-semibold uppercase border-2 border-dotted border-blue-700 text-blue-700 py-2 px-4 rounded-2xl">
        {section}
      </p>
      <div className="grid grid-cols-[1fr_auto] justify-items-start gap-x-10 gap-y-4 text-2xl font-semibold mb-8">
        <span>Total Questions: </span> <span>{totalQuestions}</span>
        <span>Correct Answers: </span> <span>{correcAnswers}</span>{' '}
        <span>Score:</span>{' '}
        <span className="bg-blue-600 text-white py-1 px-2 rounded-xl font-bold">
          {score}%
        </span>
      </div>

      <Link
        to={`/profile/quiz?section=${section}`}
        onClick={() => {
          dispatch({ type: 'RESTART', section });
        }}
      >
        <Button style="text-center text-2xl py-2 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white font-semibold cursor-pointer">
          Retry Quiz
        </Button>
      </Link>
    </div>
  );
}

export default ResultPage;
