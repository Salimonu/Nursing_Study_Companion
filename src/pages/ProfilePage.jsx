import Logout from '../features/Authentication/Logout';
import UpdateUserDataForm from '../features/Authentication/UpdateUserDataForm';
import UpdatePasswordForm from '../features/Authentication/UpdatePasswordForm';
import { useState } from 'react';
import { Link } from 'react-router';
import Feedback from '../ui/feedback';

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

function ProfilePage() {
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
        <Logout />
        <p className="text-4xl text-center mt-10 mb-30">
          TEST your knowledge of <strong> ANATOMY and PHYSIOLOGY </strong>
        </p>
        <p className="text-center ">User Performance</p>
        <p>Categories</p>
        <Button onClick={() => categorySelected(1)}>Category 1</Button>
        <Button onClick={() => categorySelected(2)}>Category 2</Button>
        <Button onClick={() => categorySelected(3)}>Category 3</Button>
        <Button onClick={() => categorySelected(4)}>Category 4</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Ready?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Category {category} selected.</ModalBody>

            <ModalFooter>
              <Button bg="purple.300">Start</Button>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Container>
          <Heading as="h2"> Update Your profile</Heading>
          <Box>
            <Heading as="h3"> Update user data</Heading>
            <UpdateUserDataForm />
          </Box>

          <Box>
            <Heading as="h3"> Update password</Heading>
            <UpdatePasswordForm />
          </Box>
        </Container>
      </Container>
    </>
  );
}

export default ProfilePage;
