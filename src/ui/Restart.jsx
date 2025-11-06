import { useQuiz } from '../hooks/useQuiz';
import Button from './Button';

function Restart({ section }) {
  const { dispatch } = useQuiz();

  const btnStyle =
    'text-white text-xl px-6 py-2 bg-orange-500 rounded-3xl font-semibold cursor-pointer hover:bg-orange-600';
  return (
    <div className="text-center">
      <Button
        style={btnStyle}
        onClick={() => {
          console.log('restart btn clicked');
          dispatch({ type: 'RESTART', section });
        }}
      >
        Restart
      </Button>
    </div>
  );
}

export default Restart;
