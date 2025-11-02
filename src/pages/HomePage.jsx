import QuestionCard from '../ui/QuestionCard';
import { Box, Container, Spacer, Text } from '@chakra-ui/react';
import { Link } from 'react-router';

function HomePage() {
  return (
    <>
      <Container bg="greenyellow" display="flex">
        <Box fontSize="3xl">HomePage</Box>
        <Spacer />

        <Link to="/signup">
          <Text fontSize="2xl" cursor="pointer" mr="8px">
            SignUp{' '}
          </Text>
        </Link>
        <Link to="/login">
          <Text fontSize="2xl" cursor="pointer">
            Login{' '}
          </Text>
        </Link>
      </Container>
    </>
  );
}

export default HomePage;
