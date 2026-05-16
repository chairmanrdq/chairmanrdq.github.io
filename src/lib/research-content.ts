import { siteConfig } from '@/lib/site-config';

export const researchOverview = siteConfig.researchSummary;

export const researchThemes = [
  {
    title: 'Computing Power Networks & Scheduling',
    description:
      'User-perceived and QoS-aware scheduling across heterogeneous hub resources, with cross-domain coordination under operational constraints.',
    keywords: ['Computing power scheduling', 'User-perceived QoS', 'Cross-domain coordination'],
  },
  {
    title: 'Green & Low-carbon Optimization',
    description:
      'Energy-efficient allocation and low-carbon objectives validated through industry collaboration and deployable system prototypes.',
    keywords: ['Green scheduling', 'Energy efficiency', 'Low-carbon computing'],
  },
  {
    title: 'Service Computing & Recommendation',
    description:
      'Reliable service intelligence—including cold-start, federated, and multimodal recommendation—under data scarcity and privacy needs.',
    keywords: ['Service recommendation', 'Cold start', 'Federated learning'],
  },
  {
    title: 'Data-driven Learning & Analytics',
    description:
      'Clustering, QoS prediction, and behavioral analytics methods with reproducible protocols and system-level evaluation.',
    keywords: ['Clustering', 'QoS prediction', 'Reproducible evaluation'],
  },
] as const;

export const selectedContributionBullets = [
  'Density-peak clustering with principled automatic center discovery via curve optimization and inflection-point modeling.',
  'Privacy-aware QoS prediction through personalized federated learning with topology-aware hierarchical aggregation.',
  'Evaluation emphasizes reproducible protocols: standard clustering metrics, baseline-controlled QoS comparisons, and robustness under noisy regimes.',
] as const;
