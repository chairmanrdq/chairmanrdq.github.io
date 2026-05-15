import { siteConfig, getCanonicalSiteUrl, getSameAsUrls } from '@/lib/site-config';

/**
 * Schema.org Person + Organization，增强检索与知识卡片（静态导出友好）。
 */
export default function JsonLd() {
  const url = getCanonicalSiteUrl();
  const sameAs = getSameAsUrls();

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${url}/#pi`,
        name: 'Rui Dong Qi',
        alternateName: ['祁瑞东', 'RuiDong Qi', siteConfig.piFullName],
        jobTitle: 'Principal Investigator',
        worksFor: { '@id': `${url}/#org` },
        url,
        email: siteConfig.contactEmail,
        ...(sameAs.length ? { sameAs } : {}),
      },
      {
        '@type': 'Organization',
        '@id': `${url}/#org`,
        name: siteConfig.institutionLegalName,
        department: siteConfig.institution,
        url: 'https://www.imu.edu.cn/',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
