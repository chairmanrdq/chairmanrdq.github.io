import { coursesContent } from '@/lib/content/load';

export interface CourseResource {
  name: string;
  url: string;
}

export interface Course {
  id: string;
  courseName: string;
  location: string;
  term: string;
  level: string;
  description: string;
  syllabusUrl?: string;
  coursePageUrl?: string;
  resources: CourseResource[];
}

/** Courses taught by the PI — edit content/courses.json */
export const courses: Course[] = coursesContent.courses;
