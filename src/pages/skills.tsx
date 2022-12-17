import Head from "next/head";
import {
  Center,
  Box,
  Stack,
  Text,
  Divider,
  VStack,
  ListItem,
  List,
  ListIcon,
  Heading,
} from "@chakra-ui/react";

import { skills } from "../data/skills";
import { BiArrowToRight } from "react-icons/bi";
import metadata from '../layout/metadata.json';
const  Skills = () => {
const {titleSuffix } = metadata;
  return (
    <>
     <Head>
        <title key="title">Skills {metadata.titleSuffix}</title></Head>
        <Heading textAlign={['center']} as='h2' size='3xl' pb='4' noOfLines={1}>Skill's</Heading>
      <Box
        h={{ base: "100%", lg: "88vh" }}
        d="flex"
        alignItems="center"
        justifyContent="center"
      >
         
        <Stack direction={{ base: "column", lg: "row" }} w="100%" spacing={0}>
          {/* front end skills list */}
          <VStack
            w="100%"
            textAlign="start"
            alignItems="flex-start"
            //    bg="blue"
            p={4}
            spacing={5}
          >
            <Center w="100%">
              <Text fontWeight="bold">Front End</Text>
            </Center>
            <List spacing={3}>
              {skills["front end"].map((item, index) => {
                return (
                  <ListItem key={index}>
                    <ListIcon as={BiArrowToRight} color="green.500" />
                    {item}
                  </ListItem>
                );
              })}
            </List>
          </VStack>
          {/* end fo front end list */}
          <Divider
            display={{ base: "none", lg: "block" }}
            orientation="vertical"
            height="auto"
          />

          {/*  ======== back end list========= */}

          <VStack
            w="100%"
            textAlign="start"
            alignItems="flex-start"
            //    bg="blue"
            p={4}
            spacing={5}
          >
            <Center w="100%">
              <Text fontWeight="bold">Back End</Text>
            </Center>
            <List spacing={3}>
              {skills["back end"].map((item, index) => {
                return (
                  <ListItem key={index}>
                    <ListIcon as={BiArrowToRight} color="green.500" />
                    {item}
                  </ListItem>
                );
              })}
            </List>
          </VStack>

          <Divider
            display={{ base: "none", lg: "block" }}
            orientation="vertical"
            height="auto"
          />
          {/*  ====== mobile list========= */}

          <VStack
            w="100%"
            textAlign="start"
            alignItems="flex-start"
            //    bg="blue"
            p={4}
            spacing={5}
          >
            <Center w="100%">
              <Text fontWeight="bold">Mobile Dev</Text>
            </Center>
            <List spacing={3}>
              {skills["mobile"].map((item, index) => {
                return (
                  <ListItem key={index}>
                    <ListIcon as={BiArrowToRight} color="green.500" />
                    {item}
                  </ListItem>
                );
              })}
            </List>
          </VStack>

          <Divider
            display={{ base: "none", lg: "block" }}
            orientation="vertical"
            height="auto"
          />
          {/*  ===== tools list========== */}

          <VStack
            w="100%"
            textAlign="start"
            alignItems="flex-start"
            //    bg="blue"
            p={4}
            spacing={5}
          >
            <Center w="100%">
              <Text fontWeight="bold">Tools</Text>
            </Center>
            <List spacing={3}>
              {skills["tools"].map((item, index) => {
                return (
                  <ListItem key={index}>
                    <ListIcon as={BiArrowToRight} color="green.500" />
                    {item}
                  </ListItem>
                );
              })}
            </List>
          </VStack>

          {/*============ */}
        </Stack>
      </Box>
    </>
  );
}
export default Skills