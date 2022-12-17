import { useState, useEffect } from 'react';
import {
  VStack,
  AspectRatio,
  Spinner,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  Tooltip,
  Skeleton,
  Image,
} from '@chakra-ui/react';

import { Video } from '@/types/video';

type Props = Video;

const VideoCard = ({ title, imgurl, wurl, url, tags, description }: Props) => {
  const [videoId, setVideoId] = useState<string>();

  useEffect(() => { 
    const queryParams = url.split('?')[1];
    const params = new URLSearchParams(queryParams);
    setVideoId(params.get('v'));
  }, [url]);

  if (!videoId) return <Spinner />;
  return (
    <LinkBox as="article">

      <Tooltip label={description}>       
       <VStack   alignItems="center"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          overflow="hidden"
          bg="gray.50"
          _hover={{ transform: 'scale(1.05, 1.05)' }}
          _dark={{
            bg: 'whiteAlpha.100',
          }}
          rounded="md"
          spacing={0}
          transitionDuration="slow"
          transitionProperty="transform"
          transitionTimingFunction="ease-out"
       >
       <AspectRatio w="full" ratio={16 / 9}>
            <Image
              alt={`Thumbnail of ${title}`}
              fallback={<Skeleton w="full" h="full" />}
              src={imgurl} objectFit='cover'
            />
          </AspectRatio>
          <VStack alignItems="flex-start" flex={1} w="full" p={3} spacing={1}>
            <LinkOverlay w="full" href={wurl} isExternal>
              <Heading noOfLines={1} size="xs">
                {title}
              </Heading>
            </LinkOverlay>
            <Text color="gray.500" fontSize="xs" textTransform="capitalize">
              {tags}
            </Text>
          </VStack>
          
        </VStack>
        </Tooltip>
  
    </LinkBox>
  );
};

export default VideoCard;
