import publicationsRaw from '../../../content/publications.json';
import newsRaw from '../../../content/news.json';
import projectsRaw from '../../../content/projects.json';
import coursesRaw from '../../../content/courses.json';
import teamRaw from '../../../content/team.json';
import galleryRaw from '../../../content/gallery.json';
import researchRaw from '../../../content/research.json';
import resourcesRaw from '../../../content/resources.json';
import {
  validatePublicationsFile,
  validateNewsFile,
  validateProjectsFile,
  validateCoursesFile,
  validateTeamFile,
  validateGalleryFile,
  validateResearchFile,
  validateResourcesFile,
} from '@/lib/content/schemas';

/** Parsed site content (validated at module load / build time). */
export const publicationsContent = validatePublicationsFile(publicationsRaw);
export const newsContent = validateNewsFile(newsRaw);
export const projectsContent = validateProjectsFile(projectsRaw);
export const coursesContent = validateCoursesFile(coursesRaw);
export const teamContent = validateTeamFile(teamRaw);
export const galleryContent = validateGalleryFile(galleryRaw);
export const researchContent = validateResearchFile(researchRaw);
export const resourcesContent = validateResourcesFile(resourcesRaw);
