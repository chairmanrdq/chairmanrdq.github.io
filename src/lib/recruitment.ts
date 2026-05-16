import { siteConfig } from '@/lib/site-config';

export const recruitmentIntro =
  'Students interested in joining the lab should email a concise self-introduction and academic background. We prioritize candidates with clear research interests and solid foundations in systems, networking, or machine learning.';

export const recruitmentChecklist = [
  'Your CV, transcripts (if available), and 1–2 related projects.',
  'Why this lab, and how your experience connects to our research themes.',
  'Any constraints (schedule, language preference, and expected start time).',
] as const;

export const recruitmentEmail = siteConfig.contactEmail;
export const recruitmentMailto = `mailto:${recruitmentEmail}?subject=${encodeURIComponent('Lab Application - Your Name')}`;
