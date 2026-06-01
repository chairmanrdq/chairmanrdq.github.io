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

export const teamMemberSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  role: z.string().min(1),
  avatar: z.string().min(1),
  researchInterests: z.array(z.string()),
  bio: z.string(),
  linkedin: z.string().url().optional(),
  website: z.string().url().optional(),
  googleScholar: z.string().url().optional(),
});

export const alumniMemberSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  role: z.string().min(1),
  avatar: z.string().min(1),
  currentPosition: z.string(),
  researchFocus: z.string(),
  website: z.string().url().optional(),
});

export const teamFileSchema = z.object({
  graduateStudents: z.array(teamMemberSchema),
  undergraduateResearchers: z.array(teamMemberSchema),
  alumni: z.array(alumniMemberSchema),
  undergraduateAlumni: z.array(alumniMemberSchema),
});

export const galleryImageSchema = z.object({
  file: z.string().min(1),
  alt: z.string().min(1),
});

export const galleryFileSchema = z.object({
  homeCarouselCount: z.number().int().min(1).max(20),
  images: z.array(galleryImageSchema).min(1),
});

export const researchThemeSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  keywords: z.array(z.string().min(1)).min(1),
});

export const researchFileSchema = z.object({
  themes: z.array(researchThemeSchema).min(1),
  selectedContributionBullets: z.array(z.string().min(1)).min(1),
});

export const resourceIconKeySchema = z.enum([
  'github',
  'jupyter',
  'overleaf',
  'zotero',
  'presentation',
  'book',
  'network',
]);

export const resourceLinkSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  url: z.string().min(1),
  category: z.string().min(1),
  description: z.string().optional(),
  icon: resourceIconKeySchema,
});

export const resourcesFileSchema = z.object({
  labSoftware: z.array(resourceLinkSchema),
  writingToolkit: z.array(resourceLinkSchema),
  labSlides: z.array(resourceLinkSchema),
  curatedVenues: z.array(resourceLinkSchema),
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

function assertUniqueNumericIds(items: { id: number }[], label: string): void {
  const seen = new Set<number>();
  for (const item of items) {
    if (seen.has(item.id)) {
      throw new Error(`Duplicate id ${item.id} in ${label}`);
    }
    seen.add(item.id);
  }
}

export function validateTeamFile(data: unknown) {
  const parsed = teamFileSchema.parse(data);
  const allMembers = [
    ...parsed.graduateStudents,
    ...parsed.undergraduateResearchers,
    ...parsed.alumni,
    ...parsed.undergraduateAlumni,
  ];
  assertUniqueNumericIds(allMembers, 'team.json (all sections)');
  return parsed;
}

export function validateGalleryFile(data: unknown) {
  const parsed = galleryFileSchema.parse(data);
  if (parsed.homeCarouselCount > parsed.images.length) {
    throw new Error(
      `gallery.json: homeCarouselCount (${parsed.homeCarouselCount}) exceeds images length (${parsed.images.length})`,
    );
  }
  return parsed;
}

export function validateResearchFile(data: unknown) {
  return researchFileSchema.parse(data);
}

export function validateResourcesFile(data: unknown) {
  const parsed = resourcesFileSchema.parse(data);
  for (const [key, list] of Object.entries(parsed) as [string, { id: string }[]][]) {
    assertUniqueIds(list, `resources.json → ${key}`);
  }
  return parsed;
}

/** Collect avatar filenames from team.json for optional filesystem checks. */
export function collectTeamAvatars(team: z.infer<typeof teamFileSchema>): string[] {
  const all = [
    ...team.graduateStudents,
    ...team.undergraduateResearchers,
    ...team.alumni,
    ...team.undergraduateAlumni,
  ];
  return all.map((m) => m.avatar);
}

export function collectGalleryFiles(gallery: z.infer<typeof galleryFileSchema>): string[] {
  return gallery.images.map((i) => i.file);
}
