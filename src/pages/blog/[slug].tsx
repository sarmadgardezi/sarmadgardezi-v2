import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { format } from 'timeago.js';
import {
  VStack,
  Heading,
  HStack,
  Text,
  Divider,
  Stack, Box, Flex, Avatar 
} from '@chakra-ui/react';

import ViewCounter from '../../components/ViewCounter'
import { BlogPost } from '@/types/blog-post';
import { getBlogPosts } from '@/utils/get-blog-posts';
import { readBlogPost } from '@/utils/read-blog-post';
import MDXComponents from '@/components/mdx-components';
import { useRouter } from 'next/router';
import imageMetadata from '@/utils/plugins/image-metadata';
import ScrollToTopButton from '@/components/scroll-to-top-button';
import { NextSeo } from "next-seo";
import { baseUrl } from "../../constants";
import { sznmOgImage } from "../../utils/sznmOgImage";
import Twemoji from "../../components/Twemoji";

type Props = BlogPost & {
  source: MDXRemoteSerializeResult;
};

const BlogPostPage = ({
  title,
  description,
  date,
  source,
  readingTime,
  thumbnail,
}: Props) => {
  const ogImage = sznmOgImage({
    siteName: title,
    
  });
  const { query } = useRouter();
  const slug = query.slug as string;
  
  
  return (
    <>
      <NextSeo
        title={title}
        description = {description}
        canonical={`${baseUrl}`}
        openGraph={{
          title: `${title} | Sarmad Gardezi`,
          url: slug,
          images: [
            {
              url: "https://sarmadgardezi.com/api/og-image?name=Next.js&stage=adopt",
              alt: `${title} og-image`,
            },
          ],
        }}
      />
     
      <VStack position="relative" alignItems="stretch" w="full" spacing={8}>
      <Flex alignItems="center">
    
    <Stack
      w={['100vw', '95vw']}
      maxW="680px"
      p={['20px', '20px', '24px', '24px']}
    >
       <Box flexBasis={["80%"]}>
      <Heading
        fontSize={['3xl', '3xl', '5xl', '5xl']}
        color="displayColor"
      >
      {title}
      </Heading>
      </Box>
    
      <Stack
        py={4}
        direction={{ base: 'column', md: 'row' }}
        alignItems="baseline"
        justifyContent="space-between"
      >
        <Stack isInline alignItems="center">
          <Avatar
            name="Sarmad Gardezi"
            size="xs"
            src="https://avatars.githubusercontent.com/u/18191721?v=4"
            border="1px solid textPrimary"
          />
          <Text fontSize={['xs', 'xs', 'sm', 'sm']} color="textPrimary">
            Sarmad Gardezi /{' '} {readingTime}
        
          </Text>
        </Stack>
        <Stack>
          <Text fontSize={['xs', 'xs', 'sm', 'sm']} color="textSecondary">
          {format(date)} /  <ViewCounter slug={slug}/>
          </Text>
        
        </Stack>
      </Stack>
    </Stack>
    
  <Flex flexBasis={["20%"]}>
        <Box marginRight="13%" width="80%">
        <Twemoji emoji={thumbnail ?? "📘"} />
        </Box>
      </Flex>
  </Flex>

        <MDXRemote {...source} components={MDXComponents} />
        <Divider />
        <HStack>
         
</HStack>
      </VStack>
      <ScrollToTopButton />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getBlogPosts();

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params.slug as string;

  const postContent = await readBlogPost(slug);
  const {
    content,
    data: { title, description, date, thumbnail },
  } = matter(postContent);

  return {
    props: {
      source: await serialize(content, {
        mdxOptions: {
          rehypePlugins: [imageMetadata],
        },
      }),
      readingTime: readingTime(content).text,
      title,
      description,
      date,
      slug,
      thumbnail,
    },
  };
};

export default BlogPostPage;

