import { useQuiz } from '../hooks/useQuizContext';
import Button from './Button';

function Restart({ section }) {
  const { dispatch } = useQuiz();
  const style =
    'inline-block cursor-pointer py-2 px-10 bg-red-700 text-white text-2xl font-semibold rounded-3xl hover:bg-red-500';

  return (
    <div className="text-center">
      <Button
        style={style}
        onclick={() => dispatch({ type: 'RESTART', section })}
      >
        Restart
      </Button>
    </div>
  );
}

export default Restart;
