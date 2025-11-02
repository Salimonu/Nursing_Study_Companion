import Logout from '../features/Authentication/Logout';
import { useState } from 'react';
import { Link } from 'react-router';

import { Outlet } from 'react-router-dom';

import {
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Heading,
} from '@chakra-ui/react';
import { useQuiz } from '@/hooks/useQuiz';

function ProfilePage() {
  const { dispatch, ...quizState } = useQuiz();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [category, setCategory] = useState(null);

  const categorySelected = num => {
    setCategory(num);
    onOpen();
  };

  return (
    <>
      <Container bg="purple.300" w="80%" h="100vh">
        <p className="uppercase text-4xl text-center mt-20">
          👋 welcome back - [username]
        </p>
        <div className="w-40">
          <Logout />
        </div>
        <p className="text-4xl text-center mt-10 mb-30">
          TEST your knowledge of <strong> ANATOMY and PHYSIOLOGY </strong>
        </p>
        <p className="text-center ">User Performance</p>
        <p>Categories</p>
        <Outlet />
        <div className="flex justify-between">
          <Button onClick={() => categorySelected('section1')}>
            Category 1
          </Button>
          <Button onClick={() => categorySelected('section2')}>
            Category 2
          </Button>
          <Button onClick={() => categorySelected('section3')}>
            Category 3
          </Button>
        </div>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Ready?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{category} selected.</ModalBody>

            <ModalFooter>
              <Button
                bg="purple.300"
                onClick={() => dispatch({ type: 'START', section: category })}
              >
                <Link to={`quiz?section=${category}`}>Start</Link>
              </Button>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
}

// TO-DO: TIMER

export default ProfilePage;
