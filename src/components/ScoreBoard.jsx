import Feedback from './feedback';
import Restart from './Restart';

function ScoreBoard({ correctCount, numQuestions, section }) {
  const POINT_PER_QUESTION = 10;
  const totalPoints = numQuestions * POINT_PER_QUESTION;

  return (
    <div>
      <Restart section={section} />
      <div className="bg-blue-50 text-blue-800 text-6xl text-center w-[50%] mx-auto mb-2 px-6 py-8 rounded-lg">
        <span>You scored </span>
        <p className="font-semibold mt-6">
          {correctCount * POINT_PER_QUESTION} out of {totalPoints} points
        </p>
      </div>
      <Feedback />
    </div>
  );
}

export default ScoreBoard;
