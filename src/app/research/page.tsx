import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Detailed research interests and focus areas of Dr. RuiDong Qi（祁瑞东）.', // Replace
};

// Mock Data - Replace with actual data
const researchData = {
  introduction: "Our research focuses on cloud computing, big data, service computing, and system development. In cloud computing, we emphasize cloud–edge collaboration, cross-cloud resource scheduling, and task scheduling methods. In big data, we conduct predictive analytics and user behavior analysis within cloud environments, as well as ecosystem service assessment and forecasting. In service computing, we explore advanced recommendation approaches, including retrieval-augmented cold-start, large-model-based, multimodal, and elastic recommendation methods. We also develop system platforms that integrate cloud computing and big data applications, along with intelligent service recommendation systems.", // Replace
  detailedFocus: [
    {
      title: "Cloud Computing",
      description: "Focus on cloud–edge collaboration, cross-cloud resource scheduling, and task scheduling methods to improve resource utilization and system performance.",
      keywords: ["Cloud–edge Collaboration", "Cross-cloud Resource Scheduling", "Task Scheduling"]
    },
    {
      title: "Big Data",
      description: "Specialize in predictive analytics and user behavior analysis in cloud environments, as well as ecosystem service assessment and forecasting.",
      keywords: ["Predictive analytics", "User behavior analysis", "Ecosystem service forecasting"]
    },
    {
      title: "Service Computing",
      description: "Investigate advanced recommendation methods, including retrieval-augmented cold-start recommendation, large-model-based recommendation, multimodal recommendation, and elastic recommendation.",
      keywords: ["Cold-start recommendation", "Large-model-based Recommendation", "Multimodal Recommendation"]
    },
    {
      title: "System Development",
      description: "Develop system platforms for cloud computing and big data applications, as well as intelligent and efficient service recommendation systems.",
      keywords: ["Cloud Computing Applications", "Big Data Platforms", "Intelligent Service Recommendation Systems"]
    },
  ],
};

export default function ResearchPage() {
  return (
    <div className="space-y-12">
      <section id="research-overview" aria-labelledby="research-overview-title">
        <SectionTitle id="research-overview-title">Research Overview</SectionTitle>
        <Card className="shadow-md border-primary/10">
          <CardContent className="pt-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              {researchData.introduction}
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="research-areas" aria-labelledby="research-areas-title">
        <SectionTitle id="research-areas-title">Key Research Areas</SectionTitle>
        <div className="space-y-8">
          {researchData.detailedFocus.map((area, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-primary/90">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4 leading-relaxed">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.keywords.map(keyword => (
                    <Badge key={keyword} variant="secondary" className="font-normal bg-secondary hover:bg-secondary/80">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
