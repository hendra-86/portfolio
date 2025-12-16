import React from 'react';
import {
  Flex,
  IconButton,
  HStack,
  Box,
  Stack,
  Link as ChakraLink,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useDisclosure } from '@chakra-ui/hooks';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { menuLinks } from '../constant';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { asPath } = useRouter();

  const hoverBg = useColorModeValue('gray.200', 'gray.900');
  const activeColor = useColorModeValue('blue.500', 'blue.300');
  const bgColor = useColorModeValue('white', 'gray.700');

  const links = Array.isArray(menuLinks) ? menuLinks : [];

  const navItem = (
    <>
        {links.map((link) => (
        <ChakraLink
            as={NextLink}
            href={link.route}
            key={link.name}
            px={2}
            py={1}
            rounded="md"
            _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.900"),
            }}
            color={
            link.route === asPath
                ? useColorModeValue("blue.500", "blue.300")
                : "inherit"
            }
            onClick={() => {
            if (isOpen) onClose();
            }}
        >
            {link.name}
        </ChakraLink>
        ))}
    </>
    );


  return (
    <Box
      bg={bgColor}
      px={4}
      boxShadow="lg"
      position="fixed"
      top={0}
      w="100%"
      zIndex="sticky"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="container.lg"
        mx="auto"
      >
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ base: 'flex', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack spacing={8} alignItems="center">
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            {navItem}
          </HStack>
        </HStack>

        <Flex alignItems="center">
          <ColorModeSwitcher />
        </Flex>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            {navItem}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default NavBar;
