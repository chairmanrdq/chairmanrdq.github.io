import { siteConfig } from '@/lib/site-config';

export type ResourceIconKey =
  | 'github'
  | 'jupyter'
  | 'overleaf'
  | 'zotero'
  | 'presentation'
  | 'book'
  | 'network';

export interface ResourceLinkItem {
  id: string;
  name: string;
  url: string;
  category: string;
  description?: string;
  icon: ResourceIconKey;
}

/** Lab code, reproducibility, and PI GitHub — not generic tool directories. */
export const labSoftware: ResourceLinkItem[] = [
  {
    id: 'lab-github',
    name: 'Lab GitHub (chairmanrdq)',
    url: siteConfig.academic.githubProfile,
    category: 'Lab',
    description: 'Course materials, competition code, and project prototypes maintained by the group.',
    icon: 'github',
  },
  {
    id: 'lab-jupyter',
    name: 'Jupyter',
    url: 'https://jupyter.org/',
    category: 'Lab',
    description: 'Interactive notebooks for experiments, coursework demos, and reproducible analysis.',
    icon: 'jupyter',
  },
];

/** Writing & reference stack used in the group (condensed). */
export const writingToolkit: ResourceLinkItem[] = [
  {
    id: 'overleaf',
    name: 'Overleaf',
    url: 'https://www.overleaf.com/',
    category: 'Writing',
    description: 'Collaborative LaTeX for papers and technical reports.',
    icon: 'overleaf',
  },
  {
    id: 'zotero',
    name: 'Zotero',
    url: 'https://www.zotero.org/',
    category: 'References',
    description: 'Reference management for literature surveys and manuscript preparation.',
    icon: 'zotero',
  },
];

/** Standards and community materials aligned with computing-power / networking research. */
export const labSlides: ResourceLinkItem[] = [
  {
    id: 'ietf-can',
    name: 'IETF Computing-Aware Networking (CAN) WG',
    url: 'https://datatracker.ietf.org/wg/can/meetings/',
    category: 'Standards',
    icon: 'presentation',
  },
  {
    id: 'irtf-coinrg',
    name: 'IRTF Computing in the Network (COINRG)',
    url: 'https://datatracker.ietf.org/rg/coinrg/meetings/',
    category: 'Standards',
    icon: 'presentation',
  },
  {
    id: 'odcc',
    name: 'ODCC — Computing & Edge Forums (CN)',
    url: 'http://www.odcc.org.cn/meeting/list',
    category: 'Industry',
    icon: 'presentation',
  },
  {
    id: 'sigcomm',
    name: 'ACM SIGCOMM (NetCompute & related workshops)',
    url: 'https://www.sigcomm.org/events/sigcomm-conference',
    category: 'Conferences',
    icon: 'presentation',
  },
];

export const curatedVenues: ResourceLinkItem[] = [
  {
    id: 'ccf_net_1',
    name: 'SIGCOMM',
    url: 'https://www.sigcomm.org/',
    category: 'Computer Networks',
    icon: 'network',
  },
  {
    id: 'ccf_net_2',
    name: 'MobiCom',
    url: 'https://sigmobile.org/mobicom/',
    category: 'Computer Networks',
    icon: 'network',
  },
  {
    id: 'ccf_db_2',
    name: 'KDD',
    url: 'https://kdd.org/',
    category: 'Data Mining',
    icon: 'book',
  },
  {
    id: 'ccf_arch_2',
    name: 'ASPLOS',
    url: 'https://www.sigarch.org/conferences/asplos/',
    category: 'Systems',
    icon: 'book',
  },
  {
    id: 'ccf_se_1',
    name: 'ICSE',
    url: 'https://conf.researchr.org/series/icse',
    category: 'Software Engineering',
    icon: 'book',
  },
];
