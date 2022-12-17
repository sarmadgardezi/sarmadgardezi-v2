import Hero from "@/components/hero";
import PageTransition from "@/components/PageTransition";
import CoursesSection from "@/components/courses-section";
import courses from "@/src/data/courses";
import VideosSection from "@/components/videos-section";
import Testimonial from "@/components/testimonials";
import { Video } from "@/types/video";
import { GetStaticProps } from "next";
import { readData } from "@/utils/read-data";
import HomeArticles from "@/components/home-articles";
import { getRecentBlogPosts } from "@/utils/get-blog-posts";
import { BlogPost } from "@/types/blog-post";
import BlogpostsSection from "@/components/blogposts-section";
import { Stack } from "@chakra-ui/react";
import VolunteerExperience from "@/components/Volunteering/VolunteerExperience";
import { NextSeo } from "next-seo";
import { baseUrl } from "../constants";
import { sznmOgImage } from "../utils/sznmOgImage";
import { SocialProfileJsonLd } from 'next-seo';
type Props = {
  videos: Video[];
  posts: BlogPost[];
};

const Home = ({ videos, posts }: Props) => {
  return (
    <>
    <NextSeo
        title="Sarmad Gardezi - A Full Stack Developer"
        canonical={`${baseUrl}`}
        openGraph={{
          title: "Sarmad Gardezi - A Full Stack Developer",
          description: "React, Gastby, WordPress Developer, tech enthusiast and entrepreneur from Islamabad, Pakistan.",
          images: [
            {
              url: sznmOgImage
              ({
                description: "A Fullstack Freelance Developer",
                siteName: "Sarmad Gardezi",
              }),
              alt: "Sarmad Gardezi - A Full Stack Developer og-image",
            },
          ],

        }}
        
      />
      <SocialProfileJsonLd
      type="Person"
      name="Sarmad Gardezi"
      url="http://www.sarmadgardezi.com"
      sameAs={[
        'http://www.facebook.com/sarmadgardezi',
        'http://instagram.com/sarmadgardezi',
        'http://twitter.com/sarmadgardezi',
        'http://www.linkedin.com/in/sarmadgardezi',
        'http://youtube.com/c/sarmadgardezi',
      ]}
    />
    <PageTransition>
      <Hero />
      <CoursesSection courses={courses} />
      <Stack  marginTop={10}  />
      <BlogpostsSection posts={posts} />
      <VideosSection videos={videos} />
      <Testimonial />
      <VolunteerExperience/>
    </PageTransition>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { videos } = await readData<{ videos: Video[] }>("data/videos.json");
  const posts = await getRecentBlogPosts(3);

  const props: Props = {
     videos,
    posts,

  };

  return {
    props,
  };
};
export default Home;
