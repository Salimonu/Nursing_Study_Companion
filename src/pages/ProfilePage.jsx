import Logout from '../features/Authentication/Logout';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

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
  const [sectionOpen, setSectionOpen] = useState(null);
  const { dispatch } = useQuiz();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [category, setCategory] = useState(null);

  const categorySelected = num => {
    setCategory(num);
    onOpen();
  };

  const handleModal = function () {
    dispatch({ type: 'START', section: category });

    setTimeout(() => {
      navigate(`quiz?section=${category}`);
    }, 100);
  };

  return (
    <>
      <div className="flex justify-end mt-4 mr-4">
        <Logout />
      </div>
      <div className="py-8 px-10">
        <p className=" text-4xl text-center mb-10">👋 Welcome back</p>
        {/* <Outlet /> */}

        <p
          className="flex bg-blue-500 hover:bg-blue-600 py-4 px-6 text-2xl rounded-xl items-center justify-between font-semibold text-white cursor-pointer"
          onClick={() => setSectionOpen(open => !open)}
        >
          📖📖 Select a Section{' '}
          {sectionOpen ? (
            <BsChevronUp size={28} strokeWidth={1} />
          ) : (
            <BsChevronDown size={28} strokeWidth={1} />
          )}
        </p>
        {sectionOpen && (
          <div className="flex flex-col gap-6">
            <button
              className="bg-white border-4 border-blue-600 hover:text-white hover:bg-blue-400 cursor-pointer mt-6 py-1 px-4 rounded-xl text-3xl font-semibold"
              onClick={() => categorySelected('section1')}
            >
              Section 1
            </button>
            <button
              className="bg-white border-4 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-4 rounded-xl text-3xl font-semibold"
              onClick={() => categorySelected('section2')}
            >
              Section 2
            </button>
            <button
              className="bg-white border-4 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-4 rounded-xl text-3xl font-semibold"
              onClick={() => categorySelected('section3')}
            >
              Section 3
            </button>
          </div>
        )}
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          className="border-4 border-blue-600 m-2"
          borderRadius="10px"
        >
          <ModalHeader fontSize="30px">Ready ?</ModalHeader>
          <ModalCloseButton _hover={{ bg: 'orange.400', cursor: 'pointer' }} />
          <ModalBody fontSize="26px" color="blue.600" fontWeight="bold">
            {category} selected.
          </ModalBody>

          <ModalFooter>
            <Button
              bg="blue.400"
              _hover={{ bg: 'blue.600', cursor: 'pointer' }}
              onClick={handleModal}
            >
              Start
            </Button>
            <Button
              variant="ghost"
              ml={3}
              _hover={{ bg: 'orange.400', cursor: 'pointer' }}
              onClick={onClose}
            >
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
