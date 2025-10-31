import { useQuiz } from '@/hooks/useQuiz';
import Button from './Button';

function Timer({ section }) {
  const { dispatch, section1, section2, section3 } = useQuiz();
  let duration;
  if (section === 'section1') {
    duration = section1.secondsLeft;
  }

  if (section === 'section2') {
    duration = section2.secondsLeft;
  }

  if (section === 'section3') {
    duration = section3.secondsLeft;
  }

  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  const btnStyleFill =
    'border-1 px-4 py-2 text-2xl rounded-3xl text-white font-bold bg-blue-500 border-blue-500';
  return (
    <Button style={btnStyleFill}>
      {`${minutes.toString().padStart(2, 0)} : ${seconds
        .toString()
        .padStart(2, 0)}`}
    </Button>
  );
}

export default Timer;
