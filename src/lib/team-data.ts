import { siteConfig } from '@/lib/site-config';
import { teamContent } from '@/lib/content/load';
import { resolveAlumniMember, resolveTeamMember } from '@/lib/content/resolve-team';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatarUrl: string;
  researchInterests: string[];
  bio: string;
  linkedin?: string;
  website?: string;
  googleScholar?: string;
}

export interface AlumniMember {
  id: number;
  name: string;
  role: string;
  currentPosition: string;
  avatarUrl: string;
  researchFocus: string;
  website?: string;
}

/** PI 信息仍来自 site-config（职位、邮箱等随环境配置） */
export const piProfile = {
  name: siteConfig.piFullName,
  role: 'Principal Investigator',
  position: siteConfig.piPosition,
  affiliation: siteConfig.institution,
  avatarUrl: siteConfig.piAvatarUrl,
  email: siteConfig.contactEmail,
  office: siteConfig.piOffice,
  bio: siteConfig.researchSummary,
} as const;

/** 团队成员 — 编辑 content/team.json（avatar 为 public/images/ 下文件名） */
export const graduateStudents: TeamMember[] =
  teamContent.graduateStudents.map(resolveTeamMember);

export const undergraduateResearchers: TeamMember[] =
  teamContent.undergraduateResearchers.map(resolveTeamMember);

export const alumni: AlumniMember[] = teamContent.alumni.map(resolveAlumniMember);

export const undergraduateAlumni: AlumniMember[] =
  teamContent.undergraduateAlumni.map(resolveAlumniMember);
