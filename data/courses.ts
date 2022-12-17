import { Course } from '@/types/course';

const courses: Course[] = [
  /* Adding New Course Checklist:
   * - Create new form on convertkit.com
   * - Obtain formId
   * - Write title & description
   * - No URL
   * - live: false
   * - progress: 0
   */
  {
    id: 'seo-tutorials-by-sarmad-gardezi',
    title: 'SEO Basic Tutorials & Guides ⚡️',
    url: 'https://egghead.io/courses/build-a-modern-user-interface-with-chakra-ui-fac68106',
    description:
      "Today, we’re going to look at some easy things you can do to start your website’s SEO on the right foot – even if you can’t hire a professional to help you out. Start learning now & build your clients now!",
    live: true,
    expectedLaunch: 'August 2022',
    image: './tuts/seotuts,png ',
  },
  {
    id: 'build-modern-user-interface-with-chakra-ui',
    title: 'Build a Modern User Interface with Chakra ⚡️',
    url: 'https://egghead.io/courses/build-a-modern-user-interface-with-chakra-ui-fac68106',
    description:
      "In this course, you will learn how to create a flexible user interface using Chakra UI. You will learn to use Chakra UI's default style props and components to easily build out your application, but you will also see how you can easily override the defaults or even create custom components to suit the needs of your application.",
    live: true,
    expectedLaunch: 'February 2022',
    image: './img/chakra-course.webp ',
  },
];

export default courses;
