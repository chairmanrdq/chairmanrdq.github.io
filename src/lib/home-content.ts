import { siteConfig } from '@/lib/site-config';

export const homeHero = {
  awardBadge: 'Award · Jiutian·Wutong Cup 2026',
  tagline:
    'Computing-power scheduling and green service intelligence—validated in industry hubs and national competitions.',
  subtagline: `${siteConfig.institutionLegalName} · Computing Power Networks Lab`,
  primaryCta: { label: 'Explore Research', href: '/research' },
  secondaryCta: { label: 'Latest News', href: '/news#wutong-cup-2026' },
} as const;

export const heroHighlightStats = [
  { label: 'Wutong Cup AI+Data', value: '1st & 2nd prize' },
  { label: 'Industry collaboration', value: 'Hub scheduling' },
] as const;

export const latestNewsVisual = {
  image: 'wtb.jpg',
  imageAlt: 'Award ceremony at Jiutian·Wutong Cup national finals',
} as const;

export const homeJumpLinks = [
  { label: 'News', href: '#latest-news' },
  { label: 'Research', href: '#research-focus' },
  { label: 'Publications', href: '#featured-publications' },
  { label: 'Join Us', href: '#prospective-students' },
] as const;
