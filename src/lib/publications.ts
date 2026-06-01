import { isValidHttpUrl } from '@/lib/utils';
import { publicationsContent } from '@/lib/content/load';

export type PublicationType =
  | 'Conference Paper'
  | 'Journal Article'
  | 'Book'
  | 'Preprint'
  | 'Book Chapter'
  | 'Workshop Paper';

/** Publications page tab keys (always shown in the nav bar). */
export type PublicationTabCategory = 'All' | PublicationType | 'arXiv';

export const PUBLICATION_TAB_CATEGORIES: PublicationTabCategory[] = [
  'All',
  'Conference Paper',
  'Journal Article',
  'arXiv',
];

/** Tab labels shown in the UI */
export const PUBLICATION_TAB_LABELS: Record<PublicationTabCategory, string> = {
  All: 'All',
  'Conference Paper': 'Conference Paper',
  'Journal Article': 'Journal Article',
  Book: 'Book',
  Preprint: 'Preprint',
  'Book Chapter': 'Book Chapter',
  'Workshop Paper': 'Workshop Paper',
  arXiv: 'arXiv',
};

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: PublicationType;
  doi?: string;
  pdfUrl?: string;
  arxivUrl?: string;
  bibtex?: string;
  abstract?: string;
  keywords?: string[];
}

/** Curated publications — edit content/publications.json */
export const publications: Publication[] = publicationsContent.publications;

export function filterPublicationsByType(category: PublicationTabCategory | string): Publication[] {
  if (category === 'All') return publications;
  if (category === 'arXiv') {
    return publications.filter((p) => isValidHttpUrl(p.arxivUrl));
  }
  return publications.filter((p) => p.type === category);
}

export function getPublicationTabCategories(): PublicationTabCategory[] {
  return [...PUBLICATION_TAB_CATEGORIES];
}

export function getPublicationTabLabel(category: PublicationTabCategory): string {
  return PUBLICATION_TAB_LABELS[category] ?? category;
}

export function getEmptyTabMessage(category: PublicationTabCategory): string {
  switch (category) {
    case 'Journal Article':
      return 'No journal articles in the curated list yet.';
    case 'Conference Paper':
      return 'No conference papers in this category.';
    case 'arXiv':
      return 'No entries with an arXiv link yet.';
    case 'All':
      return 'No publications match your search.';
    default:
      return `No publications in “${getPublicationTabLabel(category)}” yet.`;
  }
}

export function getFeaturedPublications(limit = 3): Publication[] {
  return [...publications].sort((a, b) => b.year - a.year).slice(0, limit);
}

export interface PublicationYearGroup {
  year: number;
  publications: Publication[];
}

/** Group publications by year (newest year first). */
export function groupPublicationsByYear(pubs: Publication[]): PublicationYearGroup[] {
  const byYear = new Map<number, Publication[]>();
  for (const pub of pubs) {
    const list = byYear.get(pub.year) ?? [];
    list.push(pub);
    byYear.set(pub.year, list);
  }
  return [...byYear.entries()]
    .sort(([a], [b]) => b - a)
    .map(([year, items]) => ({
      year,
      publications: items.sort((a, b) => a.title.localeCompare(b.title)),
    }));
}

/** Re-export for pages that import contribution bullets alongside publication helpers. */
export { selectedContributionBullets } from '@/lib/research-content';
