import { siteConfig } from '@/lib/site-config';
import { researchContent } from '@/lib/content/load';

export const researchOverview = siteConfig.researchSummary;

/** 研究方向 — 编辑 content/research.json */
export const researchThemes = researchContent.themes;

export const selectedContributionBullets = researchContent.selectedContributionBullets;
