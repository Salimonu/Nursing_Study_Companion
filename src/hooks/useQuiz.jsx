import { useContext } from 'react';
import { QuizContext } from '@/context/createContext';

export function useQuiz() {
  const context = useContext(QuizContext);

  if (context === undefined)
    throw new Error('The QuizContext was used outside the QuizProvider range.');

  return context;
}
