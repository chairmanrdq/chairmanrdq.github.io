import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Link as LinkIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publications',
  description: 'A comprehensive list of publications by Dr. RuiDong Qi（祁瑞东）, including journal articles, conference papers, and books.', // Replace
};

// Mock Data - Replace with actual data
interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "Conference Paper" | "Journal Article" | "Book" | "Preprint" | "Book Chapter" | "Workshop Paper";
  doi?: string;
  pdfUrl?: string;
  arxivUrl?: string;
  bibtex?: string; // Optional BibTeX string
  abstract?: string; // Optional abstract
  keywords?: string[]; // Optional keywords
}

const publicationsData: Publication[] = [
  { 
    id: "p1", 
    title: "An Adaptive Density Peak Clustering Algorithm Based on N-ary Bézier Reverse Curve Optimization", 
    authors: "Le Yang, Rui-dong Qi & Jian-tao Zhou", 
    venue: "Proceedings of the 21nd Annual Meeting of International Conference on Intelligent Computing (ICIC 2025)", 
    year: 2025, 
    type: "Conference Paper", 
    doi: "10.1007/978-981-96-9884-4_25", 
    pdfUrl: "#", 
    arxivUrl: "#",
    abstract: "Clustering is a fundamental technique in unsupervised learning, grouping unlabeled data based on similarity metrics. Nevertheless, the Clustering by Fast Search and Find of Density Peaks (CFSFDP) algorithm requires manual selection of cluster centers, limiting its automation. To address this issue, this paper proposes an Adaptive Density Peak Clustering Algorithm optimized using an N-ary Bézier inverse curve to achieve automatic cluster center determination. By performing data point inversion, the method enhances the distinction between cluster centers and non-center points, simplifying their identification. Additionally, the algorithm integrates gamma processing and information entropy weighting significantly reducing computational complexity. The results demonstrate that the proposed algorithm outperforms other automatic clustering methods in terms of AMI, ARI, FMI, and the number of automatically selected cluster centers. Furthermore, the findings validate its effectiveness in clustering accuracy while enhancing the robustness of density peak-based clustering.",
    keywords: ["Reverse curve optimization", "Adaptive density clustering", "Automatic cluster center"],
  },
  { 
    id: "p2", 
    title: "Personalized Hierarchical Topology-Aware Federated Learning: An Approach for QoS Prediction", 
    authors: "CongRong Wu, Rui-dong Qi & Jian-tao Zhou", 
    venue: "IEEE International Symposium on Parallel and Distributed Processing with Applications (ISPA)", 
    year: 2025, 
    type: "Conference Paper", 
    doi: "10.1109/ISPA67752.2025.00193", 
    pdfUrl: "#",
    abstract: "With the rapid development of Web services, complex service-oriented platforms offer users a wide range of choices. Accurate Quality of Service (QoS) prediction is crucial for users to select the best service option. Despite advances in QoS prediction methods, two key challenges remain: insufficient context utilization and privacy threats. Motivated by these observations, we propose a novel approach called Personalized Hierarchical Topology-Aware Federated Learning (pHTAFed). This approach introduces network topology path and employs a multi-layer neural network model with hierarchical parameter aggregation to balance functional requirements and privacy protection needs. It ensures local retention of certain parameters for enhanced security while enabling personalized aggregation of other parameters in the cloud. Experimental results on two real-world datasets show that pHTAFed outperforms both distributed and centralized baseline algorithms in QoS prediction accuracy, offering an effective solution to existing challenges while enhancing service quality and protecting user privacy.",
    keywords: ["Web service, QoS prediction, Personalized federated learning, Multi-layer model, Network topology path"],
  },
  { 
    id: "p3", 
    title: "GIDC: A Gaussian Inflection-Based Framework for Automatic Density Peak Clustering", 
    authors: "YueQi Wang, Rui-dong Qi & Jian-tao Zhou", 
    venue: "IEEE International Symposium on Parallel and Distributed Processing with Applications (ISPA)", 
    year: 2025, 
    type: "Conference Paper", 
    doi: "10.1109/ISPA67752.2025.00129", 
    pdfUrl: "#",
	abstract: "Density-based clustering can discover clusters of arbitrary shapes without knowing the number in advance. Decision graph methods, combining local density and relative distance, give intuitive guidance but their γ-curves often lack clear transitions, especially under noise or smooth densities, making automatic detection difficult. To solve this, we propose GIDC, which applies (1) a contrast-weighted filter to suppress noise and enhance center contrast, and (2) Gaussian fitting with second-derivative analysis to locate meaningful inflection points. This probabilistic framework improves detection stability, and experiments show GIDC achieves higher accuracy and robustness than state-of-the-art methods."
    keywords: ["Density-based clustering, cluster center detection, decision graph, Gaussian fitting, inflection point analysis, unsupervised learning"],
  },
  /*{ 
    id: "p4", 
    title: "Multimodal Learning for Enhanced Sentiment Analysis in Social Media Content", 
    authors: "Carol Davis, Eleanor Vance, David Green", 
    venue: "Proceedings of the Conference on Empirical Methods in Natural Language Processing (EMNLP 2022)", 
    year: 2022, 
    type: "Conference Paper", 
    doi: "10.1234/emnlp.2022.003", 
    pdfUrl: "#",
    keywords: ["Multimodal Learning", "Sentiment Analysis", "Social Media", "Deep Learning"],
  },
  { 
    id: "p5", 
    title: "Foundations of Computational Linguistics: A Practical Guide", 
    authors: "Eleanor Vance", 
    venue: "Innovation University Press", 
    year: 2021, 
    type: "Book",
    abstract: "A textbook covering fundamental concepts and practical applications in computational linguistics, designed for undergraduate and early graduate students.",
    keywords: ["Computational Linguistics", "Textbook", "NLP Fundamentals"],
  },
  { 
    id: "p6", 
    title: "Fairness-aware Text Classification using Adversarial Debiasing", 
    authors: "Eleanor Vance, Maria Rodriguez", 
    venue: "Workshop on Fairness, Accountability, and Transparency in Machine Learning (FAT/ML 2022)", 
    year: 2022, 
    type: "Workshop Paper", 
    pdfUrl: "#",
    arxivUrl: "#",
    keywords: ["Fairness", "Text Classification", "Adversarial Learning", "Bias Mitigation"],
  },*/
];

const categories: Publication["type"][] = ["Journal Article", "Conference Paper", "Workshop Paper", "Book", "Preprint"];

const filterPublications = (type: string) => {
  if (type === "All") return publicationsData;
  return publicationsData.filter(p => p.type === type);
};

export default function PublicationsPage() {
  const allCategories = ["All", ...categories];

  return (
    <div className="space-y-12">
      <SectionTitle>Publications</SectionTitle>
      <Tabs defaultValue="All" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mb-6 gap-2">
          {allCategories.map(category => (
            <TabsTrigger key={category} value={category} className="text-xs sm:text-sm">{category}</TabsTrigger>
          ))}
        </TabsList>

        {allCategories.map(category => (
          <TabsContent key={category} value={category}>
            <div className="space-y-6">
              {filterPublications(category).length > 0 ? (
                filterPublications(category).sort((a,b) => b.year - a.year).map(pub => (
                  <Card key={pub.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/10">
                    <CardHeader>
                      <CardTitle className="text-lg md:text-xl text-primary/90">{pub.title}</CardTitle>
                      <CardDescription className="text-sm text-foreground/70 italic">
                        {pub.authors}
                      </CardDescription>
                      <CardDescription className="text-sm text-muted-foreground">
                        {pub.venue}, {pub.year}. <span className="font-medium">({pub.type})</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {pub.abstract && <p className="text-sm text-foreground/80 mb-3 leading-relaxed">{pub.abstract}</p>}
                      <div className="flex flex-wrap gap-2 items-center">
                        {pub.doi && (
                          <Button variant="outline" size="sm" asChild className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent">
                            <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                              <LinkIcon className="mr-1.5 h-4 w-4" /> DOI
                            </a>
                          </Button>
                        )}
                        {pub.pdfUrl && pub.pdfUrl !== "#" && (
                          <Button variant="outline" size="sm" asChild className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent">
                            <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer">
                              <Download className="mr-1.5 h-4 w-4" /> PDF
                            </a>
                          </Button>
                        )}
                        {pub.arxivUrl && pub.arxivUrl !== "#" && (
                           <Button variant="outline" size="sm" asChild className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent">
                            <a href={pub.arxivUrl} target="_blank" rel="noopener noreferrer">
                              <LinkIcon className="mr-1.5 h-4 w-4" /> arXiv
                            </a>
                          </Button>
                        )}
                        {/* Placeholder for BibTeX - could be a modal or copy to clipboard */}
                        {pub.bibtex && (
                           <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                             BibTeX
                           </Button>
                        )}
                      </div>
                      {pub.keywords && pub.keywords.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-border/50">
                          <h4 className="text-xs font-semibold text-muted-foreground mb-1">Keywords:</h4>
                          <div className="flex flex-wrap gap-1">
                            {pub.keywords.map(kw => (
                              <span key={kw} className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full">{kw}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-muted-foreground text-center py-8">No publications in this category for {new Date().getFullYear()} or earlier.</p>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
