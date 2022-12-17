import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Divider,
  Image,
  Text,
  Button,
  IconButton,
  LinkProps,
  Heading,
  Flex,
  Icon,
  useColorMode
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import NextLink from 'next/link';
import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

const footerColor = {
  light: "white",
  dark: "gray.800",
};
const textColor = {
  light: "gray.800",
  dark: "gray.100",
};

const Footer = () => {
  return (
    <Box p={{ base: 5, md: 8 }} maxW="5xl" marginInline="auto">
      <Stack
        spacing={{ base: 8, md: 0 }}
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
      >
        <Box maxW="300px">
        <NextLink href='/' passHref>
        <Link>
          <Heading size='sm'>Sarmad Gardezi</Heading>
        </Link>
        </NextLink>
         <Text mt={2} color="gray.500" fontSize="md">
           Sarmad Gardezi is a full stack developer from islamabad, Pakistan.
          </Text>
          <NextLink href='/coffee' passHref>
        <Link>
        <Image marginTop="6px" width='140px'  src='/about/coffee.png' alt='buy sarmad coffee' />
        </Link>
      </NextLink>
        </Box>
        <HStack
          spacing={4}
          d={{ base: 'none', sm: 'flex' }}
          justifyContent={{ sm: 'space-between', md: 'normal' }}
        >
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              About
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <CustomLink>Contrinute</CustomLink>
              <CustomLink>Media assets</CustomLink>
              <CustomLink>Changelog</CustomLink>
              <CustomLink>Releases</CustomLink>
            </VStack>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              Links
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <CustomLink href="/skills/">Skill's</CustomLink>
              <CustomLink>Follow on Twitter</CustomLink>
              <CustomLink>Follow on Github</CustomLink>
              <CustomLink>Github discussions</CustomLink>
            </VStack>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              Project
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <CustomLink>TemplatesKart</CustomLink>
              <CustomLink>Documentation</CustomLink>
              <CustomLink>Github organization</CustomLink>
              <CustomLink>npm organization</CustomLink>
            </VStack>
          </VStack>
        </HStack>
      </Stack>

      <Divider my={4} />

      <Stack direction={{ base: 'column', md: 'row' }} spacing={3} justifyContent="space-between">
      <div>
        <Link
          href="https://twitter.com/sarmadgardezi"
          title="Twitter"
          isExternal
        >
          <IconButton
            aria-label="Twitter"
            size="lg"
            color={textColor[useColorMode]}
            variant="ghost"
          >
            <FaTwitter />
          </IconButton>
        </Link>
        <Link href="https://github.com/sarmadgardezi" title="GitHub" isExternal>
          <IconButton
            aria-label="GitHub"
            size="lg"
            color={textColor[useColorMode]}
            variant="ghost"
          >
            <FaGithub />
          </IconButton>
        </Link>
        <Link
          href="https://www.linkedin.com/in/sarmadgardezi"
          title="LinkedIn"
          isExternal
        >
          <IconButton
            aria-label="LinkedIn"
            size="lg"
            color={textColor[useColorMode]}
            variant="ghost"
          >
            <FaLinkedinIn />
          </IconButton>
        </Link>
        <Link
          href="https://www.youtube.com/c/sarmadgardezi"
          title="youtube"
          isExternal
        >
          <IconButton
            aria-label="Youtube"
            size="lg"
            color={textColor[useColorMode]}
            variant="ghost"
          >
            <FaYoutube />
          </IconButton>
        </Link>
        <Link href="https://facebook.com/sarmadgardezi" title="Facebook" isExternal>
          <IconButton
            aria-label="facebook"
            size="lg"
            color={textColor[useColorMode]}
            variant="ghost"
          >
         <FaFacebookF />
          </IconButton>
        </Link>
      </div>
       
        <Stack direction={{ base: 'column', md: 'row' }}>
         
        <Flex pt="1rem" direction="column" bg={footerColor}>
        <Text fontSize="xs">
        Copyright 2022, All Rights Reserved.
        </Text>
     
    </Flex>


        </Stack>
      </Stack>
    </Box>
  );
};

const CustomLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link href="#" fontSize="sm" _hover={{ textDecoration: 'underline' }} {...props}>
      {children}
    </Link>
  );
};

export default Footer;