import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import { Mail, Linkedin, Globe, BookUser } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Team',
  description: 'Meet the talented research team members working with Dr. RuiDong Qi（祁瑞东）.', // Replace
};

// Mock Data - Replace with actual data
const teamMembers = [
  {
    id: 1,
    name: "CongRonG Wu（吴从荣）",
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/wcr.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Time Series Prediction", "Reinforcement Learning", "Task Scheduling","Computing Power Networks"],
    bio: "Current research is shifting from cloud computing towards the establishment of a new computing-power network paradigm, focusing on enhancing the intelligent scheduling capability of the Computing Network Brain to improve the utilization efficiency of global computing resources.",
    email: "david.green@university.edu", // Replace
  },
  {
    id: 2,
    name: "Zhibo Zhang（张志博）",
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/zzb.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Multi-Objective Optimization", "Task Scheduling", "Computing Power Networks"],
    bio: "Develops multi-objective models and adaptive scheduling algorithms for distributed heterogeneous computing. Leverages heuristic and ML methods to minimize execution delay and energy consumption, enabling low-carbon computing infrastructure.",
    email: "david.green@university.edu", // Replace
  },
  {
    id: 3,
    name: "Lei Yuan（袁磊）",
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/yl.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Task scheduling", "Generative Models", "Computing Power Networks"],
    bio: "Develops intelligent scheduling for heterogeneous computing using ML/RL to optimize task allocation, throughput, and latency under real-time and QoS constraints. Enhances resource efficiency for generative workloads and low-carbon infrastructure.",
    email: "david.green@university.edu", // Replace
  },
  {
    id: 4,
    name: "XueMei Deng（邓雪梅）",
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/dxm.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Cloud-Edge-Device Collaborative Inference", "Computing Power Networks"],
    bio: "Designs intelligent adaptive scheduling policies for distributed heterogeneous computing. Leverages reinforcement learning and generative algorithms to dynamically optimize task allocation, balancing low latency and energy efficiency for sustainable computing infrastructure.",
    email: "david.green@university.edu", // Replace
  },
  {
    id: 5,
    name: "Ao Sun（孙奥）",
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/sa.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Cold Start Problem","Service Recommendation", "Computing Power Networks"],
    bio: "My research goal is to optimize the cold-start of cloud service recommendation through meta-learning, graph neural networks and various technologies under data scarcity, so as to improve the recommendation performance for new services/users.",
    email: "david.green@university.edu", // Replace
  },
  {
    id: 6,
    name: "Ao Sun（吴明杰）",
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/wmj.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Recommendation system","LLM", "Service recommendation","Computing Power Networks"],
    bio: "Wu Mingjie is currently researching the content related to service recommendation, especially how to use large language models to enhance the performance of service recommendation.",
    email: "david.green@university.edu", // Replace
  },
  {
    id: 7,
    name: "YunShen Zhao（赵昀森）",
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/zys.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Multimodal Fusion","Power Forecasting"],
    bio: "Develops spatiotemporal forecasting frameworks for green power by fusing multi-source data (NWP, satellite, ground observations) with deep learning to enhance grid stability and renewable energy integration.",
    email: "david.green@university.edu", // Replace
  },
  {
    id: 8,
    name: "LanLan Yang（杨兰兰）",
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/yll.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Green power Scheduling","Data Analysis", "Computing Power Networks"],
    bio: "Online Job Scheduling for Low-Carbon Data Center Operation，Low-Carbon Operation of Resources Based on Deep Reinforcement Learning",
    email: "david.green@university.edu", // Replace
  },
  {
    id: 9,
    name: "LiJun Dong（董利军）",
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/dlj.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Task Scheduling","Computing Power Networks"],
    bio: "Focus on using task scheduling methods to improve the utilization of resources and green power in data centers. A reader immersed in a fantasy world and a amateur writers who do not write most of the time.",
    email: "david.green@university.edu", // Replace
  },
  {
    id: 10,
    name: "PengHui Feng（冯鹏辉）", 
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/fph.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Task Scheduling","Computing Power Networks"],
    bio: "Addressing the challenges of edge collaborative algorithms through a feedback-diffusion model scheduling method. Spending time in the virtual world to relax both mentally and physically.",
    email: "david.green@university.edu", // Replace
  },
  {
    id: 11,
    name: "PengHui Feng（马浩）", 
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/mh.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Task Offloading","Task Recommendation","Computing Power Networks"],
    bio: "My research focuses on task offloading and recommendation in computing power networks, aiming to optimize resource allocation and enhance service efficiency. Reading for cozy stories, gaming for epic wins! Swap books for controllers after dark—my perfect kind of fun.",
    email: "david.green@university.edu", // Replace
  },
  {
    id: 12,
    name: "RuoShen Jia（贾若森）", 
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/jrs.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Recommendation system","Task Recommendation","Computing Power Networks"],
    bio: "My research optimizes machine learning recommendation algorithms to boost performance and user experience, advancing intelligent recommendation. Focused on machine learning recommendation algorithms to uncover user needs and offer personalized recommendations. ",
    email: "david.green@university.edu", // Replace
  },
];

const alumni = [
 {
    id: 13,
    name: "Dr. Samuel Cho",
    role: "Former Postdoc (2020-2022)",
    currentPosition: "Research Scientist @ BigTech AI",
    avatarUrl: "https://picsum.photos/seed/samuelcho/120/120", // Increased size
    dataAiHint: "professional headshot",
    researchFocus: "Deep Learning for NLP",
    website: "#" // Replace
  },
  {
    id: 14,
    name: "Eva Rodriguez, PhD",
    role: "Former PhD Student (Graduated 2021)",
    currentPosition: "Assistant Professor @ State University",
    avatarUrl: "https://picsum.photos/seed/evarodriguez/120/120", // Increased size
    dataAiHint: "academic headshot",
    researchFocus: "Computational Semantics",
    website: "#" // Replace
  }
];


export default function TeamPage() {
  return (
    <div className="space-y-12">
      <section id="current-team" aria-labelledby="current-team-title">
        <SectionTitle id="current-team-title">Current Team Members</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map(member => (
            <Card key={member.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row overflow-hidden border-primary/10">
              <div className="sm:shrink-0 sm:w-1/3 bg-secondary/30 flex items-center justify-center p-4">
                <Image
                  src={member.avatarUrl}
                  alt={`Photo of ${member.name}`}
                  width={300} // Increased width
                  height={300} // Increased height
                  className="rounded-full border-[6px] border-background shadow-md object-cover aspect-square"
                  data-ai-hint={member.dataAiHint}
                />
              </div>
              <CardContent className="p-6 flex-grow sm:w-2/3">
                <h3 className="text-xl md:text-2xl font-semibold text-primary">{member.name}</h3>
                <p className="text-md text-accent font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Interests: {member.researchInterests.join(', ')}
                </p>
                <p className="text-sm text-foreground/80 mt-3 mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-2 items-center">
                  <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-accent p-1 h-auto">
                    <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
                      <Mail size={18} className="mr-1" /> Email
                    </a>
                  </Button>
                  {member.linkedin && (
                    <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-accent p-1 h-auto">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profile of ${member.name}`}>
                        <Linkedin size={18} className="mr-1" /> LinkedIn
                      </a>
                    </Button>
                  )}
                  {member.website && (
                    <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-accent p-1 h-auto">
                      <a href={member.website} target="_blank" rel="noopener noreferrer" aria-label={`Website of ${member.name}`}>
                        <Globe size={18} className="mr-1" /> Website
                      </a>
                    </Button>
                  )}
                   {member.googleScholar && (
                    <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-accent p-1 h-auto">
                      <a href={member.googleScholar} target="_blank" rel="noopener noreferrer" aria-label={`Google Scholar of ${member.name}`}>
                        <BookUser size={18} className="mr-1" /> Scholar
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
	  
      <section id="alumni" aria-labelledby="alumni-title">
        <SectionTitle id="alumni-title">Lab Alumni</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map(member => (
             <Card key={member.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/10">
               <CardContent className="pt-6 flex flex-col items-center text-center">
                <Image
                    src={member.avatarUrl}
                    alt={`Photo of ${member.name}`}
                    width={120} // Increased width
                    height={120} // Increased height
                    className="rounded-full border-2 border-background shadow-sm object-cover aspect-square mb-3"
                    data-ai-hint={member.dataAiHint}
                  />
                  <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
                  <p className="text-sm text-accent/90 font-medium">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Focus: {member.researchFocus}</p>
                  <p className="text-sm text-foreground/80 mt-2">Now: {member.currentPosition}</p>
                   {member.website && (
                    <Button variant="link" size="sm" asChild className="mt-2 text-accent px-0 h-auto">
                      <a href={member.website} target="_blank" rel="noopener noreferrer" aria-label={`Website of ${member.name}`}>
                        <Globe size={14} className="mr-1" /> Profile
                      </a>
                    </Button>
                  )}
               </CardContent>
             </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

