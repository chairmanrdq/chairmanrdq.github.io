
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Building, DollarSign, CalendarDays, Target } from 'lucide-react';
import type { Metadata } from 'next';
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Funded research portfolio led by Dr. RuiDong Qi, including principal-investigator projects and industry-linked collaborations.',
};

// Mock Data - Replace with actual data
const projectsData = [
  {
    id: "proj1",
    title: "User-Perceived Computing Power Scheduling Based on the Inner Mongolia Computing Hub Node",
    role: "Principal Investigator",
    fundingAgency: "Industry/Enterprise Collaboration Projects - China Mobile Communications Group Inner Mongolia Co., Ltd",
    period: "2024 - 2026",
    amount: "$500,000",
    description: "This research focuses on the Inner Mongolia computing hub node, aiming to design efficient and intelligent computing power scheduling methods driven by user perception and dynamic resource matching. Key topics include perception and modeling of heterogeneous resources, user experience–oriented scheduling mechanisms, cross-domain resource coordination and optimization, and green, low-carbon scheduling strategies.",
    collaborators: ["China Mobile Communications Group Inner Mongolia Co., Ltd"],
    status: "Ongoing",
    keywords: ["Computing Power Scheduling", "User Perception", "Cross-domain Coordination", "Green and Low-carbon Computing"]
  },
  /*{
    id: "proj2",
    title: "A Comprehensive Ethical AI Framework for Language Technologies",
    role: "Co-Principal Investigator",
    fundingAgency: "Ethics in AI National Consortium (EANC)",
    period: "2021 - 2023",
    amount: "$250,000",
    description: "Focused on creating and validating a comprehensive framework for evaluating and ensuring ethical considerations (fairness, accountability, transparency) in the development and deployment of AI-driven language technologies across various sectors.",
    collaborators: ["University of Ethics - AI Center", "AI Now Global Institute"],
    status: "Completed",
    keywords: ["AI Ethics", "Responsible AI", "Framework", "Language Technologies", "EANC"]
  },
  {
    id: "proj3",
    title: "Semantic Search and Discovery for Large-Scale Digital Humanities Archives",
    role: "Principal Investigator",
    fundingAgency: "National Endowment for the Humanities (NEH) - Digital Advancement Grant",
    period: "2020 - 2022",
    amount: "$150,000",
    description: "Developed an innovative semantic search engine to enhance accessibility and discovery within extensive digital humanities archives. Leveraged knowledge graphs, NLP, and user-centered design principles to support scholarly research.",
    collaborators: ["The Grand National Library - Digital Collections", "Digital Archive Heritage Initiative"],
    status: "Completed",
    keywords: ["Semantic Search", "Digital Humanities", "Knowledge Graphs", "NLP", "NEH"]
  },*/
];

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <SectionTitle>Projects</SectionTitle>
      <Card className="luxury-card">
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold text-primary mb-2">Research-to-Impact</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80">
            <li>
              <span className="text-primary font-medium">Computing power scheduling</span> for regional hub nodes, driven by{' '}
              <span className="text-primary font-medium">user-perceived QoS</span> and dynamic matching across heterogeneous resources.
            </li>
            <li>
              <span className="text-primary font-medium">Cross-domain coordination</span> for end-to-end allocation and optimization under realistic
              operational constraints.
            </li>
            <li>
              <span className="text-primary font-medium">Green, low-carbon</span> scheduling objectives validated through industry collaboration,
              moving beyond lab-only assumptions.
            </li>
          </ul>
        </CardContent>
      </Card>
      <div className="space-y-8">
        {projectsData.sort((a,b) => (b.status === "Ongoing" ? 1 : -1) || (parseInt(b.period.split(" - ")[0]) - parseInt(a.period.split(" - ")[0])) ).map(project => (
          <Card key={project.id} className="luxury-card shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/10">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
                <CardTitle className="text-xl md:text-2xl text-primary/90">{project.title}</CardTitle>
                <Badge 
                  variant={project.status === "Ongoing" ? "default" : "outline"} 
                  className={cn("w-fit mt-1 sm:mt-0", project.status === "Ongoing" ? "bg-green-600/10 border-green-600 text-green-700 dark:bg-green-500/20 dark:text-green-400 dark:border-green-500" : "border-gray-400 text-gray-500 dark:border-gray-600 dark:text-gray-400")}
                >
                  <Target className="h-3 w-3 mr-1.5"/>{project.status}
                </Badge>
              </div>
              <CardDescription className="text-md font-medium text-accent pt-1">{project.role}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">{project.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-sm text-foreground/80 pt-3 border-t border-border/50">
                <div className="flex items-start">
                  <DollarSign className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <strong className="text-foreground/90">Funding Agency:</strong> {project.fundingAgency}
                  </div>
                </div>
                <div className="flex items-start">
                  <strong className="text-foreground/90 mr-1">Amount:</strong> {project.amount}
                </div>
                <div className="flex items-start">
                  <CalendarDays className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <strong className="text-foreground/90">Period:</strong> {project.period}
                  </div>
                </div>
                
                {project.collaborators && project.collaborators.length > 0 && (
                  <div className="flex items-start md:col-span-2">
                    <Users className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground flex-shrink-0" />
                    <div>
                      <strong className="text-foreground/90">Key Collaborators:</strong> {project.collaborators.join('; ')}
                    </div>
                  </div>
                )}
              </div>
               {project.keywords && project.keywords.length > 0 && (
                <div className="mt-3 pt-3 border-t border-border/50">
                  <h4 className="text-xs font-semibold text-muted-foreground mb-1">Keywords:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.keywords.map(kw => (
                      <Badge key={kw} variant="secondary" className="font-normal bg-secondary hover:bg-secondary/80 text-xs">{kw}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
