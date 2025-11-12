import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useQuiz } from '@/hooks/useQuiz';
import Button from './Button';

function Timer({ section }) {
  const { dispatch, section1, section2, section3 } = useQuiz();
  const navigate = useNavigate();

  const sectionState =
    section === 'section1'
      ? section1
      : section === 'section2'
      ? section2
      : section3;

  const { secondsLeft, status } = sectionState;

  useEffect(() => {
    if (status === 'loading' || status === 'active') return;
    const tick = setInterval(() => dispatch({ type: 'TICK', section }), 1000);

    return () => clearInterval(tick);
  }, [dispatch, section, status]);

  // End quiz and navigate to results page when time hits 0
  useEffect(() => {
    if (secondsLeft === 0 && status === 'finished') {
      dispatch({ type: 'show_points', section });

      // Delay navigation slightly to allow state update
      setTimeout(() => {
        navigate(`results?section=${section}`);
      }, 500);
    }
  }, [secondsLeft, dispatch, section, status, navigate]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const btnStyleFill =
    'flex justify-between border-1 pl-4 text-2xl rounded-3xl text-white font-bold bg-blue-500 border-blue-500';
  const locale = navigator.language;
  const formatedDate = new Date().toLocaleDateString(locale);
  return (
    <Button style={btnStyleFill}>
      <span>
        {/* Today: <br /> {day.toLocaleString()} */}
        Today: <br /> {formatedDate}
      </span>
      <span className="bg-white text-blue-800 px-4 rounded-r-3xl">
        Time Left: <br />
        {`${minutes.toString().padStart(2, 0)} : ${seconds
          .toString()
          .padStart(2, 0)}`}
      </span>
    </Button>
  );
}

export default Timer;
