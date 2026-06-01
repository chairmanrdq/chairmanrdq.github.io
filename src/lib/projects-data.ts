import { projectsContent } from '@/lib/content/load';

export interface LabProject {
  id: string;
  title: string;
  role: string;
  fundingAgency: string;
  period: string;
  amount: string;
  description: string;
  collaborators: string[];
  status: 'Ongoing' | 'Completed';
  keywords: string[];
}

/** Funded projects — edit content/projects.json */
export const projects: LabProject[] = projectsContent.projects;
