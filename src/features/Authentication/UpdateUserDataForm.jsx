import { useState } from 'react';

import { useUser } from './useUser';

import { useUpdateUser } from './useUpdateUser';
import {
  Box,
  Spinner,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Button,
} from '@chakra-ui/react';

function UpdateUserDataForm() {
  const toast = useToast();
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { first_name: currentFullName, whatsapp: currentWhatsapp },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState(currentWhatsapp || '');

  function handleSubmit(e) {
    e.preventDefault();

    if (!fullName) return;
    updateUser(
      { fullName, avatar, whatsapp },
      {
        onSuccess: () => {
          setAvatar('');
          setWhatsapp('');
          e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar('');
    setWhatsapp('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl mt="20px">
        <Flex columnGap="14px" align="center">
          <FormLabel>Email Address</FormLabel>
          <Input value={email} disabled />
        </Flex>
      </FormControl>

      <FormControl mt="20px">
        <Flex columnGap="14px" align="center">
          <FormLabel>Full name</FormLabel>
          <Input
            type="text"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            id="fullName"
            disabled={isUpdating}
          />
        </Flex>
      </FormControl>

      <FormControl mt="20px">
        <Flex columnGap="14px" align="center">
          <FormLabel>Whatsapp No</FormLabel>
          <Input
            type="tel"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            id="whatsapp"
            disabled={isUpdating}
          />
        </Flex>
      </FormControl>

      <FormControl mt="20px">
        <Flex columnGap="14px" align="center">
          <FormLabel>Profile Photo</FormLabel>
          <Input
            disabled={isUpdating}
            id="avatar"
            type="file"
            accept=".png, .jpg, .jpeg, image/png, image/jpeg"
            onChange={e => {
              const file = e.target.files[0];
              if (!file) return;
              // ✅ Allowed file types
              const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];
              if (!validTypes.includes(file.type)) {
                toast({
                  title: 'Invalid image type',
                  description: 'Only PNG, JPG, or JPEG images are allowed.',
                  status: 'error',
                  duration: 60000,
                  isClosable: true,
                  position: 'top',
                });

                e.target.value = ''; // clear input
                return;
              }
              // ✅ Check file size (100kb = 100 * 1024)
              const maxSize = 100 * 1024;
              if (file.size > maxSize) {
                toast({
                  title: 'Image too big',
                  description: 'File size must not exceed 100KB.',
                  status: 'error',
                  duration: 60000,
                  isClosable: true,
                  position: 'top',
                });

                e.target.value = ''; // clear input
                return;
              }

              // ✅ All good
              setAvatar(file);
            }}
          />
        </Flex>
      </FormControl>

      <FormControl>
        <Box>
          <Button type="submit" w="60%" mt="20px" disabled={isUpdating}>
            {isUpdating ? (
              <Box>
                {' '}
                <Spinner size="xs" /> Update Profile{' '}
              </Box>
            ) : (
              'Update Profile'
            )}
          </Button>
          <Button w="30%" ml="20px" mt="20px" onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      </FormControl>
    </form>
  );
}

export default UpdateUserDataForm;
