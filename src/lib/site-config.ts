import { isValidHttpUrl } from '@/lib/utils';
import { labImage } from '@/lib/media';

/**
 * 全站单一配置：课题组品牌、站点 URL、学术外链。
 * 部署前请设置 NEXT_PUBLIC_SITE_URL（含 GitHub Pages 时的子路径）。
 * 复制 `.env.example` 为 `.env.local` 并填入正式 Scholar / ORCID / LinkedIn 主页。
 */
function envUrl(name: string, fallback: string): string {
  const raw = process.env[name]?.trim();
  if (raw && isValidHttpUrl(raw)) return raw;
  return fallback;
}

function resolveSiteUrl(): string {
  const fallback = 'https://chairmanrdq.github.io';
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return fallback;
  let normalized = raw.replace(/\/+$/, '');
  if (!/^https?:\/\//i.test(normalized)) {
    normalized = `https://${normalized.replace(/^\/+/, '')}`;
  }
  try {
    const u = new URL(normalized);
    if (!u.hostname) return fallback;
    const path = u.pathname.replace(/\/$/, '');
    return `${u.origin}${path}`;
  } catch {
    return fallback;
  }
}

const siteUrl = resolveSiteUrl();

const orcidId = process.env.NEXT_PUBLIC_ORCID_ID?.trim() || '';

const googleScholarUrl = envUrl(
  'NEXT_PUBLIC_GOOGLE_SCHOLAR_URL',
  'https://scholar.google.com/scholar?q=Rui-Dong+Qi+Inner+Mongolia+University',
);

const linkedInUrl = envUrl(
  'NEXT_PUBLIC_LINKEDIN_URL',
  'https://www.linkedin.com/search/results/all/?keywords=RuiDong%20Qi',
);

export const siteConfig = {
  siteUrl,

  labTagline:
    'Computing power networks, low-carbon scheduling, and trustworthy service intelligence — theory-grounded, system-validated research.',

  /** 中文站点摘要（用于 metadata keywords / 检索） */
  labTaglineZh:
    '算力网络、低碳调度与可信服务智能——理论与系统验证并重的研究团队。',

  piShortName: 'Dr. RuiDong Qi',
  piFullName: 'Dr. RuiDong Qi（祁瑞东）',

  piPosition:
    'Principal Investigator in Computing Power Networks | Green AI and Service Intelligence',

  researchSummary:
    'Our research integrates computing power systems, service intelligence, and green optimization. We study cloud–edge collaboration, user-centric QoS modeling, and reliable recommendation under practical deployment constraints.',

  researchKeywords: [
    'Cloud Computing and Big Data',
    'Services Computing',
    'Computing Power Networks and Green Scheduling',
    'Service Recommendation',
  ] as const,

  institution: 'College of Computer Science, Inner Mongolia University',
  institutionLegalName: 'Inner Mongolia University',

  contactEmail: 'imucsrdq@163.com',

  piAvatarUrl: labImage('rdq2.jpg'),

  piOffice:
    'Room 303, BeiZheng Building, School of Computer Science (School of Software), Inner Mongolia University',

  academic: {
    googleScholar: googleScholarUrl,
    orcidSearch: 'https://orcid.org/orcid-search/search?searchQuery=Rui%20Dong%20Qi',
    linkedin: linkedInUrl,
    githubProfile: 'https://github.com/chairmanrdq',
  },

  orcidId,
} as const;

export function getOrcidUrl(): string | null {
  if (!siteConfig.orcidId) return null;
  return `https://orcid.org/${siteConfig.orcidId}`;
}

export function getPiOrcidLinkUrl(): string {
  return getOrcidUrl() ?? siteConfig.academic.orcidSearch;
}

export type PiAcademicLink = {
  name: string;
  url: string;
};

/** 首页 / 联系页 / Team PI 卡共用的学术外链 */
export function getPiAcademicLinks(): PiAcademicLink[] {
  return [
    { name: 'Google Scholar', url: siteConfig.academic.googleScholar },
    { name: 'ORCID', url: getPiOrcidLinkUrl() },
    { name: 'GitHub', url: siteConfig.academic.githubProfile },
    { name: 'LinkedIn', url: siteConfig.academic.linkedin },
  ];
}

export function getCanonicalSiteUrl(): string {
  return siteConfig.siteUrl;
}

export function getSameAsUrls(): string[] {
  const urls = [
    siteConfig.academic.googleScholar,
    siteConfig.academic.githubProfile,
    getOrcidUrl(),
  ].filter((u): u is string => Boolean(u));
  return urls;
}
