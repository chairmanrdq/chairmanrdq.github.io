import { newsContent } from '@/lib/content/load';

export type NewsCategory = 'award' | 'announcement' | 'recruitment' | 'milestone';

export interface NewsArticle {
  id: string;
  date: string;
  title: string;
  summary: string;
  content: string[];
  category: NewsCategory;
  badge: string;
  relatedLink?: { href: string; label: string };
}

export interface AcademicHighlight {
  id: string;
  date: string;
  title: string;
  description: string;
  badge: string;
  tone: 'primary' | 'gold';
  link: string;
  action: string;
  icon: 'book' | 'sparkles' | 'users' | 'award' | 'megaphone';
}

/** Full news articles — edit content/news.json → articles */
export const newsArticles: NewsArticle[] = newsContent.articles;

/** Home quick-link cards — edit content/news.json → labQuickLinks */
export const labQuickLinks: AcademicHighlight[] = newsContent.labQuickLinks;

export function getLatestNewsHighlight(): AcademicHighlight | null {
  const article = [...newsArticles].sort((a, b) => b.date.localeCompare(a.date))[0];
  if (!article) return null;
  return {
    id: 'news-teaser',
    date: article.date,
    title: article.title,
    description: article.summary,
    badge: article.badge,
    tone: article.category === 'award' ? 'gold' : 'primary',
    link: `/news#${article.id}`,
    action: 'Read full story',
    icon: article.category === 'award' ? 'award' : 'megaphone',
  };
}

/** @deprecated Use labQuickLinks + getLatestNewsHighlight */
export const academicHighlights: AcademicHighlight[] = [
  ...labQuickLinks,
  ...(getLatestNewsHighlight() ? [getLatestNewsHighlight()!] : []),
];

export function getNewsArticleById(id: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.id === id);
}
