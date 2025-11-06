import { useQuiz } from '../hooks/useQuiz';
import { BiRefresh } from 'react-icons/bi';

import Button from './Button';

function Restart({ section }) {
  const { dispatch } = useQuiz();

  const btnStyle =
    'flex gap-1 text-white text-xl px-4 py-2 bg-orange-500 rounded-3xl font-semibold cursor-pointer hover:bg-orange-600';
  return (
    <div className="text-center">
      <Button
        style={btnStyle}
        onClick={() => {
          dispatch({ type: 'RESTART', section });
        }}
      >
        <BiRefresh size={28} /> Restart
      </Button>
    </div>
  );
}

export default Restart;
