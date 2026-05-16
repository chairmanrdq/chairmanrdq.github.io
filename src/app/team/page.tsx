import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import { Linkedin, Globe, BookUser } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import { recruitmentChecklist, recruitmentEmail, recruitmentIntro } from '@/lib/recruitment';
import { researchOverview, researchThemes } from '@/lib/research-content';
import { isValidHttpUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Team',
  description: 'Research group profile, team structure, and mentorship information for students working with Dr. RuiDong Qi.',
};

// Mock Data - Replace with actual data
const teamMembers = [
  {
    id: 2,
    name: "ZhiBo Zhang（张志博）",
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/zzb.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Multi-Objective Optimization", "Task Scheduling", "Computing Power Networks"],
    bio: "Develops multi-objective models and adaptive scheduling algorithms for distributed heterogeneous computing. Leverages heuristic and ML methods to minimize execution delay and energy consumption, enabling low-carbon computing infrastructure.",
  },
  {
    id: 3,
    name: "Lei Yuan（袁磊）",
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/yl.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Task scheduling", "Generative Models", "Computing Power Networks"],
    bio: "Develops intelligent scheduling for heterogeneous computing using ML/RL to optimize task allocation, throughput, and latency under real-time and QoS constraints. Enhances resource efficiency for generative workloads and low-carbon infrastructure.",
  },
  {
    id: 4,
    name: "XueMei Deng（邓雪梅）",
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/dxm.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Cloud-Edge-Device Collaborative Inference", "Computing Power Networks"],
    bio: "Designs intelligent adaptive scheduling policies for distributed heterogeneous computing. Leverages reinforcement learning and generative algorithms to dynamically optimize task allocation, balancing low latency and energy efficiency for sustainable computing infrastructure.",
  },
  {
    id: 5,
    name: "Ao Sun（孙奥）",
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/sa.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Cold Start Problem","Service Recommendation", "Computing Power Networks"],
    bio: "My research goal is to optimize the cold-start of cloud service recommendation through meta-learning, graph neural networks and various technologies under data scarcity, so as to improve the recommendation performance for new services/users.",
  },
  {
    id: 6,
    name: "MingJie Wu（吴明杰）",
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/wmj.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Recommendation system","LLM", "Service recommendation","Computing Power Networks"],
    bio: "Wu Mingjie is currently researching the content related to service recommendation, especially how to use large language models to enhance the performance of service recommendation.",
  },
  {
    id: 7,
    name: "YunShen Zhao（赵昀森）",
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/zys.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Multimodal Fusion","Power Forecasting"],
    bio: "Develops spatiotemporal forecasting frameworks for green power by fusing multi-source data (NWP, satellite, ground observations) with deep learning to enhance grid stability and renewable energy integration.",
  },
  {
    id: 8,
    name: "LanLan Yang（杨兰兰）",
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/yll.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Green power Scheduling","Data Analysis", "Computing Power Networks"],
    bio: "Online Job Scheduling for Low-Carbon Data Center Operation，Low-Carbon Operation of Resources Based on Deep Reinforcement Learning",
  },
  {
    id: 9,
    name: "LiJun Dong（董利军）",
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/dlj.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Task Scheduling","Computing Power Networks"],
    bio: "Focuses on task scheduling methods to improve resource utilization and low-carbon power usage in data centers. Interested in system evaluation, reproducible experiments, and technical reading.",
  },
  {
    id: 10,
    name: "PengHui Feng（冯鹏辉）", 
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/fph.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Task Scheduling","Computing Power Networks"],
    bio: "Addresses challenges in edge collaborative algorithms using feedback-diffusion model scheduling, aiming to balance efficiency, latency, and robustness in heterogeneous environments.",
  },
  {
    id: 11,
    name: "Hao Ma（马浩）", 
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/mh.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Task Offloading","Task Recommendation","Computing Power Networks"],
    bio: "Researches task offloading and recommendation in computing power networks, optimizing resource allocation and improving service efficiency under practical constraints.",
  },
  {
    id: 12,
    name: "RuoShen Jia（贾若森）", 
    role: "Masters Student",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/jrs.jpg", // Increased size
    dataAiHint: "student headshot",
    researchInterests: ["Recommendation system","Task Recommendation","Computing Power Networks"],
    bio: "My research optimizes machine learning recommendation algorithms to boost performance and user experience, advancing intelligent recommendation. Focused on machine learning recommendation algorithms to uncover user needs and offer personalized recommendations. ",
  },
];

const collegeMembers = [
	{ 
	  id: 15,
	  name: "WenBin Zhao（赵文斌）",  
      role: "College Student",
      avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/zwb.jpg", // Increased size
      dataAiHint: "student headshot",
      researchInterests: ["Edge-Cloud Computing","Tasking Scheduling", " Reinforcement Learning"],
      bio: "Research focuses on resource optimization and task scheduling in cloud-edge computing systems. Develops dynamic scheduling models using reinforcement learning and heuristic algorithms to balance computing power and latency, addressing challenges such as task blocking, high energy consumption, and unstable service quality in multi-device environments.",
	},
	{ 
	  id: 16,
	  name: "FuCheng Zhang（张甫丞）",  
      role: "College Student",
      avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/zfc.jpg", // Increased size
      dataAiHint: "student headshot",
      researchInterests: ["Cross-Domain Scheduling","Resource Optimization", "Computing Force Network"], 
      bio: "Research focuses on computing force network architecture and cross-domain resource scheduling. Develops intelligent scheduling mechanisms to enable efficient and coordinated allocation of distributed computing resources across heterogeneous domains, optimizing overall network utilization and service performance.",
	},
	{ 
	  id: 17,
	  name: "Yue Liu（刘岳）",  
      role: "College Student",
      avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/ly.jpg", // Increased size
      dataAiHint: "student headshot",
      researchInterests: ["Computing Force Network","Clustering Algorithms", "Distributed Machine Learning"],
      bio: "Research focuses on optimizing and innovating clustering algorithms in computing force networks to enhance their performance, efficiency, and robustness on complex data. Explores the integration of machine learning, data analysis, and cloud computing technologies to develop scalable and adaptive clustering solutions for distributed and data-intensive environments.",
	},
	{ 
	  id: 18,
	  name: "YuDa Cheng（程宇达）",  
      role: "College Student",
      avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/cyd.jpg", // Increased size
      dataAiHint: "student headshot",
      researchInterests: ["Computing Force Network","Clustering Algorithms", "Unsupervised Learning"],  
      bio: "Research focuses on clustering algorithms and unsupervised learning in computing force networks, with an emphasis on algorithm optimization and practical applications in data analysis. Explores innovative approaches to enhance the performance and adaptability of clustering methods in complex, real-world data scenarios.",
	},
	{ 
	  id: 19,
	  name: "JingHe Tian（田敬赫）", 
      role: "College Student",
      avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/tjh.jpg", // Increased size
      dataAiHint: "student headshot",
      researchInterests: ["Cold Start Problem","Service Recommendation", "Computing Power Networks"],
      bio: "Research focuses on cold-start recommendation systems, integrating multimodal features (text/image) and contextual information to reduce dependency on traditional interaction data. Develops personalized strategies for long-tail items and new users, while optimizing lightweight model architectures for efficient deployment in high-concurrency scenarios.",
	},
	{ 
	  id: 20,
	  name: "WenBo Xue（薛文博）", 
      role: "College Student",
      avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/xwb.jpg", // Increased size
      dataAiHint: "student headshot",
      researchInterests: ["Service Recommendation","Computing Power Networks"],
      bio: "Specializes in user demand analysis and intelligent recommendation. Utilizes qualitative/quantitative research and data-driven strategies to deeply understand user behavior, building accurate and scalable recommendation systems that enhance product experience and business outcomes. ",
	},
	{ 
	  id: 21,
	  name: "ShouTing Fan（樊首廷）",  
      role: "College Student",
      avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/pst.jpg", // Increased size
      dataAiHint: "student headshot",
      researchInterests: ["Service Recommendation","Computing Power Networks"],
      bio: "Specializes in architecting and implementing AI-driven recommendation platforms. Combines expertise in service design and artificial intelligence to build scalable systems that deliver precise, personalized recommendations and create tangible business value.",
	},
	{ 
	  id: 22,
	  name: "PengFei liu（刘鹏飞）",  
      role: "College Student",
      avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/lpf.jpg", // Increased size
      dataAiHint: "student headshot",
      researchInterests: ["Service Recommendation","Computing Power Networks"],
      bio: "Research focuses on big data technologies and their applications in service recommendation systems. Developing innovative recommendation algorithms and data processing frameworks to improve recommendation quality and system performance.",
	},
	{ 
	  id: 23,
	  name: "Shuo liu（刘硕）",  
      role: "College Student",
      avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/ls.jpg", // Increased size
      dataAiHint: "student headshot",
      researchInterests: ["Computing Power Networks"],
      bio: "Research focuses on software performance optimization and computational efficiency. Designing innovative approaches to accelerate code execution, reduce computational overhead, and enhance overall system performance through advanced optimization techniques.",
	},
];

const alumni = [
 {
    id: 1,
    name: "CongRong Wu（吴从荣）",
    role: "Former Master student (Graduated 2026)",
	currentPosition: "Technology Position @ Bank of China Shandong Branch",
    avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/wcr.jpg", // Increased size
    dataAiHint: "student headshot",
	researchFocus: "Task Scheduling for Computing Power Networks",
    //researchInterests: ["Time Series Prediction", "Reinforcement Learning", "Task Scheduling","Computing Power Networks"],
    //bio: "Current research is shifting from cloud computing towards the establishment of a new computing-power network paradigm, focusing on enhancing the intelligent scheduling capability of the Computing Network Brain to improve the utilization efficiency of global computing resources.",
    //  }
 /*{
    id: 24,
    name: "Dr. Samuel Cho",
    role: "Former Postdoc (2020-2022)",
    currentPosition: "Research Scientist @ BigTech AI",
    avatarUrl: "https://picsum.photos/seed/samuelcho/120/120", // Increased size
    dataAiHint: "professional headshot",
    researchFocus: "Deep Learning for NLP",
  },
  {
    id: 25,
    name: "Eva Rodriguez, PhD",
    role: "Former PhD Student (Graduated 2021)",
    currentPosition: "Assistant Professor @ State University",
    avatarUrl: "https://picsum.photos/seed/evarodriguez/120/120", // Increased size
    dataAiHint: "academic headshot",
    researchFocus: "Computational Semantics",
  }*/
];

const alumni_collegeMembers = [
	{ 
	  id: 13,
	  name: "Le Yang（杨乐）",   
      //role: "College Student",
	  role: "Former Undergraduate student (Graduated 2026)",
	  currentPosition: "Study for a Doctorate @ The Elite Program of Inner Mongolia University（内蒙古大学）",
      avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/yln.jpg", // Increased size
      dataAiHint: "student headshot",
	  researchFocus: "Clustering",
      //researchInterests: ["Clustering","Multimodal Sentiment Analysis,", "Big Data Processing"],
      //bio: "Computer Science undergraduate with strong academic record and research experience. First-author paper at CCF-C conference on clustering algorithms; led provincial project on multimodal depression prediction. Awarded multiple national and provincial competition awards and scholarships. Demonstrated leadership as Vice Secretary of the College Youth League Committee. Proficient in English technical reading.",
      //email: "david.green@university.edu" // Replace
	},
 	{ 
	  id: 14,
	  name: "YueQi Wang（王玥祁）",   
      //role: "College Student",
	  role: "Former Undergraduate student (Graduated 2026)",
	  currentPosition: "Study for a Master’s Degree @ Northeastern University （东北大学）",
      avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/wyq.jpg", // Increased size
      dataAiHint: "student headshot",
	  researchFocus: "Clustering",
      //researchInterests: ["Artificial Intelligence","Data Intelligence,", "Interpretable Machine Learning"],
      //bio: "Focuses on AI and data intelligence applications, specializing in optimized clustering algorithms, deep learning for medical data processing, and intelligent analytics in education. Committed to enhancing interpretability and cross-domain applications of intelligent algorithms, aiming to drive theoretical innovation and practical impact in healthcare, education, and smart society.",
      //	},
 	{ 
	  id: 14,
	  name: "YiXuan Dai（戴轶轩）",   
      //role: "College Student",
	  role: "Former Undergraduate student (Graduated 2026)",
	  currentPosition: "Study for a Master’s Degree @ University of Science and Technology of China（中国科学技术大学）",
      avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/dyx.jpg", // Increased size
      dataAiHint: "student headshot",
	  researchFocus: "Clustering",
      //researchInterests: ["Artificial Intelligence","Data Intelligence,", "Interpretable Machine Learning"],
      //bio: "Focuses on AI and data intelligence applications, specializing in optimized clustering algorithms, deep learning for medical data processing, and intelligent analytics in education. Committed to enhancing interpretability and cross-domain applications of intelligent algorithms, aiming to drive theoretical innovation and practical impact in healthcare, education, and smart society.",
      //	}	
 /*{
    id: 24,
    name: "Dr. Samuel Cho",
    role: "Former Postdoc (2020-2022)",
    currentPosition: "Research Scientist @ BigTech AI",
    avatarUrl: "https://picsum.photos/seed/samuelcho/120/120", // Increased size
    dataAiHint: "professional headshot",
    researchFocus: "Deep Learning for NLP",
  },
  {
    id: 25,
    name: "Eva Rodriguez, PhD",
    role: "Former PhD Student (Graduated 2021)",
    currentPosition: "Assistant Professor @ State University",
    avatarUrl: "https://picsum.photos/seed/evarodriguez/120/120", // Increased size
    dataAiHint: "academic headshot",
    researchFocus: "Computational Semantics",
  }*/
];


export default function TeamPage() {
  return (
    <div className="space-y-12">
      <section
        id="lab-overview"
        aria-labelledby="lab-overview-title"
        className="page-section-reveal"
        style={{ animationDelay: "0ms" }}
      >
        <SectionTitle id="lab-overview-title">Lab Overview</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="shadow-md border-primary/10 lg:col-span-2">
            <CardContent className="p-6">
              <h3 className="type-subheading-lg mb-3">Research Directions</h3>
              <p className="type-body text-sm md:text-base mb-5">{researchOverview}</p>
              <div className="space-y-3">
                {researchThemes.map((theme, index) => (
                  <div className="flex items-start gap-3" key={theme.title}>
                    <span className="text-primary font-semibold">{index + 1}.</span>
                    <p className="text-sm text-foreground/80">
                      <span className="font-medium text-primary/90">{theme.title}:</span> {theme.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md border-primary/10">
            <CardContent className="p-6">
              <h3 className="type-subheading-lg mb-3">Prospective Students</h3>
              <p className="type-body text-sm mb-4">{recruitmentIntro}</p>
              <ul className="space-y-2 text-sm list-none">
                {recruitmentChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-muted-foreground">•</span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground">•</span>
                  <span className="text-foreground/80">
                    Contact:{' '}
                    <a className="text-accent hover:underline" href={`mailto:${recruitmentEmail}`}>
                      {recruitmentEmail}
                    </a>
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section
        id="current-team"
        aria-labelledby="current-team-title"
        className="page-section-reveal"
        style={{ animationDelay: "80ms" }}
      >
        <SectionTitle id="current-team-title">Current Team Members</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map(member => (
            <Card key={member.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row overflow-hidden border-primary/10">
              <div className="sm:shrink-0 sm:w-1/3 bg-secondary/30 flex items-center justify-center p-4">
                <Image
                  src={member.avatarUrl}
                  alt={`Photo of ${member.name}`}
                  width={220} // Increased width
                  height={220} // Increased height
                  className="rounded-full border-[6px] border-background shadow-md object-cover aspect-square"
                  data-ai-hint={member.dataAiHint}
                />
              </div>
              <CardContent className="p-6 flex-grow sm:w-2/3">
                <h3 className="type-subheading-lg">{member.name}</h3>
                <p className="text-md text-accent font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Interests: {member.researchInterests.join(', ')}
                </p>
                <p className="text-sm text-foreground/80 mt-3 mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-2 items-center">
                  {member.linkedin && (
                    <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-accent p-1 h-auto">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profile of ${member.name}`}>
                        <Linkedin size={18} className="mr-1" /> LinkedIn
                      </a>
                    </Button>
                  )}
                  {isValidHttpUrl(member.website) && (
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
	  
      <section
        id="undergraduate-team"
        aria-labelledby="undergraduate-team-title"
        className="page-section-reveal"
        style={{ animationDelay: "160ms" }}
      >
        <SectionTitle id="undergraduate-team-title">Undergraduate Researchers</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collegeMembers.map(member => (
            <Card key={member.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row overflow-hidden border-primary/10">
              <div className="sm:shrink-0 sm:w-1/3 bg-secondary/30 flex items-center justify-center p-4">
                <Image
                  src={member.avatarUrl}
                  alt={`Photo of ${member.name}`}
                  width={220} // Increased width
                  height={220} // Increased height
                  className="rounded-full border-[6px] border-background shadow-md object-cover aspect-square"
                  data-ai-hint={member.dataAiHint}
                />
              </div>
              <CardContent className="p-6 flex-grow sm:w-2/3">
                <h3 className="type-subheading-lg">{member.name}</h3>
                <p className="text-md text-accent font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Interests: {member.researchInterests.join(', ')}
                </p>
                <p className="text-sm text-foreground/80 mt-3 mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-2 items-center">
                  {member.linkedin && (
                    <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-accent p-1 h-auto">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profile of ${member.name}`}>
                        <Linkedin size={18} className="mr-1" /> LinkedIn
                      </a>
                    </Button>
                  )}
                  {isValidHttpUrl(member.website) && (
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

      <section
        id="alumni"
        aria-labelledby="alumni-title"
        className="page-section-reveal"
        style={{ animationDelay: "240ms" }}
      >
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
                  <h3 className="type-subheading">{member.name}</h3>
                  <p className="text-sm text-accent/90 font-medium">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Focus: {member.researchFocus}</p>
                  <p className="text-sm text-foreground/80 mt-2">Now: {member.currentPosition}</p>
                   {isValidHttpUrl(member.website) && (
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
	                               
	  <section
        id="alumni_collegeMembers"
        aria-labelledby="alumni-college-title"
        className="page-section-reveal"
        style={{ animationDelay: "320ms" }}
      >
        <SectionTitle id="alumni-college-title">Undergraduate Alumni</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni_collegeMembers.map(member => (
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
                  <h3 className="type-subheading">{member.name}</h3>
                  <p className="text-sm text-accent/90 font-medium">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Focus: {member.researchFocus}</p>
                  <p className="text-sm text-foreground/80 mt-2">Now: {member.currentPosition}</p>
                   {isValidHttpUrl(member.website) && (
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

