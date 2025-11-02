import { createContext, useEffect, useReducer } from 'react';
// import { getQuestions } from '../api/questionsAPI';
// import { useQuery } from '@tanstack/react-query';
import Loader from '../ui/Loader';

const SECS_PER_QUESTION = 60;

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
          status: 'active',
          secondsLeft: current.questions.length * SECS_PER_QUESTION,
        },
      };
    }
    case 'TICK': {
      const newSeconds = Math.max(current?.secondsLeft - 1, 0);

      return {
        ...state,
        [action.section]: {
          ...current,
          secondsLeft: newSeconds,
          status: newSeconds === 0 ? 'finished' : 'running',
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
      // const numQuestions = state[action.section].questions?.length;

      return {
        ...state,
        [action.section]: {
          ...current,
          status: 'finished',
          // index: state[action.section].index + numQuestions,
        },
      };
    }

    case 'RESTART': {
      return {
        ...state,
        [action.section]: {
          // ...current,
          ...state[action.section],
          index: 0,
          answerIndexes: [],
          userAnswer: [],
          isCorrect: [],

          status: 'active',
          secondsLeft:
            state[action.section].questions.length * SECS_PER_QUESTION,

          // secondsLeft: current?.questions?.length * SECS_PER_QUESTION,
          // secondsLeft:
          //   state[action.section]?.questions?.length * SECS_PER_QUESTION,

          // status: 'active',
        },
      };
    }

    default:
      throw new Error('Action Unknown');
  }
}

export const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [{ section1, section2, section3 }, dispatch] = useReducer(
    quizReducer,
    initialState
  );

  return (
    <>
      <QuizContext value={{ section1, section2, section3, dispatch }}>
        {children}
      </QuizContext>
    </>
  );
}
