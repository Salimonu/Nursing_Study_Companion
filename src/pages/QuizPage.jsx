import QuestionCard from '@/ui/QuestionCard';
import Timer from '@/ui/Timer';
import { Container } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

function QuizPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const section = searchParams.get('section');

  return (
    <Container>
      <Timer section={section} />
      <QuestionCard section={section} />
    </Container>
  );
}

export default QuizPage;
