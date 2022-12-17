import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { IoPersonRemoveOutline } from 'react-icons/io5';
import metadata from '../layout/metadata.json';
import Head from 'next/head';
interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, }: FeatureProps) => {
  return (
    <>

    <Stack>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
    </>
  );
};

export default function SimpleThreeColumns() {
  return (
<>
<Head>
        <title key="title">FAQ's {metadata.titleSuffix}</title>
			</Head>
    <Box p={4}>
        <Heading textAlign={['center']} as='h2' size='3xl' pb='4' noOfLines={1}>FAQ's</Heading>
      <Heading textAlign={['center']} as='h5' size='sm' pb='9'>Frequently Asked Question by Sarmad Gardezi.</Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Feature
          icon={<Icon as={IoPersonRemoveOutline} w={10} h={10} />}
          title={'Q: Who is Sarmad Gardezi ?'}
          text={
            'Sarmad Gardezi is a Professional UX UI Developer from islamabad Pakistan. From last 7 Years he is a blogger online & build more then 100+ website projects for the client as a freelancer. Currently working with Google Cloud Islamabad.'
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Q: Does Sarmad Gardezi is Google Certified?'}
          text={
            'Sarmad Gardezi Started blogging as a student now his articles is famous over the world. He also worked with ProPakistani & TechJuice as a Content Writer.'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Q: How does Sarmad Gardezi started Blogging?'}
          text={
            'Sarmad Gardezi Started blogging as a student now his articles is famous over the world. He also worked with ProPakistani & TechJuice as a Content Writer.'
          }
        />
        
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Q: How much you charge for a blog website?'}
          text={
            'I helps student to start their own blog from scratch. My rates are very low and i also teach them how to earn online using google adsense.'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Q: How Sarmad Gardezi Earn Online?'}
          text={
            'Sarmad is curently earning from Google Adsense, Taking freelance projects & hes level 1 seller at Upwork as a Full Stack developer. He use the mediums UpWork Google Adsense turingcom'
          }
        />
        
      </SimpleGrid>
    </Box>
    </>
  );
}