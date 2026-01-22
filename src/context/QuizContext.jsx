import { useReducer } from 'react';

import { QuizContext } from './createContext';
import { SECS_PER_QUESTION } from '@/utils/constants';
import Loader from '../ui/Loader';

const sectionState = {
  questions: [],
  index: 0,
  answerIndexes: [],
  userAnswer: [],
  isCorrect: [],
  secondsLeft: 0,
  // 'loading', 'error', 'ready', 'active', running, 'finished'
  status: 'loading',
};

const initialState = {
  section1: sectionState,
  section2: sectionState,
  section3: sectionState,
  cardiovascular: sectionState,
  lymphatic: sectionState,
  nervous: sectionState,
  endocrine: sectionState,
  respiratory: sectionState,
  digestive: sectionState,
  urinary: sectionState,
  musculoskeletal: sectionState,
  reproductive: sectionState,
  medsurg_cardio: sectionState,
  medsurg: sectionState,
  medsurg_respiratory: sectionState,
  medsurg_endocrine: sectionState,
  medsurg_electrolyte: sectionState,
  medsurg_neurological: sectionState,
  medsurg_urinary: sectionState,
  medsurg_gastrointestinal: sectionState,
  medsurg_musculoskeletal: sectionState,
  medsurg_immune: sectionState,
  medsurg_Infection_control: sectionState,
};

function quizReducer(state, action) {
  const current = state[action.section];

  switch (action.type) {
    case 'DATA_RECEIVED':
      return {
        ...state,
        [action.section]: {
          ...current,
          questions: action.payload,
          status: 'ready',
          secondsLeft: action.payload.length * SECS_PER_QUESTION,
        },
      };

    case 'START': {
      return {
        ...state,
        [action.section]: {
          ...current,
          index: 0,
          answerIndexes: [],
          userAnswer: [],
          isCorrect: [],
          status: 'active',
          secondsLeft: current.questions?.length * SECS_PER_QUESTION,
        },
      };
    }

    case 'TICK': {
      // const newSeconds = Math.max(current?.secondsLeft - 1, 0);
      const newSeconds = current?.secondsLeft - 1;

      return {
        ...state,
        [action.section]: {
          ...current,
          secondsLeft: newSeconds,
          status:
            newSeconds === 0 &&
            (current.status === 'active' || current.status === 'running')
              ? 'finished'
              : 'running',
        },
      };
    }

    case 'NEW_ANSWER': {
      const question = current.questions[current.index];
      const userAnswer = action.payload.selectedIndex;
      const selectedOption = question.options[userAnswer];
      const updatedAnswers = [...current.userAnswer];
      const correctAnswer = userAnswer === question.correct_option;
      const totalCorrectAnswer = [...current.isCorrect];
      const answerList = [...current.answerIndexes];

      totalCorrectAnswer[current.index] = correctAnswer;
      updatedAnswers[current.index] = selectedOption;
      answerList[current.index] = userAnswer;

      return {
        ...state,
        [action.section]: {
          ...current,
          answerIndexes: answerList,
          userAnswer: updatedAnswers,
          isCorrect: totalCorrectAnswer,
        },
      };
    }

    case 'NEXT_QUESTION':
      return {
        ...state,
        [action.section]: {
          ...current,
          index: current.index + 1,
        },
      };

    case 'PREVIOUS_QUESTION':
      return {
        ...state,
        [action.section]: {
          ...current,
          index: current.index > 0 ? current.index - 1 : current.index,
        },
      };

    case 'show_points': {
      return {
        ...state,
        [action.section]: {
          ...current,
          status: 'finished',
        },
      };
    }

    case 'RESTART': {
      return {
        ...state,
        [action.section]: {
          ...current,
          index: 0,
          answerIndexes: [],
          userAnswer: [],
          isCorrect: [],

          status: 'running',
          secondsLeft: current.questions?.length * SECS_PER_QUESTION,
        },
      };
    }

    default:
      throw new Error('Action Unknown');
  }
}

export function QuizProvider({ children }) {
  const [
    {
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
    },
    dispatch,
  ] = useReducer(quizReducer, initialState);

  return (
    <>
      <QuizContext
        value={{
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
          dispatch,
        }}
      >
        {children}
      </QuizContext>
    </>
  );
}
