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
import { useUser } from '@/features/Authentication/useUser';

function ProfilePage() {
  const { user } = useUser();
  const {
    user_metadata: { first_name },
  } = user;

  const [sectionOpen, setSectionOpen] = useState(null);
  const [systemOpen, setSystemOpen] = useState(null);
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
      <div className="md:max-w-[70vw] mx-auto">
        <p className="text-4xl text-center mt-4 mb-2">
          👋 Welcome {first_name}
        </p>
        <div className="py-4 px-10 ">
          {/* Section selection */}
          <p
            className="flex md:w-[50vw] bg-blue-500 hover:bg-blue-600 py-4 px-6 text-2xl rounded-xl items-center justify-between font-semibold text-white cursor-pointer mx-auto"
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
            <div className="flex flex-col gap-6 md:w-[50vw] mx-auto">
              <button
                className="flex justify-between bg-white border-4 border-blue-600 hover:text-white hover:bg-blue-400 cursor-pointer mt-6 py-1 px-8 rounded-xl text-xl md:text-3xl font-semibold"
                onClick={() => categorySelected('section1')}
              >
                <span>Section 1</span> <span>10 questions</span>
              </button>
              <button
                className="flex justify-between bg-white border-4 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl md:text-3xl font-semibold"
                onClick={() => categorySelected('section2')}
              >
                <span>Section 2</span> <span>10 questions</span>
              </button>
              <button
                className="flex justify-between bg-white border-4 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl md:text-3xl font-semibold"
                onClick={() => categorySelected('section3')}
              >
                <span>Section 3</span> <span>10 questions</span>
              </button>
            </div>
          )}
        </div>

        {/* System Selection */}
        <div className="py-8 px-10 ">
          <p
            className="flex md:w-[50vw] bg-blue-500 hover:bg-blue-600 py-4 px-6 text-2xl rounded-xl items-center justify-between font-semibold text-white cursor-pointer mx-auto"
            onClick={() => setSystemOpen(open => !open)}
          >
            📖📖 Select a System{' '}
            {systemOpen ? (
              <BsChevronUp size={28} strokeWidth={1} />
            ) : (
              <BsChevronDown size={28} strokeWidth={1} />
            )}
          </p>
          {systemOpen && (
            <div className="flex flex-col gap-6 md:w-[50vw] mx-auto">
              <button
                className="flex justify-between items-end bg-white border-4 border-blue-600 hover:text-white hover:bg-blue-400 cursor-pointer mt-6 py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold "
                // onClick={() => categorySelected('section1')}
              >
                <span>The cardiovascular system</span>{' '}
                <span className="text-lg text-orange-600">coming soon</span>
              </button>
              <button
                className="flex justify-between bg-white items-end border-4 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
                // onClick={() => categorySelected('section2')}
              >
                <span>The lymphatic system</span>{' '}
                <span className="text-lg text-orange-600">coming soon</span>
              </button>
              <button
                className="flex justify-between bg-white border-4 items-end border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
                // onClick={() => categorySelected('section3')}
              >
                <span>The nervous system</span>{' '}
                <span className="text-lg text-orange-600">coming soon</span>
              </button>
              <button
                className="flex justify-between items-end bg-white border-4 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
                // onClick={() => categorySelected('section3')}
              >
                <span>The endocrine system</span>{' '}
                <span className="text-lg text-orange-600">coming soon</span>
              </button>
              <button
                className="flex justify-between items-end bg-white border-4 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
                // onClick={() => categorySelected('section3')}
              >
                <span>The respiratory system</span>{' '}
                <span className="text-lg text-orange-600">coming soon</span>
              </button>
              <button
                className="flex justify-between items-end bg-white border-4 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
                // onClick={() => categorySelected('section3')}
              >
                <span>The digestive system</span>{' '}
                <span className="text-lg text-orange-600">coming soon</span>
              </button>
              <button
                className="flex justify-between items-end bg-white border-4 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
                // onClick={() => categorySelected('section3')}
              >
                <span>The urinary system</span>{' '}
                <span className="text-lg text-orange-600">coming soon</span>
              </button>
              <button
                className="flex justify-between items-end bg-white border-4 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
                // onClick={() => categorySelected('section3')}
              >
                <span>The musculoskeletal system</span>{' '}
                <span className="text-lg text-orange-600">coming soon</span>
              </button>
              <button
                className="flex justify-between items-end bg-white border-4 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
                // onClick={() => categorySelected('section3')}
              >
                <span>The reproductive system</span>{' '}
                <span className="text-lg text-orange-600">coming soon</span>
              </button>
            </div>
          )}
        </div>

        {/* Modal control */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            className="border-4 border-blue-600 m-2"
            borderRadius="10px"
          >
            <ModalHeader fontSize="30px">Anatomy and Physiology</ModalHeader>
            <ModalCloseButton
              _hover={{ bg: 'orange.400', cursor: 'pointer' }}
            />
            <ModalBody className="text-3xl text-blue-800 font-semibold ">
              {category} selected
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
                ml={2}
                border="2px"
                borderColor="orange.400"
                _hover={{ bg: 'orange.400', cursor: 'pointer' }}
                onClick={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}

// TO-DO: TIMER

export default ProfilePage;
