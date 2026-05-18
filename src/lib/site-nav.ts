import type { LucideIcon } from 'lucide-react';
import {
  Home,
  FlaskConical,
  Newspaper,
  Rss,
  FolderGit2,
  Users,
  GraduationCap,
  Download as DownloadIcon,
  MessageSquare,
} from 'lucide-react';

export type NavItem = { href: string; label: string; icon: LucideIcon };

export type NavGroup = { id: string; label: string; items: NavItem[] };

/** Header navigation — grouped for scanability (P3). */
export const headerNavGroups: NavGroup[] = [
  {
    id: 'research',
    label: 'Research',
    items: [
      { href: '/', label: 'Home', icon: Home },
      { href: '/research', label: 'Research', icon: FlaskConical },
      { href: '/publications', label: 'Pubs', icon: Newspaper },
      { href: '/projects', label: 'Projects', icon: FolderGit2 },
    ],
  },
  {
    id: 'people',
    label: 'People',
    items: [
      { href: '/news', label: 'News', icon: Rss },
      { href: '/team', label: 'Team', icon: Users },
      { href: '/courses', label: 'Courses', icon: GraduationCap },
    ],
  },
  {
    id: 'lab',
    label: 'Lab',
    items: [
      { href: '/resources', label: 'Resources', icon: DownloadIcon },
      { href: '/contact', label: 'Contact', icon: MessageSquare },
    ],
  },
];

export const headerNavItems: NavItem[] = headerNavGroups.flatMap((g) => g.items);

/** Footer links (flat). */
export const footerNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/publications', label: 'Pubs' },
  { href: '/projects', label: 'Projects' },
  { href: '/news', label: 'News' },
  { href: '/team', label: 'Team' },
  { href: '/courses', label: 'Courses' },
  { href: '/contact', label: 'Contact' },
] as const;
