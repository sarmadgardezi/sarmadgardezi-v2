import { Fragment } from 'react';
import { Container, Text, Stack, Avatar, Divider, Icon, Heading } from '@chakra-ui/react';
// Here we have used react-icons package for the icon
import { ImQuotesLeft } from 'react-icons/im';

interface TestimonialAttributes {
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: TestimonialAttributes[] = [
  {
    name: 'Syed Uzair',
    position: 'CEO',
    company: 'Zeuz Media & Travels',
    image:
      '/testimonials/uzair.jpeg',
    content: `Sarmad is fast, easy to communicate with, understood the scope of the project, and worked autonomously to complete it. Our client was happy and so am I. What more could you want? Hire Sarmad!.`
  },
  {
    name: 'Jena Karlis',
    position: 'GM',
    company: 'Olpers',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
    content: `Sarmad delivered amazing work and we enjoyed working with him. His communication was top-notch, he met all deadlines, and his skills were reasonably strong. At one point I asked for an additional milestone and he was very forthcoming that the additional work was outside his area of expertise. We hope to work with Sarmad in the future.`
  }
];

const Testimonials = () => {
  return (
    <>
    <Heading marginTop={12}  size="md">Testimonials by People I Work with!</Heading>
    <Container maxW="5xl" py={10} px={{ base: 5, md: 20 }}>
        
      {testimonials.map((obj, index) => (
        <Fragment key={index}>
          
          <Stack direction={{ base: 'column', sm: 'row' }} spacing={10} pt={1} justify="center">
            <Avatar
              size="2xl"
              showBorder={true}
              borderColor="green.400"
              name="avatar"
              src={obj.image}
              d={{ base: 'none', sm: 'block' }}
            />

            <Stack direction="column" spacing={4} textAlign="left" maxW="4xl">
              <Icon as={ImQuotesLeft} w={8} h={8} color="gray.400" />
              <Text fontSize="md" fontWeight="medium">
                {obj.content}
              </Text>
              <Stack alignItems={{ base: 'center', sm: 'flex-start' }} spacing={0}>
                <Avatar
                  size="xl"
                  showBorder={true}
                  borderColor="green.400"
                  name="avatar"
                  src={obj.image}
                  d={{ base: 'block', sm: 'none' }}
                />
                <Text fontWeight="bold" fontSize="lg">
                  {obj.name}
                </Text>
                <Text fontWeight="medium" fontSize="sm" color="gray.600">
                  {obj.position}, {obj.company}
                </Text>
              </Stack>
            </Stack>
          </Stack>
          {testimonials.length - 1 !== index && <Divider my={6} />}
        </Fragment>
      ))}
    </Container>
    </>
  );
};
export default Testimonials;