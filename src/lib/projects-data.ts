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

export const projects: LabProject[] = [
  {
    id: 'proj1',
    title:
      'User-Perceived Computing Power Scheduling Based on the Inner Mongolia Computing Hub Node',
    role: 'Principal Investigator',
    fundingAgency:
      'Industry/Enterprise Collaboration Projects - China Mobile Communications Group Inner Mongolia Co., Ltd',
    period: '2024 - 2026',
    amount: 'CNY 500,000 (industry collaboration fund)',
    description:
      'This research focuses on the Inner Mongolia computing hub node, aiming to design efficient and intelligent computing power scheduling methods driven by user perception and dynamic resource matching. Key topics include perception and modeling of heterogeneous resources, user experience–oriented scheduling mechanisms, cross-domain resource coordination and optimization, and green, low-carbon scheduling strategies.',
    collaborators: ['China Mobile Communications Group Inner Mongolia Co., Ltd'],
    status: 'Ongoing',
    keywords: [
      'Computing Power Scheduling',
      'User Perception',
      'Cross-domain Coordination',
      'Green and Low-carbon Computing',
    ],
  },
];
