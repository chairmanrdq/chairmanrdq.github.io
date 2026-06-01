import { z } from 'zod';

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

export const publicationTypeSchema = z.enum([
  'Conference Paper',
  'Journal Article',
  'Book',
  'Preprint',
  'Book Chapter',
  'Workshop Paper',
]);

export const publicationSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  authors: z.string().min(1),
  venue: z.string().min(1),
  year: z.number().int().min(1990).max(2100),
  type: publicationTypeSchema,
  doi: z.string().optional(),
  pdfUrl: z.string().optional(),
  arxivUrl: z.string().optional(),
  bibtex: z.string().optional(),
  abstract: z.string().optional(),
  keywords: z.array(z.string()).optional(),
});

export const publicationsFileSchema = z.object({
  publications: z.array(publicationSchema).min(0),
});

export const newsCategorySchema = z.enum(['award', 'announcement', 'recruitment', 'milestone']);

export const newsArticleSchema = z.object({
  id: z.string().min(1),
  date: z.string().regex(dateRegex, 'date must be YYYY-MM-DD'),
  title: z.string().min(1),
  summary: z.string().min(1),
  content: z.array(z.string().min(1)).min(1),
  category: newsCategorySchema,
  badge: z.string().min(1),
  relatedLink: z
    .object({
      href: z.string().min(1),
      label: z.string().min(1),
    })
    .optional(),
});

export const highlightIconSchema = z.enum(['book', 'sparkles', 'users', 'award', 'megaphone']);

export const academicHighlightSchema = z.object({
  id: z.string().min(1),
  date: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  badge: z.string().min(1),
  tone: z.enum(['primary', 'gold']),
  link: z.string().min(1),
  action: z.string().min(1),
  icon: highlightIconSchema,
});

export const newsFileSchema = z.object({
  articles: z.array(newsArticleSchema).min(0),
  labQuickLinks: z.array(academicHighlightSchema).min(0),
});

export const projectSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  role: z.string().min(1),
  fundingAgency: z.string().min(1),
  period: z.string().min(1),
  amount: z.string().min(1),
  description: z.string().min(1),
  collaborators: z.array(z.string()),
  status: z.enum(['Ongoing', 'Completed']),
  keywords: z.array(z.string()),
});

export const projectsFileSchema = z.object({
  projects: z.array(projectSchema).min(0),
});

export const courseResourceSchema = z.object({
  name: z.string().min(1),
  url: z.string(),
});

export const courseSchema = z.object({
  id: z.string().min(1),
  courseName: z.string().min(1),
  location: z.string().min(1),
  term: z.string().min(1),
  level: z.string().min(1),
  description: z.string().min(1),
  syllabusUrl: z.string().optional().default(''),
  coursePageUrl: z.string().optional().default(''),
  resources: z.array(courseResourceSchema).default([]),
});

export const coursesFileSchema = z.object({
  courses: z.array(courseSchema).min(0),
});

function assertUniqueIds<T extends { id: string }>(items: T[], label: string): void {
  const seen = new Set<string>();
  for (const item of items) {
    if (seen.has(item.id)) {
      throw new Error(`Duplicate id "${item.id}" in ${label}`);
    }
    seen.add(item.id);
  }
}

export function validatePublicationsFile(data: unknown) {
  const parsed = publicationsFileSchema.parse(data);
  assertUniqueIds(parsed.publications, 'publications.json');
  return parsed;
}

export function validateNewsFile(data: unknown) {
  const parsed = newsFileSchema.parse(data);
  assertUniqueIds(parsed.articles, 'news.json articles');
  assertUniqueIds(parsed.labQuickLinks, 'news.json labQuickLinks');
  return parsed;
}

export function validateProjectsFile(data: unknown) {
  const parsed = projectsFileSchema.parse(data);
  assertUniqueIds(parsed.projects, 'projects.json');
  return parsed;
}

export function validateCoursesFile(data: unknown) {
  const parsed = coursesFileSchema.parse(data);
  assertUniqueIds(parsed.courses, 'courses.json');
  return parsed;
}
