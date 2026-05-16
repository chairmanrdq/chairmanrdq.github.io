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

/** Full news articles — awards and lab updates live here. */
export const newsArticles: NewsArticle[] = [
  {
    id: 'wutong-cup-2026',
    date: '2026-04-01',
    title:
      'Two Teams from Our University Win Awards in AI+Data Track of the 5th Jiutian·Wutong Cup National Finals',
    summary:
      'Our Intelligent Computing Pioneer Team and Neida Meow Meow Team received first and second prizes, respectively, at the national finals of the AI+Data track.',
    content: [
      'The national finals of the AI+Data Track of the 2026 5th China Mobile Jiutian·Wutong Cup brought together top university teams from across the country. Competing teams presented solutions spanning intelligent computing, data analytics, and industry-oriented AI applications.',
      'Our Intelligent Computing Pioneer Team earned the first prize for their work on computing-power–aware scheduling and deployment-oriented intelligence under realistic resource constraints.',
      'The Neida Meow Meow Team received the second prize with a strong data-driven pipeline and robust engineering execution in the AI+Data track.',
      'These results reflect sustained lab effort in computing power networks, service intelligence, and practical system building—congratulations to all participating students and advisors.',
    ],
    category: 'award',
    badge: 'Award',
    relatedLink: { href: '/team#principal-investigator', label: 'Meet the PI & team' },
  },
];

/** 首页「快捷入口」卡片（非新闻） */
export const labQuickLinks: AcademicHighlight[] = [
  {
    id: 'p',
    date: 'Selected and updated',
    title: 'Selected Publications',
    description:
      'Representative papers on clustering, federated QoS prediction, and robust density-peak modeling, with DOI access where available.',
    badge: 'Publications',
    tone: 'primary',
    link: '/publications',
    action: 'Browse all',
    icon: 'book',
  },
  {
    id: 'g',
    date: 'Active portfolio',
    title: 'Projects & Grants',
    description:
      'Funded projects and industry collaborations on computing-power scheduling, cross-domain orchestration, and low-carbon optimization.',
    badge: 'Grants',
    tone: 'primary',
    link: '/projects',
    action: 'View projects',
    icon: 'sparkles',
  },
  {
    id: 't',
    date: 'Lab and mentorship',
    title: 'Lab Team',
    description:
      'Team structure, research tracks, and supervision opportunities for students with strong foundations and clear interests.',
    badge: 'Students',
    tone: 'primary',
    link: '/team',
    action: 'Meet the team',
    icon: 'users',
  },
];

export function getLatestNewsHighlight(): AcademicHighlight | null {
  const article = newsArticles[0];
  if (!article) return null;
  return {
    id: 'news-teaser',
    date: article.date,
    title: 'Jiutian·Wutong Cup Finals — Lab Teams Win First & Second Prize',
    description: article.summary,
    badge: 'News',
    tone: 'gold',
    link: `/news#${article.id}`,
    action: 'Read full story',
    icon: 'award',
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
