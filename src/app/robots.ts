import type { MetadataRoute } from 'next';
import { getCanonicalSiteUrl } from '@/lib/site-config';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const base = getCanonicalSiteUrl();
  const hostname = new URL(base).hostname;
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${base}/sitemap.xml`,
    host: hostname,
  };
}
