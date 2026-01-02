import { useQuery } from '@tanstack/react-query';

import { getQuestions } from '../../api/questionsAPI';

function useQuestions({ section }) {
  const { isLoading, data, error } = useQuery({
    queryKey: ['questions', section],
    queryFn: () => getQuestions(section),
  });

  return { isLoading, data, error };
}

export default useQuestions;
