/**
 * 全站单一配置：课题组品牌、站点 URL、学术外链。
 * 部署前请设置 NEXT_PUBLIC_SITE_URL（含 GitHub Pages 时的子路径，如 https://user.github.io/repo）。
 * 若未写协议（如 user.github.io/repo），会自动补 https://，避免 layout 里 new URL() 在构建期抛错。
 */
function resolveSiteUrl(): string {
  const fallback = 'https://yourdomain.com';
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

export const siteConfig = {
  /** 规范站点根 URL，勿尾斜杠（用于 metadata、sitemap、JSON-LD） */
  siteUrl,

  labName: 'Computing Power & Service Intelligence Lab',
  labTagline:
    'Computing power networks, low-carbon scheduling, and trustworthy service intelligence — theory-grounded, system-validated research.',

  piShortName: 'Dr. RuiDong Qi',
  piFullName: 'Dr. RuiDong Qi（祁瑞东）',

  institution: 'College of Computer Science, Inner Mongolia University',
  institutionLegalName: 'Inner Mongolia University',

  /** 联系邮箱（首页、JSON-LD、联系页一致） */
  contactEmail: 'imucsrdq@163.com',

  /** 个人资料检索链接（在填入正式 ORCID / Scholar 主页前优于占位 #） */
  academic: {
    googleScholar:
      'https://scholar.google.com/scholar?q=Rui-Dong+Qi+Inner+Mongolia+University',
    orcidSearch: 'https://orcid.org/orcid-search/search?searchQuery=Rui%20Dong%20Qi',
    linkedinSearch: 'https://www.linkedin.com/search/results/all/?keywords=RuiDong%20Qi',
    /** 仓库中资源路径暗示的 GitHub 用户；若不符请改 */
    githubProfile: 'https://github.com/chairmanrdq',
  },

  /** 可选：正式 ORCID iD，形如 0000-0001-2345-6789；设置后 JSON-LD sameAs 会包含 canonical ORCID */
  orcidId: process.env.NEXT_PUBLIC_ORCID_ID?.trim() || '',
} as const;

export function getCanonicalSiteUrl(): string {
  return siteConfig.siteUrl;
}

export function getSameAsUrls(): string[] {
  const urls = [
    siteConfig.academic.googleScholar,
    siteConfig.academic.githubProfile,
    siteConfig.orcidId ? `https://orcid.org/${siteConfig.orcidId}` : null,
  ].filter((u): u is string => Boolean(u));
  return urls;
}
