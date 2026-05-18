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

/** 主导航（Header 桌面栏） */
export const primaryNavItems: NavItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/research', label: 'Research', icon: FlaskConical },
  { href: '/publications', label: 'Pubs', icon: Newspaper },
  { href: '/projects', label: 'Projects', icon: FolderGit2 },
  { href: '/news', label: 'News', icon: Rss },
  { href: '/team', label: 'Team', icon: Users },
  { href: '/contact', label: 'Contact', icon: MessageSquare },
];

/** 次要页面（Header「More」下拉；移动端抽屉仍列出全部） */
export const moreNavItems: NavItem[] = [
  { href: '/courses', label: 'Courses', icon: GraduationCap },
  { href: '/resources', label: 'Resources', icon: DownloadIcon },
];

export const allNavItems: NavItem[] = [...primaryNavItems, ...moreNavItems];

/** 页脚与站内快捷导航 */
export const footerNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/publications', label: 'Pubs' },
  { href: '/projects', label: 'Projects' },
  { href: '/news', label: 'News' },
  { href: '/team', label: 'Team' },
  { href: '/courses', label: 'Courses' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
] as const;
