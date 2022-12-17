import { Heading, SimpleGrid, GridItem, VStack, HStack, Box, Grid } from '@chakra-ui/react';

import { Video } from '@/types/video';
import VideoCard from './video-card';

type Props = {
  videos: Video[];
};


const VideosSection = ({ videos }: Props) => {
  return (
    <HStack w='full' marginTop={12} align='flex-start'>
    <VStack as="section" alignItems="flex-start" w="full" spacing={4}>
    <Heading marginTop={12}  size="md">Recent Youtube videos</Heading>
      <Grid gap={{ base: 3, lg: 3 }}
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  md: "repeat(3, 3fr)",
                  sm: "repeat(2, 2fr)",
                }}
                >
        {videos.map((video) => (
          <Box   key={video.url} >
            <VideoCard {...video} />
          </Box>
        ))}
      </Grid>
    </VStack>
    </HStack>
  );
};

export default VideosSection;
