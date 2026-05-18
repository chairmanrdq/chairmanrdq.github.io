import { newsArticles } from '@/lib/news-data';
import { siteConfig, getCanonicalSiteUrl } from '@/lib/site-config';

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** RSS 2.0 feed for lab news (static export: write to public/feed.xml at build). */
export function buildRssFeed(): string {
  const siteUrl = getCanonicalSiteUrl().replace(/\/$/, '');
  const items = [...newsArticles]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((article) => {
      const link = article.relatedLink?.href.startsWith('http')
        ? article.relatedLink.href
        : `${siteUrl}${article.relatedLink?.href ?? '/news/'}`;
      return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="false">${escapeXml(`${siteUrl}/news/#${article.id}`)}</guid>
      <pubDate>${new Date(`${article.date}T12:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(article.summary)}</description>
    </item>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(`${siteConfig.piShortName} — Lab News`)}</title>
    <link>${escapeXml(`${siteUrl}/news/`)}</link>
    <description>${escapeXml(siteConfig.labTagline)}</description>
    <language>en</language>${items}
  </channel>
</rss>`;
}
