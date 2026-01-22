import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useQuiz } from '@/hooks/useQuiz';
import Button from './Button';

function Timer({ section }) {
  // const { dispatch, section1, section2, section3 } = useQuiz();
  const {
    dispatch,
    section1,
    section2,
    section3,
    cardiovascular,
    lymphatic,
    nervous,
    endocrine,
    respiratory,
    digestive,
    urinary,
    musculoskeletal,
    reproductive,
    medsurg_cardio,
    medsurg,
    medsurg_respiratory,
    medsurg_endocrine,
    medsurg_electrolyte,
    medsurg_neurological,
    medsurg_urinary,
    medsurg_gastrointestinal,
    medsurg_musculoskeletal,
    medsurg_immune,
    medsurg_Infection_control,
  } = useQuiz();

  const navigate = useNavigate();

  const sectionState =
    section === 'section1'
      ? section1
      : section === 'section2'
      ? section2
      : section === 'section3'
      ? section3
      : section === 'cardiovascular'
      ? cardiovascular
      : section === 'lymphatic'
      ? lymphatic
      : section === 'nervous'
      ? nervous
      : section === 'endocrine'
      ? endocrine
      : section === 'respiratory'
      ? respiratory
      : section === 'digestive'
      ? digestive
      : section === 'urinary'
      ? urinary
      : section === 'musculoskeletal'
      ? musculoskeletal
      : section === 'reproductive'
      ? reproductive
      : section === 'medsurg'
      ? medsurg
      : section === 'medsurg_respiratory'
      ? medsurg_respiratory
      : section === 'medsurg_endocrine'
      ? medsurg_endocrine
      : section === 'medsurg_electrolyte'
      ? medsurg_electrolyte
      : section === 'medsurg_neurological'
      ? medsurg_neurological
      : section === 'medsurg_urinary'
      ? medsurg_urinary
      : section === 'medsurg_gastrointestinal'
      ? medsurg_gastrointestinal
      : section === 'medsurg_musculoskeletal'
      ? medsurg_musculoskeletal
      : section === 'medsurg_immune'
      ? medsurg_immune
      : section === 'medsurg_Infection_control'
      ? medsurg_Infection_control
      : medsurg_cardio;

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
