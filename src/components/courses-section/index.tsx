import { Course } from "@/types/course";
import { VStack, Heading, List, ListItem, Box, HStack } from "@chakra-ui/react";
import CourseCard from "./course-card";

type Props = {
  courses: Course[];
};

const CoursesSection = ({ courses }: Props) => {
  return (
    <HStack w='full' marginTop={20} align='flex-start' >

    <VStack as="section" alignItems="flex-start" w="full" spacing={4}>
      <Heading size="md" >Courses.</Heading>
      <List spacing={6}>
        {courses.map((course) => (
          <ListItem key={course.url}>
            <CourseCard {...course} />
          </ListItem>
        ))}
      </List>
    </VStack>
    </HStack>
  );
};

export default CoursesSection;
