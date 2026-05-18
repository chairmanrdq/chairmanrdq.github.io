import { newsArticles } from '@/lib/news-data';
import { publications } from '@/lib/publications';

function parseNewsDate(date: string): Date | undefined {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return undefined;
  return new Date(`${date}T12:00:00Z`);
}

/** Latest news article date, if any. */
export function getLatestNewsDate(): Date | undefined {
  const dates = newsArticles
    .map((a) => parseNewsDate(a.date))
    .filter((d): d is Date => d !== undefined);
  if (dates.length === 0) return undefined;
  return new Date(Math.max(...dates.map((d) => d.getTime())));
}

/** Latest publication year as Jan 1 UTC (sitemap granularity). */
export function getLatestPublicationDate(): Date {
  const maxYear = publications.reduce((max, p) => Math.max(max, p.year), 0);
  return new Date(Date.UTC(maxYear || new Date().getFullYear(), 0, 1));
}

/** Default last-modified for static pages without content timestamps. */
export function getDefaultContentDate(): Date {
  return getLatestNewsDate() ?? getLatestPublicationDate();
}
