import { isValidHttpUrl } from '@/lib/utils';

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

export const publications: Publication[] = [
  {
    id: 'p1',
    title:
      'An Adaptive Density Peak Clustering Algorithm Based on N-ary Bézier Reverse Curve Optimization',
    authors: 'Le Yang, RuiDong Qi & Jian-tao Zhou',
    venue:
      'Proceedings of the 21st Annual Meeting of the International Conference on Intelligent Computing (ICIC 2025)',
    year: 2025,
    type: 'Conference Paper',
    doi: '10.1007/978-981-96-9884-4_25',
    abstract:
      'Clustering is a fundamental technique in unsupervised learning. This paper proposes an adaptive density peak clustering algorithm using N-ary Bézier inverse-curve optimization for automatic cluster-center selection, with gamma processing and entropy weighting to reduce complexity. Experiments report gains on AMI, ARI, and FMI versus automatic baselines.',
    keywords: ['Adaptive density clustering', 'Bézier optimization', 'Cluster center selection'],
    bibtex: `@inproceedings{yang2025adaptive,
  author    = {Yang, Le and Qi, RuiDong and Zhou, Jian-tao},
  title     = {An Adaptive Density Peak Clustering Algorithm Based on N-ary B{\\'e}zier Reverse Curve Optimization},
  booktitle = {Proceedings of the 21st International Conference on Intelligent Computing (ICIC)},
  year      = {2025},
  doi       = {10.1007/978-981-96-9884-4_25}
}`,
  },
  {
    id: 'p2',
    title: 'Personalized Hierarchical Topology-Aware Federated Learning: An Approach for QoS Prediction',
    authors: 'CongRong Wu, RuiDong Qi & Jian-tao Zhou',
    venue: 'IEEE International Symposium on Parallel and Distributed Processing with Applications (ISPA)',
    year: 2025,
    type: 'Conference Paper',
    doi: '10.1109/ISPA67752.2025.00193',
    abstract:
      'We propose Personalized Hierarchical Topology-Aware Federated Learning (pHTAFed) for privacy-aware QoS prediction, combining network topology paths with hierarchical aggregation. Results on two real-world datasets show improved accuracy over distributed and centralized baselines.',
    keywords: ['QoS prediction', 'Federated learning', 'Web services'],
    bibtex: `@inproceedings{wu2025phtafed,
  author    = {Wu, CongRong and Qi, RuiDong and Zhou, Jian-tao},
  title     = {Personalized Hierarchical Topology-Aware Federated Learning: An Approach for {QoS} Prediction},
  booktitle = {IEEE International Symposium on Parallel and Distributed Processing with Applications (ISPA)},
  year      = {2025},
  doi       = {10.1109/ISPA67752.2025.00193}
}`,
  },
  {
    id: 'p3',
    title: 'GIDC: A Gaussian Inflection-Based Framework for Automatic Density Peak Clustering',
    authors: 'YueQi Wang, RuiDong Qi & Jian-tao Zhou',
    venue: 'IEEE International Symposium on Parallel and Distributed Processing with Applications (ISPA)',
    year: 2025,
    type: 'Conference Paper',
    doi: '10.1109/ISPA67752.2025.00129',
    abstract:
      'GIDC applies contrast-weighted filtering and Gaussian inflection-point analysis on decision-graph γ-curves to stabilize automatic cluster-center detection under noise and smooth densities, improving accuracy and robustness over state-of-the-art methods.',
    keywords: ['Density-based clustering', 'Gaussian fitting', 'Unsupervised learning'],
    bibtex: `@inproceedings{wang2025gidc,
  author    = {Wang, YueQi and Qi, RuiDong and Zhou, Jian-tao},
  title     = {{GIDC}: A Gaussian Inflection-Based Framework for Automatic Density Peak Clustering},
  booktitle = {IEEE International Symposium on Parallel and Distributed Processing with Applications (ISPA)},
  year      = {2025},
  doi       = {10.1109/ISPA67752.2025.00129}
}`,
  },
];

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
