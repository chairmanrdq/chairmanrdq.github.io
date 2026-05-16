import { publications } from '@/lib/publications';
import { researchThemes } from '@/lib/research-content';
import { projects } from '@/lib/projects-data';
import {
  graduateStudents,
  undergraduateResearchers,
} from '@/lib/team-data';

export interface LabStat {
  label: string;
  value: string;
}

export function getHomeLabStats(): LabStat[] {
  const activeResearchers =
    graduateStudents.length + undergraduateResearchers.length;
  const ongoingProjects = projects.filter((p) => p.status === 'Ongoing').length;

  return [
    { label: 'Curated publications', value: String(publications.length) },
    { label: 'Research themes', value: String(researchThemes.length) },
    { label: 'Active researchers', value: String(activeResearchers) },
    { label: 'Ongoing projects', value: String(ongoingProjects) },
  ];
}
