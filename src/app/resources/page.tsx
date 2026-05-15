
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Users, BookOpenCheck, Github, Database, Presentation, Globe } from 'lucide-react';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Resources & Links',
  description: 'Shared resources including software, datasets, presentations, and useful links from Dr. RuiDong Qi（祁瑞东）.', // Replace
};

// Define a more specific type for items used in ResourceCard
interface GenericResourceItem {
  id: string;
  name: string;
  description: string;
  link: string; // Essential for the button's link
  lastUpdated?: string;
  size?: string;
  format?: string;
  event?: string;
  icon?: React.ReactNode;
  buttonText?: string;
}

// Mock Data - Replace with actual data
const resourcesData: {
  software: GenericResourceItem[];
  datasets: GenericResourceItem[];
  slides: GenericResourceItem[];
  friendlyLinks: Array<{ id: string; name: string; url: string; category: string; icon: React.ReactNode; }>;
} = {
  software: [
    /*{ id: "s1", name: "NLP Toolkit v2.1", description: "A Python library for common NLP tasks, optimized for research and education. Includes modules for text preprocessing, feature extraction, and model evaluation.", link: "#github-nlp-toolkit", lastUpdated: "2024-05-01", icon: <Github className="mr-2 h-4 w-4"/>, buttonText: "View on GitHub" },
    { id: "s2", name: "EthiCheck: Bias Detection Suite", description: "A suite of tools for analyzing and mitigating various types of bias in language models and text data. Supports multiple fairness metrics.", link: "#gitlab-ethicheck", lastUpdated: "2023-11-15", icon: <Github className="mr-2 h-4 w-4"/>, buttonText: "View on GitLab" },*/
	{ 
    id: "tool_ref_1", 
    name: "Zotero - Your personal research assistant", 
    url: "https://www.zotero.org/", 
    category: "Reference Management", 
    icon: <Library className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },
  { 
    id: "tool_ref_2", 
    name: "Mendeley - Reference Management Software", 
    url: "https://www.mendeley.com/", 
    category: "Reference Management", 
    icon: <Library className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },
  { 
    id: "tool_ref_3", 
    name: "EndNote - The industry standard software tool for publishing and managing bibliographies", 
    url: "https://endnote.com/", 
    category: "Reference Management", 
    icon: <Library className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },

  // --- 写作与排版 (Writing & Publishing) ---
  { 
    id: "tool_write_1", 
    name: "Overleaf - Collaborative LaTeX Editor", 
    url: "https://www.overleaf.com/", 
    category: "Writing & Publishing", 
    icon: <PenTool className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },
  { 
    id: "tool_write_2", 
    name: "Typora - A truly minimal markdown editor", 
    url: "https://typora.io/", 
    category: "Writing & Publishing", 
    icon: <FileText className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },

  // --- 数据分析与计算 (Data Analysis & Computation) ---
  { 
    id: "tool_data_1", 
    name: "Jupyter - Interactive computing across all programming languages", 
    url: "https://jupyter.org/", 
    category: "Data Analysis & Computation", 
    icon: <Code className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },
  { 
    id: "tool_data_2", 
    name: "MATLAB - Math. Graphics. Programming.", 
    url: "https://www.mathworks.com/products/matlab.html", 
    category: "Data Analysis & Computation", 
    icon: <Calculator className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },
  { 
    id: "tool_data_3", 
    name: "RStudio - Open source and enterprise-ready professional software for R", 
    url: "https://posit.co/products/open-source/rstudio/", 
    category: "Data Analysis & Computation", 
    icon: <Terminal className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },

  // --- 文献检索与分析 (Literature Search & Discovery) ---
  { 
    id: "tool_search_1", 
    name: "Google Scholar", 
    url: "https://scholar.google.com/", 
    category: "Search & Discovery", 
    icon: <Search className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },
  { 
    id: "tool_search_2", 
    name: "Connected Papers - Find and explore academic papers", 
    url: "https://www.connectedpapers.com/", 
    category: "Search & Discovery", 
    icon: <Network className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },
  { 
    id: "tool_search_3", 
    name: "Web of Science", 
    url: "https://www.webofscience.com/", 
    category: "Search & Discovery", 
    icon: <Search className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },

  // --- 代码托管与版本控制 (Version Control) ---
  { 
    id: "tool_dev_1", 
    name: "GitHub - Let's build from here", 
    url: "https://github.com/", 
    category: "Version Control", 
    icon: <GitBranch className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },
  { 
    id: "tool_dev_2", 
    name: "GitLab - The DevSecOps Platform", 
    url: "https://about.gitlab.com/", 
    category: "Version Control", 
    icon: <GitBranch className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  }
  ],
  datasets: [
    /*{ id: "d1", name: "Anonymized Clinical Notes Corpus (ACNC-2023)", description: "A large, curated dataset of anonymized clinical notes for NLP research, particularly for tasks like named entity recognition and relation extraction in the medical domain.", link: "#dataverse-acnc", size: "10GB", format: "JSON, TXT", icon: <Database className="mr-2 h-4 w-4"/>, buttonText: "Access on Dataverse" },
    { id: "d2", name: "Cross-Lingual Sentiment Lexicon (CLSL v1.2)", description: "A lexicon of sentiment scores for over 100,000 words and phrases across 10 major languages, useful for cross-lingual sentiment analysis.", link: "#zenodo-clsl", size: "50MB", format: "CSV", icon: <Database className="mr-2 h-4 w-4"/>, buttonText: "Download from Zenodo" },*/
  ],
  slides: [
    /*{ id: "sl1", name: "Keynote: The Future of Interpretable NLP", description: "Slides from my keynote presentation at ACL 2023, discussing challenges and opportunities in making NLP models more transparent and understandable.", link: "#slideshare-acl2023", event: "ACL 2023", icon: <Presentation className="mr-2 h-4 w-4"/>, buttonText: "View on SlideShare" },
    { id: "sl2", name: "Tutorial: Practical Ethical AI for Developers", description: "Tutorial slides covering practical steps and tools for implementing ethical AI principles in software development lifecycles.", link: "#googledrive-ethaidev", event: "AI Developer Summit 2024", icon: <Presentation className="mr-2 h-4 w-4"/>, buttonText: "Access on Google Drive" },*/
  ],
  friendlyLinks: [
	{ 
    id: "ccf_ai_1", 
    name: "CVPR - IEEE Conference on Computer Vision and Pattern Recognition", 
    url: "https://cvpr.thecvf.com/", 
    category: "Artificial Intelligence", 
    icon: <BookOpenCheck className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },
  { 
    id: "ccf_ai_3", 
    name: "ACL - Annual Meeting of the Association for Computational Linguistics", 
    url: "https://aclanthology.org/", 
    category: "Artificial Intelligence", 
    icon: <BookOpenCheck className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },
  { 
    id: "ccf_ai_4", 
    name: "TPAMI - IEEE Transactions on Pattern Analysis and Machine Intelligence", 
    url: "https://www.computer.org/csdl/journal/tp", 
    category: "Artificial Intelligence", 
    icon: <BookOpenCheck className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },

  // --- 数据库/数据挖掘/内容检索 (Database/Data Mining/Content Retrieval) ---
  { 
    id: "ccf_db_1", 
    name: "SIGMOD - ACM Conference on Management of Data", 
    url: "https://sigmod.org/", 
    category: "Database & Data Mining", 
    icon: <BookOpenCheck className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },
  { 
    id: "ccf_db_2", 
    name: "KDD - ACM Knowledge Discovery and Data Mining", 
    url: "https://kdd.org/", 
    category: "Database & Data Mining", 
    icon: <BookOpenCheck className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },
  { 
    id: "ccf_db_3", 
    name: "SIGIR - ACM International Conference on Research and Development in Information Retrieval", 
    url: "https://sigir.org/", 
    category: "Database & Data Mining", 
    icon: <BookOpenCheck className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },

  // --- 计算机网络 (Computer Network) ---
  { 
    id: "ccf_net_1", 
    name: "SIGCOMM - ACM International Conference on Applications, Technologies, Architectures, and Protocols for Computer Communication", 
    url: "https://www.sigcomm.org/", 
    category: "Computer Network", 
    icon: <BookOpenCheck className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },
  { 
    id: "ccf_net_2", 
    name: "MobiCom - ACM International Conference on Mobile Computing and Networking", 
    url: "https://sigmobile.org/mobicom/", 
    category: "Computer Network", 
    icon: <BookOpenCheck className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },

  // --- 计算机体系结构/并行与分布计算/存储系统 (Computer Architecture) ---
  { 
    id: "ccf_arch_1", 
    name: "ISCA - International Symposium on Computer Architecture", 
    url: "https://www.iscaconf.org/", 
    category: "Computer Architecture", 
    icon: <BookOpenCheck className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },
  { 
    id: "ccf_arch_2", 
    name: "ASPLOS - Architectural Support for Programming Languages and Operating Systems", 
    url: "https://www.sigarch.org/conferences/asplos/", 
    category: "Computer Architecture", 
    icon: <BookOpenCheck className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },

  // --- 软件工程/系统软件/程序设计语言 (Software Engineering) ---
  { 
    id: "ccf_se_1", 
    name: "ICSE - International Conference on Software Engineering", 
    url: "https://conf.researchr.org/series/icse", 
    category: "Software Engineering", 
    icon: <BookOpenCheck className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },
  { 
    id: "ccf_se_2", 
    name: "OSDI - USENIX Symposium on Operating Systems Design and Implementation", 
    url: "https://www.usenix.org/conferences/byname/106", 
    category: "Software Engineering", 
    icon: <BookOpenCheck className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },

  // --- 网络与信息安全 (Network and Information Security) ---
  { 
    id: "ccf_sec_1", 
    name: "S&P - IEEE Symposium on Security and Privacy", 
    url: "https://www.ieee-security.org/TC/SP/", 
    category: "Information Security", 
    icon: <BookOpenCheck className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  },
  { 
    id: "ccf_sec_2", 
    name: "CCS - ACM Conference on Computer and Communications Security", 
    url: "https://www.sigsac.org/ccs.html", 
    category: "Information Security", 
    icon: <BookOpenCheck className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> 
  }
    /*{ id: "fl1", name: "AI Research Lab @ University of Innovation", url: "#", category: "Labs & Institutions", icon: <Users className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> },
    { id: "fl2", name: "ACL Anthology - NLP Publications", url: "https://aclanthology.org/", category: "Conferences & Journals", icon: <BookOpenCheck className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> },
    { id: "fl3", name: "Dr. Jane Doe's Research Group", url: "#", category: "Collaborators", icon: <Users className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> },
    { id: "fl4", name: "AI Ethics Initiative", url: "#", category: "Organizations", icon: <Globe className="h-5 w-5 mr-2 text-accent flex-shrink-0" /> },*/
  ]
};

const ResourceCard = ({item, buttonClassName}: {item: GenericResourceItem, buttonClassName?: string}) => (
  <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/10">
    <CardHeader>
      <CardTitle className="text-xl text-primary/90">{item.name}</CardTitle>
      {item.lastUpdated && <CardDescription>Last updated: {item.lastUpdated}</CardDescription>}
      {item.size && item.format && <CardDescription>Size: {item.size} ({item.format})</CardDescription>}
      {item.event && <CardDescription>Event: {item.event}</CardDescription>}
    </CardHeader>
    <CardContent>
      <p className="text-foreground/80 mb-4 leading-relaxed">{item.description}</p>
      <Button 
        asChild 
        className={cn(
          "bg-secondary text-secondary-foreground hover:bg-secondary/80", // Changed default to gray
          buttonClassName // Override classes
        )}
      >
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {item.icon || <Download className="mr-2 h-4 w-4" />} {item.buttonText || "Access Resource"}
        </a>
      </Button>
    </CardContent>
  </Card>
);


export default function ResourcesPage() {
  return (
    <div className="space-y-12">
      <section id="software" aria-labelledby="software-title">
        <SectionTitle id="software-title">Software & Tools</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourcesData.software.map(item => (
            <ResourceCard 
              key={item.id} 
              item={item} 
              // buttonClassName prop removed to use the new gray default style
            />
          ))}
        </div>
      </section>

      <section id="datasets" aria-labelledby="datasets-title">
        <SectionTitle id="datasets-title">Datasets</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourcesData.datasets.map(item => <ResourceCard key={item.id} item={item} />)}
        </div>
      </section>

      <section id="slides" aria-labelledby="slides-title">
        <SectionTitle id="slides-title">Presentations & Slides</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourcesData.slides.map(item => <ResourceCard key={item.id} item={item} />)}
        </div>
      </section>

      <section id="friendly-links" aria-labelledby="friendly-links-title">
        <SectionTitle id="friendly-links-title">Useful Links</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourcesData.friendlyLinks.map(link => (
            <Card key={link.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/10">
              <CardContent className="pt-6">
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="flex items-center mb-2">
                    {link.icon}
                    <h3 className="text-lg font-semibold text-primary group-hover:underline">{link.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{link.category}</p>
                  <p className="text-sm text-foreground/70 group-hover:text-accent transition-colors break-all">
                    {link.url} <ExternalLink className="inline h-3 w-3 ml-0.5 align-baseline" />
                  </p>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
