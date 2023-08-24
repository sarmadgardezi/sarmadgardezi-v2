import PageTransition from '@/components/PageTransition'
import type { NextPage } from 'next'
import Link from "@/components/link";
import { VStack, Heading, Text, Image, Box, extendTheme } from "@chakra-ui/react";
import metadata from '../layout/metadata.json';
import Head from 'next/head';
import AboutSection from '@/components/about-top'
import { ContentWrapper } from '../layout/ContentWrapper.tsx';
import { darkTheme, styled } from '../config/stitches.config';



const StyledSection = styled('section', {
  '.hero-content': {
    paddingTop: `2rem`,
    paddingBottom: '4rem',
    backgroundColor: '$secondary50',
    borderBottom: '2px solid $border',

    '@md': { py: `4rem` },

    [`.${darkTheme} &`]: { backgroundColor: '$secondary50' },

    '> div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      columnGap: '4rem',
      rowGap: '1rem',

      '@md': { flexDirection: 'row', rowGap: 'unset' },

      '.portrait': {
        flexShrink: 0,
        width: '18.75rem',
        height: '18.75rem',
        border: '2px solid $border',
        borderRadius: '$default',

        '@md': { height: '22.5rem', marginBottom: '0' },
      },

      '.hero-introduction': {
        h1: { fontWeight: 500, color: '$primary900', my: '2rem' },
        p: { marginBottom: '2rem' },
      },
    },
  },

  '.hero-cards': {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    rowGap: '1rem',
    columnGap: '1rem',
    flexWrap: 'wrap',

    '@md': {
      alignItems: 'center',
      justifyContent: 'flex-start',
      columnGap: '3rem',
      rowGap: 'unset',
      marginTop: '-3rem',
    },

    '.hero-card-item': {
      '.title': {
        display: 'block',
        fontSize: '$mini',
        fontWeight: 500,
        lineHeight: '$mini',
        textTransform: 'uppercase',
        marginBottom: '0.5rem',
      },

      '.value': {
        display: 'flex',
        alignItems: 'center',
        columnGap: '0.5rem',
        background: '$surface100',
        padding: '0.5rem 1rem',
        borderRadius: '$default',
        transition: 'all 1s ease',

        '&:hover': {
          background: '$primary50',
          cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🔍</text></svg>") 16 0, auto`,
        },
      },
    },
  },
});

const About: NextPage = () => {
  const {titleSuffix } = metadata
  return (
    <PageTransition>
 <> 
 <Head>
        <title key="title">About {metadata.titleSuffix}</title>
			</Head>
      <StyledSection id="hero-section">
      <div className="hero-content">
        <ContentWrapper>

          <div className="hero-introduction">
            <h1>
              Writes code.
              <br />
              Thinks product.
            </h1>
            <p>
              As a web developer and Application Developer.
            </p>
          
          </div>
        </ContentWrapper>
      </div>
        </StyledSection>
      <VStack as="section" alignItems="flex-start" w="full" spacing={3}>
        <AboutSection />
      <Heading as='h5' size='sm'>This website is designed and developed by Sarmad Gardezi</Heading>
          <Text>
          I’m an independent Web user interface and design systems engineer, author, speaker, and trainer based in Lebanon. I love the Web platform and I want to make it better for everyone. And I consider myself to be completely blessed that I get to build it for a living.
          </Text>
       
            <Image src='https://sarmadgardeziblog.files.wordpress.com/2022/07/developerprofilesarmad.png' alt='Sarmad Gardezi Google Developer' />
            
          <Text>
          Sarmad recently awarded Core Team Developer in  {" "}
          <Link href="https://gdg.community.dev/u/mbkmt8/" isExternal>
          Google Cloud Developer</Link> Expert title for GSuite and Google Apps Script.
          </Text>
          <Text>
          I work with companies and agencies around the world, building Web user interfaces, design systems, and digital products with focus on responsive design, accessibility, performance, and cutting-edge tech. I’ve worked with teams at companies like ProPakistani, ViralWebbs, Khan Academy, Bosch, and more.
          </Text>
          
          <Image src='https://sarmadgardeziblog.files.wordpress.com/2022/07/sggdg.jpeg' alt='Sarmad Gardezi Google Developer' />
          <Text>I consider himself a technologist at heart who wants to create stuff. In my own words, “Technology is my life, I’m always thinking about it, even when I’m taking a shower. It helps us in becoming more productive and knowledgeable.” I always enjoyed building a ( Google Scripts ). For me it’s an added advantage to have a blog and a massive reach. He has worked on several projects in the last two years when his focus has shifted from writing to building as well</Text>
          <Heading as='h3' size='lg'> Certified Freelance Developer of Pakistan</Heading>
          <Text>I found blogging to be a great medium for sharing my favorite things with the world. Initially, I started writing random stuff, but later on, I discovered how to make money blogging. I discovered “The Way” to become my boss through the power of the internet. This was when I started sharing those things that worked for me. Blogging has given me so much more than money. It’s given me a sense of freedom that I didn’t know was possible. </Text>
          <Text>
          I currently live a “free” lifestyle where I travel around Pakistan and blog from anywhere. I used to be an introvert, but now I speak in front of hundreds of people at events & seminars. Last year on 10 December 2019 I became a Core team member of Google Cloud Islamabad it was a great thing for me as a blogger I learn so many things to be a part of GDG Cloud. I get to know more about Google & its services in Pakistan & WorldWide, as a core team member I get a chance to access so many Google services for free. At this time my passion was turning into Professional Goals Achievements.
          </Text>
          <Text>Later on, I attended different Google Events in Islamabad including Hackathon it was a great experience for me to learn new things in Life. Check out them on my Instagram Profile.</Text>
          <Text>When I’m not on my computer, I love traveling & adventure sports. Don’t just take my word for it as this is a digital world and I can show you a video.</Text>
      </VStack>
    </>
    </PageTransition>
  )
}

export default About
