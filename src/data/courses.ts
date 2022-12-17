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
    url: 'https://sarmadgardezi.com/seo-course/',
    description:
      "Today, we’re going to look at some easy things you can do to start your website’s SEO on the right foot – even if you can’t hire a professional to help you out. Start learning now & build your clients now!",
    live: true,
    expectedLaunch: 'August 2022',
    image: '/tuts/seotuts.png',
  },
  
];

export default courses;
