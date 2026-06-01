import publicationsRaw from '../../../content/publications.json';
import newsRaw from '../../../content/news.json';
import projectsRaw from '../../../content/projects.json';
import coursesRaw from '../../../content/courses.json';
import {
  validatePublicationsFile,
  validateNewsFile,
  validateProjectsFile,
  validateCoursesFile,
} from '@/lib/content/schemas';

/** Parsed site content (validated at module load / build time). */
export const publicationsContent = validatePublicationsFile(publicationsRaw);
export const newsContent = validateNewsFile(newsRaw);
export const projectsContent = validateProjectsFile(projectsRaw);
export const coursesContent = validateCoursesFile(coursesRaw);
