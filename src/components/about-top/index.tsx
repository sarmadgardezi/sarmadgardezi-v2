import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    Spacer,
    Icon,
    Accordion,
    AccordionItem,
    AccordionButton,
    Box,
    AccordionPanel,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { AccordionIcon } from "@chakra-ui/accordion";
  import { GrStackOverflow } from "react-icons/gr";
  import { BsPersonFill } from "react-icons/bs";
  import { RiTeamFill } from "react-icons/ri";
  
  const Feature = ({ title, description, icon, iconBg }) => {
    return (
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Flex>
              <Stack direction={"row"} align={"center"}>
                <Flex
                  w={8}
                  h={8}
                  align={"center"}
                  justify={"center"}
                  rounded={"full"}
                  bg={iconBg}
                >
                  {icon}
                </Flex>
                <Box flex="1" textAlign="left">
                  {title}
                </Box>
              </Stack>
              <Spacer />
              <Box>
                <AccordionIcon />
              </Box>
            </Flex>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{description}</AccordionPanel>
      </AccordionItem>
    );
  };
  
  export default function AboutSection() {
    return (
      <Container maxW={"5xl"} py={5}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Accordion defaultIndex={[1]} allowToggle>
            <Stack spacing={10}>
              <Text
                textTransform={"uppercase"}
                color={"blue.400"}
                fontWeight={600}
                fontSize={"sm"}
                bg={useColorModeValue("blue.50", "blue.900")}
                p={2}
                alignSelf={"flex-start"}
                rounded={"md"} >
                About Me
              </Text>
              <Heading>Hi, I&apos;m Sarmad! </Heading>
              <Text color={"gray.500"} fontSize={"lg"}>
                I&apos;m a full-stack software engineer based in Islamabad,Pakistan and a
                Under graduate of B.S. Soctware Engineering.
               
              </Text>
              <Stack spacing={1}>
                <Feature
                  icon={
                    <Icon as={GrStackOverflow} color={"yellow.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  title={"Full-Stack Developer"}
                  description={
                    "With a particular focus on Backend Development, I've utilized PostgreSQL, Express.js, React.js, and Node.js to full effect."
                  }
                />
                <Feature
                  icon={
                    <Icon as={BsPersonFill} color={"green.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("green.100", "green.900")}
                  title={"Project Management"}
                  description={
                    "I've handled my teams to push projects forward from conceptualization all the way through development and delivery."
                  }
                />
                <Feature
                  icon={<Icon as={RiTeamFill} color={"purple.500"} w={5} h={5} />}
                  iconBg={useColorModeValue("purple.100", "purple.900")}
                  title={"Team-Oriented"}
                  description={
                    "I firmly believe that learning and working closely with others is the surefire way to become a better worker. I love building things!"
                  }
                />
              </Stack>
            </Stack>
          </Accordion>
          <Flex>
            <Box
              role={"group"}
              bg={useColorModeValue("white", "gray.800")}
              rounded={"xl"}
              pos={"relative"}
              zIndex={1}
            >
              <Box
                rounded={"lg"}
                pos={"relative"}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  backgroundImage: "/face.jpg",
                  filter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(35px)",
                    WebkitBackdropFilter: "blur(35px)",
                  },
                }}
              >
                <Image
                  rounded={"3xl"}
                  alt={"feature image"}
                  src={"/about/about.png"}
                  objectFit={"cover"}
                />
              </Box>
            </Box>
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }