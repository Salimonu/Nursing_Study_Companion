import { useState } from 'react';
import { Link } from 'react-router-dom';
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

import { useSubscriptionStatus } from '@/features/Subscription/useSubscriptionStatus';
import { useQuiz } from '@/hooks/useQuiz';
import Loader from '@/ui/Loader';
import Error from '@/ui/Error';

function SystemQuetions() {
  const { subscriptionStatus, expiresAt, loading, statusError } = useSubscriptionStatus();
  const isExpired = expiresAt && new Date(expiresAt) < new Date();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [systemOpen, setSystemOpen] = useState(false);
  const [medsurgOpen, setMedsurgOpen] = useState(false);

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
  if (statusError) return <Error value={'questions'} />;

  if (subscriptionStatus !== 'active') {
    return (
      <div className="w-[80%] md:w-[60%] min-h-70 mx-auto bg-blue-50 border-2 border-orange-500 rounded-2xl p-10">
        <h2 className="text-orange-400 text-4xl font-semibold mb-4">
          <span className="block">⭐⭐</span> Premium Content
        </h2>
        <p className="text-2xl">
          UPGRADE to PREMIUM version to have <strong> UNLIMITED ACCESS</strong>{' '}
          to ALL questions.
        </p>
        <Link
          to="/subscribe"
          className="block text-center bg-orange-400 border-blue-200 border-2 rounded-xl py-3 px-6 font-bold text-lg uppercase text-white mt-6 cursor-pointer hover:bg-orange-500"
        >
          Upgrade Now
        </Link>
      </div>
    );
  }

  if (subscriptionStatus === 'active' && isExpired) {
    return (
      <div className="w-[80%] md:w-[60%] min-h-70 mx-auto bg-blue-50 border-2 border-orange-500 rounded-2xl p-10">
        <h2 className="text-orange-400 text-4xl font-semibold mb-4">
          <span className="block">⭐⭐</span> Premium Content
        </h2>
        <p className="text-2xl">
          ❤️ Dear, pls RENEW your subscription to have <strong> UNLIMITED ACCESS</strong>{' '}
          to ALL questions.
        </p>
        <Link
          to="/subscribe"
          className="block text-center bg-orange-400 border-blue-200 border-2 rounded-xl py-3 px-6 font-bold text-lg uppercase text-white mt-6 cursor-pointer hover:bg-orange-500"
        >
          Upgrade Now
        </Link>
      </div>)    
  }

  return (
    <>
      {/* System Selection */}
      <div className="py-8 px-10 ">
        <p
          className="flex md:w-[50vw] bg-blue-500 hover:bg-blue-600 py-4 px-6 text-2xl rounded-xl items-center justify-between font-semibold text-white cursor-pointer mx-auto"
          onClick={() => {
            setSystemOpen(open => !open);
            setMedsurgOpen(false)
          }}
        >
          📖📖 Anatomy Physio Questions{' '}
          {systemOpen ? (
            <BsChevronUp size={28} strokeWidth={1} />
          ) : (
            <BsChevronDown size={28} strokeWidth={1} />
          )}
        </p>
        {systemOpen && (
          <div className="flex flex-col gap-6 md:w-[50vw] mx-auto">
            <button
              className="flex justify-between items-end bg-white border-2 border-blue-600 hover:text-white hover:bg-blue-400 cursor-pointer mt-6 py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold "
              onClick={() => categorySelected('cardiovascular')}
            >
              <span>The cardiovascular system</span>{' '}
              <span className="text-lg text-blue-600"></span>
            </button>
            <button
              className="flex justify-between bg-white items-end border-2 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('lymphatic')}
            >
              <span>The lymphatic system</span>{' '}
              <span className="text-lg text-blue-600"></span>
            </button>
            <button
              className="flex justify-between bg-white border-2 items-end border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('nervous')}
            >
              <span>The nervous system</span>{' '}
              <span className="text-lg text-blue-600"></span>
            </button>
            <button
              className="flex justify-between items-end bg-white border-2 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('endocrine')}
            >
              <span>The endocrine system</span>{' '}
              <span className="text-lg text-blue-600"></span>
            </button>
            <button
              className="flex justify-between items-end bg-white border-2 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('respiratory')}
            >
              <span>The respiratory system</span>{' '}
              <span className="text-lg text-blue-600"></span>
            </button>
            <button
              className="flex justify-between items-end bg-white border-2 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('digestive')}
            >
              <span>The digestive system</span>{' '}
              <span className="text-lg text-blue-600"></span>
            </button>
            <button
              className="flex justify-between items-end bg-white border-2 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('urinary')}
            >
              <span>The urinary system</span>{' '}
              <span className="text-lg text-blue-600"></span>
            </button>
            <button
              className="flex justify-between items-end bg-white border-2 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('musculoskeletal')}
            >
              <span>The musculoskeletal system</span>{' '}
              <span className="text-lg text-blue-600"></span>
            </button>
            <button
              className="flex justify-between items-end bg-white border-2 border-blue-600 hover:text-white hover:bg-blue-500 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('reproductive')}
            >
              <span>The reproductive system</span>{' '}
              <span className="text-lg text-blue-600"></span>
            </button>
          </div>
        )}

        {/* <div className="py-8 px-10 "> */}
        <p
          className="flex md:w-[50vw] bg-orange-400 hover:bg-orange-500 py-4 px-6 text-2xl rounded-xl items-center justify-between font-semibold text-white cursor-pointer mx-auto mt-4"
          onClick={() => {
            setMedsurgOpen(open => !open);
            setSystemOpen(false);
          }}
        >
          📖📖 Med Surg Questions{' '}
          {medsurgOpen ? (
            <BsChevronUp size={28} strokeWidth={1} />
          ) : (
            <BsChevronDown size={28} strokeWidth={1} />
          )}
        </p>
        {medsurgOpen && (
          <div className="flex flex-col gap-6 md:w-[50vw] mx-auto">
            <button
              className="flex justify-between items-end bg-white border-2 border-orange-400 hover:text-white hover:bg-orange-400 cursor-pointer mt-6 py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold "
              onClick={() => categorySelected('medsurg_cardio')}
            >
              <span>The Cardiovascular Nursing</span>{' '}
              <span className="text-lg text-blue-600"></span>
            </button>
            <button
              className="flex justify-between bg-white items-end border-2 border-orange-400 hover:text-white hover:bg-orange-400 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('medsurg_respiratory')}
            >
              <span>The Respiratory Nursing </span>{' '}
              <span className="text-lg text-blue-600"></span>
            </button>
            <button
              className="flex justify-between bg-white border-2 items-end border-orange-400 hover:text-white hover:bg-orange-400 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('medsurg_endocrine')}
            >
              <span>
                The Endocrine Nursing</span>{' '}
              <span className="text-lg text-blue-600"></span>
            </button>
            <button
              className="flex justify-between items-end bg-white border-2 border-orange-400 hover:text-white hover:bg-orange-400 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('medsurg_electrolyte')}
            >
              <span>The Fluid & Electrolytes </span>{' '}
              <span className="text-lg text-blue-600"></span>
            </button>
            <button
              className="flex justify-between items-end bg-white border-2 border-orange-400 hover:text-white hover:bg-orange-400 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('medsurg_neurological')}
            >
              <span>The Neurological Nursing </span>{' '}
              <span className="text-lg text-blue-600"></span>
            </button>
            <button
              className="flex justify-between items-end bg-white border-2 border-orange-400 hover:text-white hover:bg-orange-400 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('medsurg_urinary')}
            >
              <span>The Renal & urinary Nursing</span>{' '}
              <span className="text-lg text-blue-600"></span>
            </button>
            <button
              className="flex justify-between items-end bg-white border-2 border-orange-400 hover:text-white hover:bg-orange-400 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('medsurg_gastrointestinal')}
            >
              <span>The Gastrointestinal Nursing</span>{' '}
              <span className="text-lg text-blue-600"></span>
            </button>
            <button
              className="flex justify-between items-end bg-white border-2 border-orange-400 hover:text-white hover:bg-orange-400 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('medsurg_musculoskeletal')}
            >
              <span>The Muskuloskeletal Nursing</span>{' '}
              <span className="text-lg text-blue-600"></span>
            </button>
            <button
              className="flex justify-between items-end bg-white border-2 border-orange-400 hover:text-white hover:bg-orange-400 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('medsurg_immune')}
            >
              <span>The Hematologic immune Nursing</span>{' '}
              <span className="text-lg text-blue-600"></span>
            </button>
            <button
              className="flex justify-between items-end bg-white border-2 border-orange-400 hover:text-white hover:bg-orange-400 cursor-pointer py-1 px-8 rounded-xl text-xl/tight md:text-3xl font-semibold"
              onClick={() => categorySelected('medsurg_Infection_control')}
            >
              <span>The Infection Control Nursing</span>{' '}
              <span className="text-lg text-blue-600"></span>
            </button>
          </div>
        )}

        {/* Modal control */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            className="border-2 border-blue-600 m-2"
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
      {/* </div> */}
    </>
  );
}

export default SystemQuetions;
