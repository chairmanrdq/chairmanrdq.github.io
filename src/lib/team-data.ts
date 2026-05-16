import { siteConfig } from '@/lib/site-config';
import { labImage } from '@/lib/media';

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

export const graduateStudents: TeamMember[] = [
  {
    id: 2,
    name: 'ZhiBo Zhang（张志博）',
    role: 'Masters Student',
    avatarUrl: labImage('zzb.jpg'),
    researchInterests: ['Multi-Objective Optimization', 'Task Scheduling', 'Computing Power Networks'],
    bio: 'Develops multi-objective models and adaptive scheduling algorithms for distributed heterogeneous computing, using heuristic and ML methods to reduce delay and energy use in low-carbon infrastructures.',
  },
  {
    id: 3,
    name: 'Lei Yuan（袁磊）',
    role: 'Masters Student',
    avatarUrl: labImage('yl.jpg'),
    researchInterests: ['Task scheduling', 'Generative Models', 'Computing Power Networks'],
    bio: 'Studies intelligent scheduling for heterogeneous computing with ML and reinforcement learning, optimizing allocation, throughput, and latency under real-time QoS constraints.',
  },
  {
    id: 4,
    name: 'XueMei Deng（邓雪梅）',
    role: 'Masters Student',
    avatarUrl: labImage('dxm.jpg'),
    researchInterests: ['Cloud-Edge-Device Collaborative Inference', 'Computing Power Networks'],
    bio: 'Designs adaptive scheduling policies for distributed heterogeneous systems, combining reinforcement learning and generative methods to balance latency and energy efficiency.',
  },
  {
    id: 5,
    name: 'Ao Sun（孙奥）',
    role: 'Masters Student',
    avatarUrl: labImage('sa.jpg'),
    researchInterests: ['Cold Start Problem', 'Service Recommendation', 'Computing Power Networks'],
    bio: 'Works on cold-start cloud service recommendation using meta-learning and graph neural networks to improve performance for new services and users under data scarcity.',
  },
  {
    id: 6,
    name: 'MingJie Wu（吴明杰）',
    role: 'Masters Student',
    avatarUrl: labImage('wmj.jpg'),
    researchInterests: ['Recommendation system', 'LLM', 'Service recommendation', 'Computing Power Networks'],
    bio: 'Investigates service recommendation enhanced by large language models, focusing on practical deployment and robustness under sparse interaction data.',
  },
  {
    id: 7,
    name: 'YunShen Zhao（赵昀森）',
    role: 'Masters Student',
    avatarUrl: labImage('zys.jpg'),
    researchInterests: ['Multimodal Fusion', 'Power Forecasting'],
    bio: 'Builds spatiotemporal forecasting frameworks for green power by fusing NWP, satellite, and ground observations with deep learning for grid stability and renewable integration.',
  },
  {
    id: 8,
    name: 'LanLan Yang（杨兰兰）',
    role: 'Masters Student',
    avatarUrl: labImage('yll.jpg'),
    researchInterests: ['Green power Scheduling', 'Data Analysis', 'Computing Power Networks'],
    bio: 'Studies online job scheduling and deep reinforcement learning for low-carbon data-center operation and energy-aware resource management.',
  },
  {
    id: 9,
    name: 'LiJun Dong（董利军）',
    role: 'Masters Student',
    avatarUrl: labImage('dlj.jpg'),
    researchInterests: ['Task Scheduling', 'Computing Power Networks'],
    bio: 'Focuses on task scheduling to improve resource utilization and low-carbon power usage in data centers, with emphasis on reproducible system evaluation.',
  },
  {
    id: 10,
    name: 'PengHui Feng（冯鹏辉）',
    role: 'Masters Student',
    avatarUrl: labImage('fph.jpg'),
    researchInterests: ['Task Scheduling', 'Computing Power Networks'],
    bio: 'Develops edge collaborative scheduling with feedback-diffusion models, balancing efficiency, latency, and robustness in heterogeneous environments.',
  },
  {
    id: 11,
    name: 'Hao Ma（马浩）',
    role: 'Masters Student',
    avatarUrl: labImage('mh.jpg'),
    researchInterests: ['Task Offloading', 'Task Recommendation', 'Computing Power Networks'],
    bio: 'Researches task offloading and recommendation in computing power networks to improve allocation efficiency under operational constraints.',
  },
  {
    id: 12,
    name: 'RuoShen Jia（贾若森）',
    role: 'Masters Student',
    avatarUrl: labImage('jrs.jpg'),
    researchInterests: ['Recommendation system', 'Task Recommendation', 'Computing Power Networks'],
    bio: 'Optimizes machine-learning recommendation algorithms for service and task recommendation, aiming for stronger accuracy and user experience under sparse data.',
  },
];

export const undergraduateResearchers: TeamMember[] = [
  {
    id: 15,
    name: 'WenBin Zhao（赵文斌）',
    role: 'College Student',
    avatarUrl: labImage('zwb.jpg'),
    researchInterests: ['Edge-Cloud Computing', 'Task Scheduling', 'Reinforcement Learning'],
    bio: 'Works on resource optimization and task scheduling in cloud–edge systems using reinforcement learning and heuristics to balance compute, latency, and service quality.',
  },
  {
    id: 16,
    name: 'FuCheng Zhang（张甫丞）',
    role: 'College Student',
    avatarUrl: labImage('zfc.jpg'),
    researchInterests: ['Cross-Domain Scheduling', 'Resource Optimization', 'Computing Force Network'],
    bio: 'Studies computing-force network architecture and cross-domain scheduling for coordinated allocation across heterogeneous domains.',
  },
  {
    id: 17,
    name: 'Yue Liu（刘岳）',
    role: 'College Student',
    avatarUrl: labImage('ly.jpg'),
    researchInterests: ['Computing Force Network', 'Clustering Algorithms', 'Distributed Machine Learning'],
    bio: 'Improves clustering algorithms in computing-force networks for scalability and robustness on complex, distributed data.',
  },
  {
    id: 18,
    name: 'YuDa Cheng（程宇达）',
    role: 'College Student',
    avatarUrl: labImage('cyd.jpg'),
    researchInterests: ['Computing Force Network', 'Clustering Algorithms', 'Unsupervised Learning'],
    bio: 'Focuses on clustering and unsupervised learning in computing-force networks with emphasis on algorithm optimization and data-analysis applications.',
  },
  {
    id: 19,
    name: 'JingHe Tian（田敬赫）',
    role: 'College Student',
    avatarUrl: labImage('tjh.jpg'),
    researchInterests: ['Cold Start Problem', 'Service Recommendation', 'Computing Power Networks'],
    bio: 'Develops cold-start recommendation with multimodal and contextual features, plus lightweight models for high-concurrency deployment.',
  },
  {
    id: 20,
    name: 'WenBo Xue（薛文博）',
    role: 'College Student',
    avatarUrl: labImage('xwb.jpg'),
    researchInterests: ['Service Recommendation', 'Computing Power Networks'],
    bio: 'Combines user-behavior analysis with data-driven methods to build scalable service recommendation systems.',
  },
  {
    id: 21,
    name: 'ShouTing Fan（樊首廷）',
    role: 'College Student',
    avatarUrl: labImage('pst.jpg'),
    researchInterests: ['Service Recommendation', 'Computing Power Networks'],
    bio: 'Architects AI-driven recommendation platforms that integrate service design with deployable learning pipelines.',
  },
  {
    id: 22,
    name: 'PengFei liu（刘鹏飞）',
    role: 'College Student',
    avatarUrl: labImage('lpf.jpg'),
    researchInterests: ['Service Recommendation', 'Computing Power Networks'],
    bio: 'Applies big-data processing and recommendation algorithms to improve quality and efficiency in service computing systems.',
  },
  {
    id: 23,
    name: 'Shuo liu（刘硕）',
    role: 'College Student',
    avatarUrl: labImage('ls.jpg'),
    researchInterests: ['Computing Power Networks'],
    bio: 'Works on software performance optimization and computational efficiency for data-intensive workloads.',
  },
];

export const alumni: AlumniMember[] = [
  {
    id: 1,
    name: 'CongRong Wu（吴从荣）',
    role: 'Former Master student (Graduated 2026)',
    currentPosition: 'Technology Position @ Bank of China Shandong Branch',
    avatarUrl: labImage('wcr.jpg'),
    researchFocus: 'Task Scheduling for Computing Power Networks',
  },
];

export const undergraduateAlumni: AlumniMember[] = [
  {
    id: 13,
    name: 'Le Yang（杨乐）',
    role: 'Former Undergraduate student (Graduated 2026)',
    currentPosition:
      'Study for a Doctorate @ The Elite Program of Inner Mongolia University（内蒙古大学）',
    avatarUrl: labImage('yln.jpg'),
    researchFocus: 'Clustering',
  },
  {
    id: 14,
    name: 'YueQi Wang（王玥祁）',
    role: 'Former Undergraduate student (Graduated 2026)',
    currentPosition: 'Study for a Master’s Degree @ Northeastern University （东北大学）',
    avatarUrl: labImage('wyq.jpg'),
    researchFocus: 'Clustering',
  },
  {
    id: 24,
    name: 'YiXuan Dai（戴轶轩）',
    role: 'Former Undergraduate student (Graduated 2026)',
    currentPosition:
      'Study for a Master’s Degree @ University of Science and Technology of China（中国科学技术大学）',
    avatarUrl: labImage('dyx.jpg'),
    researchFocus: 'Clustering',
  },
];
