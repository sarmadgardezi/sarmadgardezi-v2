import { GetStaticProps } from 'next';
import {
  VStack,
  Heading,
  Text,
  List,
  ListItem,
  Button,
  Divider,
  Flex,
  Icon,
  Box,
  SimpleGrid,
  GridItem,
  HStack,
} from '@chakra-ui/react';
import { HiMicrophone } from 'react-icons/hi';
import { RiMailAddLine } from 'react-icons/ri';
import metadata from '../layout/metadata.json';
import { readData } from '@/utils/read-data';
import { Video } from '@/types/video';
import VideoCard from '@/components/b-card';
import Head from 'next/head';

type Props = {
  talks: Video[];
};

const TalksPage = ({ talks }: Props) => {
  return (
    <>
    <Head>
        <title key="title">Projects {metadata.titleSuffix}</title>
			</Head>
     <VStack w="full" spacing={8}>
      <VStack as="section" alignItems="flex-start" w="full" spacing={3}>
        <Heading size="lg">Projects.</Heading>
        <Text>
          A collection of interesting tools / frameworks / websites I stumble
          upon on the internet.
        </Text>
      </VStack>
      <SimpleGrid
        as="section"
        alignItems="stretch"
        gap={12}
        w="full"
        columns={{ base: 1, sm: 2, md: 3 }}
      >
        {talks.map((video) => (
          <GridItem key={video.url} as="article">
            <VideoCard {...video} />
          </GridItem>
        ))}
      </SimpleGrid>
    </VStack>


      <Divider />



      <Flex alignItems="center" direction="column">
        <Box
          w={24}
          h={24}
          p={6}
          bg="purple.500"
          _dark={{ bg: 'purple.200' }}
          rounded="full"
        >
          <Icon
            as={HiMicrophone}
            boxSize={12}
            color="white"
            _dark={{ color: 'gray.800' }}
          />
        </Box>
        <Heading mt={12} textAlign="center">
          Invite me to speak at your next event
        </Heading>
        <Text mt={6} textAlign="center">
          If you&apos;re looking for speakers about Web Dev, State Machines, or
          Open Source, I&apos;m open for invitations!
        </Text>
        <Button
          as="a"
          mt={12}
          colorScheme="purple"
          href="mailto:hello+talks@nikolovlazar.com"
          leftIcon={<Icon as={RiMailAddLine} />}
          size="lg"
        >
          Invite me to speak
        </Button>
      </Flex>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { talks } = await readData<{ talks: Video[] }>('data/talks.json');

  const props: Props = {
    talks,
  };

  return {
    props,
  };
};

export default TalksPage;