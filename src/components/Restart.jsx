import { useQuiz } from '../hooks/useQuiz';

function Restart() {
  const { dispatch } = useQuiz();

  return (
    <div className="text-center">
      <span
        className="cursor-pointer py-2 px-6 bg-red-700 text-white text-2xl font-semibold rounded-lg hover:bg-red-500"
        onClick={() => dispatch({ type: 'RESTART' })}
      >
        Restart
      </span>
    </div>
  );
}

export default Restart;
Restart;
