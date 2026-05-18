import { MetadataRoute } from 'next';
import { getCanonicalSiteUrl } from '@/lib/site-config';
import {
  getDefaultContentDate,
  getLatestNewsDate,
  getLatestPublicationDate,
} from '@/lib/site-dates';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getCanonicalSiteUrl().replace(/\/$/, '');
  const defaultModified = getDefaultContentDate();
  const newsModified = getLatestNewsDate() ?? defaultModified;
  const pubsModified = getLatestPublicationDate();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: defaultModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/research/`,
      lastModified: defaultModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/publications/`,
      lastModified: pubsModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/`,
      lastModified: defaultModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news/`,
      lastModified: newsModified,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/courses/`,
      lastModified: defaultModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/team/`,
      lastModified: defaultModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/resources/`,
      lastModified: defaultModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: defaultModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
