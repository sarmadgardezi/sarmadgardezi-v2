import Link from 'next/link';
import {
  LinkBox,
  LinkOverlay,
  Heading,
  Text,
  VStack,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { format } from 'timeago.js';

import { BlogPost } from '@/types/blog-post';

const BlogPostCard = ({
  title,
  description,
  slug,
  date,
  readingTime,
}: BlogPost) => {
  return (
    <LinkBox as="article">
      <VStack
        p={4}
        bg={useColorModeValue('white', 'gray.800')}
        rounded="xl"
        borderWidth="1px"
        borderColor={useColorModeValue('gray.100', 'gray.700')}
        w="100%"
        h="100%"
        textAlign="left"
        align="start"
        spacing={4}
        cursor="pointer"
        _hover={{ shadow: 'lg' }}
      >
        <VStack alignItems="flex-start">
          <Link href={`/blog/${slug}`} passHref>
            <LinkOverlay>
              <Heading size="md">{title}</Heading>
            </LinkOverlay>
          </Link>
          <HStack
            divider={
              <Text mx={2} color="gray.500">
                •
              </Text>
            }
          >
            <Text color="gray.500" fontSize="sm">
              {format(date)}
            </Text>
            <Text color="gray.500" fontSize="sm">
              {readingTime}
            </Text>
          </HStack>
        </VStack>
        <Text color="gray.500" fontSize="sm">
          {description}
        </Text>
      </VStack>
    </LinkBox>
  );
};

export default BlogPostCard;
