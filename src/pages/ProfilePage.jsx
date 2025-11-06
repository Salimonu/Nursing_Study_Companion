import Logout from '../features/Authentication/Logout';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

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
  const { dispatch } = useQuiz();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [category, setCategory] = useState(null);

  const categorySelected = num => {
    setCategory(num);
    onOpen();
  };

  return (
    <>
      <div className="flex justify-end mt-4">
        <Logout />
      </div>
      <div className="py-8 px-10">
        <p className=" text-4xl text-center mb-10">👋 Welcome back</p>

        <p className="text-3xl mb-8">📘 Select a Section</p>
        <Outlet />
        <div className="flex flex-col gap-6 ">
          <div
            className="bg-blue-600 py-6 text-2xl rounded-xl text-center font-semibold text-white"
            onClick={() => categorySelected('section1')}
          >
            {' '}
            Section 1
          </div>
          <Button onClick={() => categorySelected('section2')}>
            Section 2
          </Button>
          <Button onClick={() => categorySelected('section3')}>
            Section 3
          </Button>
        </div>
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
              onClick={() => {
                dispatch({ type: 'START', section: category });

                setTimeout(() => {
                  navigate(`quiz?section=${category}`);
                }, 100);
              }}
            >
              Start
            </Button>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

// TO-DO: TIMER

export default ProfilePage;
