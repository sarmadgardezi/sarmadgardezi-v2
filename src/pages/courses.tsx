import Head from "next/head";

import {
  Stack,
  InputGroup,
  Text,
  InputRightElement,
  Center,
  Input,
  Flex,
  Box,
  Spacer,
  Container,
  ListIcon,
  ListItem,
  List,
  Heading,
} from "@chakra-ui/react";

import { RiGitRepositoryLine } from "react-icons/ri";
import { useState } from "react";
import { dumData } from "../data/projectsData";
import metadata from '../layout/metadata.json';

export default function career() {
  const [data, setdata] = useState(dumData);
  const [searchField, setsearchField] = useState("");

  return (
    <>
    <Head>
        <title key="title">Courses {metadata.titleSuffix}</title>
			</Head>
      <Container maxWidth={{ base: "100%", lg: "45em" }}>
        <Stack direction="column" spacing="50px">
        <Heading textAlign={['center']} as='h2' size='3xl' pb='-1' noOfLines={1}>Courses
        </Heading>
          <Center>
            <InputGroup size="md" w={{ base: "100%", md: "50%" }} mt={20}>
              <Input
                //
                placeholder="Search project"
                size="md"
                onChange={(e) => setsearchField(e.target.value)}
              />
            </InputGroup>
          </Center>
          <Stack direction="column" mb={10} p={4} spacing={10}>
            {/* ========== */}
            {data
              .filter((item, key) => {
                return item.title.includes(searchField);
              })
              .map((it) => {
                return (
                  <a href={it.githubLink} target="_blank" rel="noopener">
                    <Stack
                      direction="column"
                      spacing={3}
                      style={{
                        //position: "relative",
                        borderRadius: 100,
                        border: "5px solid transparent",
                        borderImage:
                          "linear-gradient(to right, #6ee7b7 ,#3b82f6, #9333ea)",
                        borderImageSlice: 1,
                        padding: 30,
                      }}
                    >
                      <Stack direction={{ base: "column", md: "row" }}>
                        <Box w={{ base: "100%", md: "80%" }}>
                          <List spacing={3}>
                            <ListItem>
                              <Text fontWeight="bold">
                                <ListIcon
                                  as={RiGitRepositoryLine}
                                  color="green.500"
                                />
                                {it.title}
                              </Text>
                            </ListItem>
                          </List>
                        </Box>
                        <Spacer display={{ base: "none", md: null }} />
                        <Flex
                          fontWeight="bold"
                          whiteSpace="nowrap"
                          justifyContent={{
                            base: "flex-start",
                            md: "flex-end",
                          }}
                          w={{ base: "100%", md: "20%" }}
                        >
                          <Text color="#4c4c4c">{it.technology} </Text>
                        </Flex>
                      </Stack>
                      <Box w="90%">
                        {" "}
                        <Text color="#4c4c4c">{it.body}</Text>
                      </Box>
                    </Stack>
                  </a>
                );
              })}

            {/* ========== */}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}