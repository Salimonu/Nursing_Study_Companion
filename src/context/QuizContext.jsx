import { createContext, useReducer } from 'react';
import data from '../data/questions.json';

const QuizContext = createContext();

const SECS_PER_QUESTION = 60;

const initialState = {
  section1: {
    questions: data.section1,
    index: 0,
    answer: [],
    userAnswer: [],
    isCorrect: [],
    secondsremaining: null,
  },
  section2: {
    questions: data.section2,
    index: 0,
    points: 0,
    answer: null,
    userAnswer: [],
    isCorrect: [],
    addedPoints: false,
    secondsremaining: null,
  },
  section3: {
    questions: data.section3,
    index: 0,
    points: 0,
    answer: null,
    userAnswer: [],
    isCorrect: [],
    addedPoints: false,
    secondsremaining: null,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'new_answer': {
      const question =
        state[action.section].questions[state[action.section].index];
      const updatedAnswers = [...state[action.section].userAnswer];
      const userAnswer = action.payload.selectedIndex;
      const selectedOption = question.options[userAnswer];
      const correctAnswer =
        action.payload.selectedIndex === question.correctOption;
      const totalCorrectAnswer = [...state[action.section].isCorrect];
      updatedAnswers[state[action.section].index] = selectedOption;
      totalCorrectAnswer[state[action.section].index] = correctAnswer;
      const answerList = [...state[action.section].answer];
      answerList[state[action.section].index] = action.payload.selectedIndex;
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          // answer: answer[] action.payload.selectedIndex,
          answer: answerList,
          userAnswer: updatedAnswers,
          isCorrect: totalCorrectAnswer,
        },
      };
    }

    case 'next_question':
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          index: state[action.section].index + 1,
          // answer: null,
        },
      };

    case 'PREVIOUS_QUESTION':
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          index: state[action.section].index - 1,
          // answer: null,
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
        ...initialState,
      };
    default:
      throw new Error('Action Unknown');
  }
}

function QuizProvider({ children }) {
  const [{ section1, section2, section3 }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // const sectionQuestions1 = data.questions1;
  // const sectionQuestions2 = data.questions2;
  // const sectionQuestions3 = data.questions3;

  // const numQuestionsSection1 = sectionQuestions1?.length;
  // const numQuestionsSection2 = sectionQuestions2?.length;
  // const numQuestionsSection3 = sectionQuestions3?.length;

  // const totalPointsSection1 = sectionQuestions1?.reduce(
  //   (prev, question) => prev + question.points,
  //   0
  // );
  // const totalPointsSection2 = sectionQuestions2?.reduce(
  //   (prev, question) => prev + question.points,
  //   0
  // );
  // const totalPointsSection3 = sectionQuestions3?.reduce(
  //   (prev, question) => prev + question.points,
  //   0
  // );

  return (
    <>
      <QuizContext value={{ section1, section2, section3, dispatch }}>
        {children}
      </QuizContext>
    </>
  );
}

export { QuizContext, QuizProvider };
