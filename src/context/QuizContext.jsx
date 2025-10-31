import { createContext, useReducer } from 'react';
// import { getQuestions } from '../api/questionsAPI';
// import { useQuery } from '@tanstack/react-query';
import Loader from '../ui/Loader';

const SECS_PER_QUESTION = 30;

const initialState = {
  section1: {
    questions: [],
    index: 0,
    answerIndexes: [],
    userAnswer: [],
    isCorrect: [],
    secondsLeft: 0,
    // 'loading', 'error', 'ready', 'active', 'finished'
    status: 'loading',
  },
  section2: {
    questions: [],
    index: 0,
    answerIndexes: [],
    userAnswer: [],
    isCorrect: [],
    secondsremaining: null,
    status: 'loading',
  },
  section3: {
    questions: [],
    index: 0,
    answerIndexes: [],
    userAnswer: [],
    isCorrect: [],
    secondsremaining: null,
    status: 'loading',
  },
};

function quizReducer(state, action) {
  switch (action.type) {
    case 'DATA_RECEIVED':
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          questions: action.payload,
          status: 'ready',
          secondsLeft:
            state[action.section]?.questions?.length * SECS_PER_QUESTION,
        },
      };

    case 'START':
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          status: 'active',
          secondsLeft:
            state[action.section]?.questions?.length * SECS_PER_QUESTION,
        },
      };

    case 'NEW_ANSWER': {
      const question =
        state[action.section].questions[state[action.section].index];
      const userAnswer = action.payload.selectedIndex;
      const selectedOption = question.options[userAnswer];
      const updatedAnswers = [...state[action.section].userAnswer];
      const correctAnswer = userAnswer === question.correct_option;
      const totalCorrectAnswer = [...state[action.section].isCorrect];
      const answerList = [...state[action.section].answerIndexes];

      totalCorrectAnswer[state[action.section].index] = correctAnswer;
      updatedAnswers[state[action.section].index] = selectedOption;
      answerList[state[action.section].index] = userAnswer;

      return {
        ...state,
        [action.section]: {
          ...state[action.section],
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
          ...state[action.section],
          index: state[action.section].index + 1,
        },
      };

    case 'PREVIOUS_QUESTION':
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          index:
            state[action.section].index > 0
              ? state[action.section].index - 1
              : state[action.section].index,
        },
      };

    case 'show_points': {
      const numQuestions = state[action.section].questions?.length;

      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          index: state[action.section].index + numQuestions,
        },
      };
    }

    case 'RESTART':
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          index: 0,
          answerIndexes: [],
          userAnswer: [],
          isCorrect: [],
          secondsremaining: null,
        },
      };

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
