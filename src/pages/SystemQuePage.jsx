import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

import { useSubscriptionStatus } from '@/features/Authentication/useSubscriptionStatus';
import { useQuiz } from '@/hooks/useQuiz';
import Loader from '@/ui/Loader';

function SystemQuePage() {
  const { status, loading, error } = useSubscriptionStatus();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [systemOpen, setSystemOpen] = useState(null);
  const [category, setCategory] = useState(null);

  const categorySelected = num => {
    setCategory(num);
    onOpen();
  };
  const { dispatch } = useQuiz();
  const navigate = useNavigate();

  const handleModal = function () {
    dispatch({ type: 'START', section: category });

    setTimeout(() => {
      navigate(`/profile/quiz?section=${category}`);
    }, 100);
  };

  if (loading) return <Loader />;
  if (error) return <p>error!</p>;
  if (status !== 'subscriber') {
    return (
      <div className="w-[60%] min-h-70 my-auto mx-auto bg-blue-50 border-2 border-orange-500 rounded-2xl p-10">
        <h2 className="text-orange-400 text-4xl font-semibold mb-4">
          <span className="block">⭐⭐</span> Premium Content
        </h2>
        <p className="text-2xl">
          You need a <strong> subscription </strong> to access system-based
          questions.
        </p>
        <button
          onClick={() => (window.location.href = '/subscribe')}
          className="bg-orange-400 border-blue-200 border-2 rounded-xl py-3 px-6 font-bold text-lg uppercase text-white mt-4 cursor-pointer hover:bg-orange-500"
        >
          Upgrade Now
        </button>
      </div>
    );
  }

  return (
    <div>
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
              onClick={() => categorySelected('cardiovascular')}
            >
              <span>The cardiovascular system</span>{' '}
              <span className="text-lg text-blue-600">20 questions</span>
            </button>
            <button
              className="flex justify-between bg-white items-end border-4 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('lymphatic')}
            >
              <span>The lymphatic system</span>{' '}
              <span className="text-lg text-blue-600">20 questions</span>
            </button>
            <button
              className="flex justify-between bg-white border-4 items-end border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('nervous')}
            >
              <span>The nervous system</span>{' '}
              <span className="text-lg text-blue-600">20 questions</span>
            </button>
            <button
              className="flex justify-between items-end bg-white border-4 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('endocrine')}
            >
              <span>The endocrine system</span>{' '}
              <span className="text-lg text-blue-600">20 questions</span>
            </button>
            <button
              className="flex justify-between items-end bg-white border-4 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('respiratory')}
            >
              <span>The respiratory system</span>{' '}
              <span className="text-lg text-blue-600">20 questions</span>
            </button>
            <button
              className="flex justify-between items-end bg-white border-4 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('digestive')}
            >
              <span>The digestive system</span>{' '}
              <span className="text-lg text-blue-600">20 questions</span>
            </button>
            <button
              className="flex justify-between items-end bg-white border-4 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('urinary')}
            >
              <span>The urinary system</span>{' '}
              <span className="text-lg text-blue-600">20 questions</span>
            </button>
            <button
              className="flex justify-between items-end bg-white border-4 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('musculoskeletal')}
            >
              <span>The musculoskeletal system</span>{' '}
              <span className="text-lg text-blue-600">20 questions</span>
            </button>
            <button
              className="flex justify-between items-end bg-white border-4 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('reproductive')}
            >
              <span>The reproductive system</span>{' '}
              <span className="text-lg text-blue-600">20 questions</span>
            </button>
          </div>
        )}

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
    </div>
  );
}

export default SystemQuePage;
