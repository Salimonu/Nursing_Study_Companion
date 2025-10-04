import Feedback from './feedback';

function ScoreBoard({ points, totalPoints }) {
  return (
    <div>
      <div className="bg-blue-50 text-blue-800 text-6xl text-center w-[50%] mx-auto mb-2 px-6 py-8 rounded-lg">
        <span>You scored </span>
        <p className="font-semibold mt-6">
          {points} out of {totalPoints} points
        </p>
      </div>
      <Feedback />
    </div>
  );
}

export default ScoreBoard;
