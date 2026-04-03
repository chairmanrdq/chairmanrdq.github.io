import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { Mail, Phone, Link as LinkIcon, MapPin, Award, Rss, BookOpen, Star, TrendingUp, Users, Globe, Zap, ArrowRight, ChevronRight, Leaf, Cpu, Database, Battery, Cloud, Sparkles, Crown, Diamond } from 'lucide-react';
import ImageCarousel from '@/components/home/image-carousel';

// Enhanced Mock Data with luxury focus
const scholarData = {
  name: "Dr. RuiDong Qi（祁瑞东）",
  position: "Distinguished Lecturer in Computing Power Networks | Researcher in Green Computing",
  affiliation: "College of Computer Science, Inner Mongolia University",
  avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/rdq2.jpg",
  dataAiHint: "professional portrait",
  contact: {
    email: "imucsrdq@163.com",
    phone: "+1-234-567-8900",
    office: "Room 303, BeiZheng Building, School of Computer Science (School of Software), Inner Mongolia University",
  },
  academicLinks: [
    { name: "Google Scholar", url: "#", icon: <BookOpen className="h-4 w-4" />, stats: "" },
    { name: "ORCID", url: "#", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M256,128c0,70.7-57.3,128-128,128S0,198.7,0,128C0,57.3,57.3,0,128,0S256,57.3,256,128z M126.1,208.9h-20V128.4c0-12.8-2.4-23.1-7.1-30.8c-4.7-7.7-11.7-11.5-21.1-11.5c-8.1,0-14.7,3.1-19.9,9.2c-5.2,6.1-7.8,15.1-7.8,26.9v86.8H29.4V72.4h20.8v10c3.8-4.5,8.2-7.9,13.4-10.2c5.1-2.3,10.6-3.5,16.5-3.5c15.9,0,28.1,5.9,36.5,17.7c8.4,11.8,12.6,28.5,12.6,50.1L126.1,208.9L126.1,208.9z M198.8,208.9h-20.5V112.4c0-11-1.4-19.1-4.1-24.4c-2.8-5.2-7.3-7.8-13.5-7.8c-6.9,0-12.3,2.9-16.1,8.6c-3.9,5.8-5.8,13.9-5.8,24.4v85.7h-20.5V72.4h20.5v10.5c3.4-4.2,7.4-7.4,11.9-9.7c4.5-2.3,9.5-3.4,14.9-3.4c11.2,0,20.1,3.6,26.7,10.9c6.6,7.3,9.9,17.7,9.9,31.2V208.9z"/></svg> },
    { name: "LinkedIn", url: "#", icon: <LinkIcon className="h-4 w-4" /> },
  ],
  researchFocusSummary: "Our research spans cloud computing, big data, and service computing, with a focus on cloud–edge collaboration, predictive analytics, and intelligent service recommendation. We also develop system platforms that integrate cloud and data-driven applications.",
  //researchFocusSummary: "Our research focuses on cloud computing, big data, service computing, and system development. In cloud computing, we emphasize cloud–edge collaboration, cross-cloud resource scheduling, and task scheduling methods. In big data, we conduct predictive analytics and user behavior analysis within cloud environments, as well as ecosystem service assessment and forecasting. In service computing, we explore advanced recommendation approaches, including retrieval-augmented cold-start, large-model-based, multimodal, and elastic recommendation methods. We also develop system platforms that integrate cloud computing and big data applications, along with intelligent service recommendation systems.",
  researchKeywords: [    
    "Cloud Computing and Big Data",
    "Services Computing",
    "Computing Power Networks and Green Scheduling",
    "Service Recommendation",
  ],
  stats: [
    { label: "Publications", value: "Curated list", icon: <BookOpen className="h-5 w-5" /> },
    { label: "Research areas", value: "4 focus themes", icon: <Star className="h-5 w-5" /> },
    { label: "Teaching & advising", value: "Courses & mentorship", icon: <Users className="h-5 w-5" /> },
    { label: "Projects", value: "Grants & collaborations", icon: <Zap className="h-5 w-5" /> },
  ],
  news: [
    { 
      id: "p", 
      date: "Updated regularly", 
      title: "Selected Publications", 
      description: "Curated papers across clustering, federated learning, and density-peak frameworks. DOI links are provided when available.", 
      icon: <BookOpen className="h-5 w-5 flex-shrink-0 text-primary" />,
      badge: "Publications",
      tone: "primary",
      link: "/publications",
      action: "Browse all"
    },   
    { 
      id: "g", 
      date: "Ongoing research", 
      title: "Projects & Grants", 
      description: "Research projects and industry/enterprise collaborations in computing-power scheduling and intelligent service platforms.", 
      icon: <Sparkles className="h-5 w-5 flex-shrink-0 text-secondary" />,
      badge: "Grants",
      tone: "primary",
      link: "/projects",
      action: "View projects"
    },
    { 
      id: "t", 
      date: "Current lab", 
      title: "Lab Team & Mentorship", 
      description: "Current team members, research interests, and guidance opportunities. Send a short email with your background and goals.", 
      icon: <Users className="h-5 w-5 flex-shrink-0 text-secondary" />,
      badge: "Students",
      tone: "primary",
      link: "/team",
      action: "Meet the team"
    }
    ,
    {
      id: "a",
      date: "2026-04-01",
      title: "Two Teams from Our University Win Awards in AI+Data Track of the 5th Jiutian·Wutong Cup National Finals",
      description:
        "The national finals of the AI+Data Track of the 2026 5th China Mobile Jiutian·Wutong Cup. Our Intelligent Computing Pioneer Team and Neida Meow Meow Team received first and second prizes, respectively.",
      icon: <Award className="h-5 w-5 flex-shrink-0" />,
      badge: "Award",
      tone: "gold",
      link: "/projects",
      action: "View projects",
    }
    //{ 
     // id: 3, 
     // date: "2024-05-20", 
      //title: "🎓 PhD Recruitment Open", 
      //description: "Seeking exceptional students passionate about NLP and ML. Join our world-class research team and shape the future of AI.", 
     // icon: <Users className="h-5 w-5 text-green-500 flex-shrink-0" />,
     // badge: "Opportunity"
    //},
  ],
};

const featuredPublications = [
  {
    id: "fp1",
    title: "An Adaptive Density Peak Clustering Algorithm Based on N-ary Bézier Reverse Curve Optimization",
    authors: "Le Yang, Rui-dong Qi & Jian-tao Zhou",
    venue:
      "Proceedings of the 21nd Annual Meeting of International Conference on Intelligent Computing (ICIC 2025)",
    year: 2025,
    type: "Conference Paper",
    doi: "10.1007/978-981-96-9884-4_25",
  },
  {
    id: "fp2",
    title: "Personalized Hierarchical Topology-Aware Federated Learning: An Approach for QoS Prediction",
    authors: "CongRong Wu, Rui-dong Qi & Jian-tao Zhou",
    venue: "IEEE International Symposium on Parallel and Distributed Processing with Applications (ISPA)",
    year: 2025,
    type: "Conference Paper",
    doi: "10.1109/ISPA67752.2025.00193",
  },
  {
    id: "fp3",
    title: "GIDC: A Gaussian Inflection-Based Framework for Automatic Density Peak Clustering",
    authors: "YueQi Wang, Rui-dong Qi & Jian-tao Zhou",
    venue: "IEEE International Symposium on Parallel and Distributed Processing with Applications (ISPA)",
    year: 2025,
    type: "Conference Paper",
    doi: "10.1109/ISPA67752.2025.00129",
  },
];

// Photo highlights on home page
const carouselImages = [
  { src: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/26wt.jpg", alt: "Inner Mongolia University Image1", dataAiHint: "Illustration of Inner Mongolia University" },
  { src: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/zsxf.jpg", alt: "Inner Mongolia University Image2", dataAiHint: "Illustration of Inner Mongolia University" },
  { src: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/zsxf1.jpg", alt: "Inner Mongolia University Image3", dataAiHint: "Illustration of Inner Mongolia University" },
  { src: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/zsxf2.png", alt: "Inner Mongolia University Image4", dataAiHint: "Illustration of Inner Mongolia University" },
  { src: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/mmhy.jpg", alt: "Inner Mongolia University Image5", dataAiHint: "Illustration of Inner Mongolia University" },
  { src: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/ndmm.jpg", alt: "Inner Mongolia University Image6", dataAiHint: "Illustration of Inner Mongolia University" },
  { src: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/dbxc.jpg", alt: "Inner Mongolia University Image7", dataAiHint: "Illustration of Inner Mongolia University" },
  { src: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/202508.jpg", alt: "Inner Mongolia University Image8", dataAiHint: "Illustration of Inner Mongolia University" },
  { src: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/202509.jpg", alt: "Inner Mongolia University Image9", dataAiHint: "Illustration of Inner Mongolia University" },
  { src: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/202510.jpg", alt: "Inner Mongolia University Image10", dataAiHint: "Illustration of Inner Mongolia University" },
  { src: "https://picsum.photos/seed/carouselA/1400/600", alt: "State-of-the-Art Research Facility", dataAiHint: "modern laboratory with advanced equipment" },
  { src: "https://picsum.photos/seed/carouselB/1400/600", alt: "AI Neural Network Visualization", dataAiHint: "complex neural network visualization" },
  { src: "https://picsum.photos/seed/carouselC/1400/600", alt: "International Research Collaboration", dataAiHint: "diverse team collaboration" },
  { src: "https://picsum.photos/seed/carouselD/1400/600", alt: "Advanced Computing Infrastructure", dataAiHint: "high-performance computing center" },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section with Ultra Luxury Animated Gradient */}
      <section className="relative overflow-hidden rounded-3xl mb-16 p-8 md:p-12 luxury-card">
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="relative group">
              <div className="relative">
                <Image
                  src={scholarData.avatarUrl}
                  alt={`Profile picture of ${scholarData.name}`}
                  width={200}
                  height={300}
                  className="rounded-none object-cover h-72 w-48 lg:h-96 lg:w-64 border-4 border-background shadow-sm"
                  data-ai-hint={scholarData.dataAiHint}
                  priority
                />
              </div>
            </div>

            {/* Enhanced Bio Content with Luxury Effects */}
            <div className="flex-1 text-center lg:text-left">
                             <div className="inline-flex items-center gap-2 luxury-badge mb-4">
                <Diamond className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Computing Power Networks • Green Scheduling • Service Recommendation</span>
               </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gradient-luxury mb-4">
                {scholarData.name}
              </h1>
              
              <p className="text-xl lg:text-2xl text-foreground/80 mb-2 font-medium">
                {scholarData.position}
              </p>
              
              <p className="text-lg text-foreground/70 mb-6">
                {scholarData.affiliation}
              </p>
              <p className="text-sm text-foreground/70 mb-6 leading-relaxed">
                Research agenda: computing power network scheduling, low-carbon resource optimization, and
                service recommendation with reliable learning methods.
              </p>
              <p className="text-sm text-foreground/70 mb-8 leading-relaxed">
                I build learning-enabled systems with a focus on <span className="text-primary font-medium">reliability</span>,{' '}
                <span className="text-primary font-medium">efficiency</span>, and <span className="text-primary font-medium">reproducibility</span>.
              </p>

              {/* Stats Grid with Luxury Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {scholarData.stats.map((stat, index) => (
                  <div key={index} className="luxury-card p-4 text-center luxury-hover">
                    <div className="mb-2 flex justify-center text-primary/85">
                      {stat.icon}
                    </div>
                    <div className="text-xl md:text-2xl font-semibold text-primary/95 tracking-tight">{stat.value}</div>
                    <div className="text-xs text-foreground/65 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Enhanced Contact Info */}
              <div className="space-y-3 text-sm mb-6">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                                    <div className="tech-accent p-2 rounded-lg">
                    <Mail className="h-4 w-4 text-primary" />
                   </div>
                  <a href={`mailto:${scholarData.contact.email}`} className="text-foreground/90 hover:text-primary transition-colors">
                    {scholarData.contact.email}
                  </a>
                </div>
                {scholarData.contact.phone && (
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                                      <div className="tech-accent p-2 rounded-lg">
                    <Phone className="h-4 w-4 text-primary" />
                   </div>
                    <span className="text-foreground/90">{scholarData.contact.phone}</span>
                  </div>
                )}
                <div className="flex items-center justify-center lg:justify-start gap-3">
                                    <div className="tech-accent p-2 rounded-lg">
                    <MapPin className="h-4 w-4 text-primary" />
                   </div>
                  <span className="text-foreground/90">{scholarData.contact.office}</span>
                </div>
              </div>

              {/* Enhanced Academic Links */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {scholarData.academicLinks.map(link => (
                  <Button 
                    key={link.name} 
                    variant="outline" 
                    size="sm" 
                    asChild 
                    className="group rounded-2xl border-primary/20 text-primary hover:bg-primary/5 transition-colors"
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.icon}
                      <span className="ml-2">{link.name}</span>
                      {link.stats && (
                        <span className="ml-2 text-xs opacity-70">({link.stats})</span>
                      )}
                      <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prospective Students */}
      <section id="prospective-students" aria-labelledby="prospective-students-title" className="mb-16">
        <div className="text-center mb-8">
          <h2
            id="prospective-students-title"
            className="text-3xl lg:text-4xl font-bold text-gradient-luxury mb-4"
          >
            Prospective Students
          </h2>
          <div className="section-title-rule" aria-hidden={true} />
        </div>

        <Card className="luxury-card overflow-hidden luxury-hover relative">
          <CardContent className="relative z-10 pt-8">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="flex-1">
                <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                  If you want to join the lab, send a short email with your background and what you want to
                  work on. We prioritize candidates with clear research interests and solid foundations.
                </p>

                <div className="space-y-3 text-sm text-foreground/80">
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-semibold">1.</span>
                    <p>Your CV / transcripts (if available) and 1–2 related projects.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-semibold">2.</span>
                    <p>Why this lab, and how your experience connects to our research themes.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-semibold">3.</span>
                    <p>Any constraints (schedule, language preference, and expected start time).</p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[340px]">
                <div className="tech-accent p-4 rounded-xl mb-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <p className="font-semibold text-foreground/90">Contact Email</p>
                  </div>
                  <a
                    href="mailto:imucsrdq@163.com"
                    className="block mt-2 text-accent hover:underline break-all"
                  >
                    imucsrdq@163.com
                  </a>
                </div>

                <Button
                  variant="default"
                  asChild
                  className="btn-luxury w-full px-6 py-3 rounded-2xl group"
                >
                  <a href="mailto:imucsrdq@163.com?subject=Lab%20Application%20-%20Your%20Name">
                    Email Dr. Qi <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground mt-3">
                  Please include “Lab Application - Your Name” in the email subject.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Luxury Divider */}
      <div className="luxury-divider"></div>

      {/* Research Focus Section with Luxury Effects */}
      <section id="research-focus" aria-labelledby="research-focus-title" className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gradient-luxury mb-4">Research Focus</h2>
          <div className="section-title-rule" aria-hidden={true} />
        </div>
        
        <Card className="luxury-card overflow-hidden luxury-hover relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/7 via-secondary/7 to-accent/7 opacity-70"></div>
          <CardContent className="relative z-10 pt-8">
            <p className="text-lg lg:text-xl text-foreground/80 mb-6 leading-relaxed">
              {scholarData.researchFocusSummary}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {scholarData.researchKeywords.map((keyword, index) => (
                                 <span 
                   key={index} 
                   className="luxury-badge transition-all duration-500 cursor-default"
                   style={{
                     color: 'hsl(var(--accent))',
                     background: 'linear-gradient(135deg, hsl(var(--accent) / 0.08) 0%, hsl(var(--accent) / 0.12) 100%)',
                     border: '1px solid hsl(var(--accent) / 0.2)'
                   }}
                 >
                   {keyword}
                 </span>
              ))}
            </div>
            
            <Button 
              variant="default" 
              asChild 
              className="btn-luxury px-6 py-3 rounded-2xl group"
            >
              <a href="/research" className="flex items-center gap-2">
                Explore my research
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Luxury Divider */}
      <div className="luxury-divider"></div>

      {/* Featured Publications */}
      <section id="featured-publications" aria-labelledby="featured-publications-title" className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gradient-luxury mb-4" id="featured-publications-title">
            Selected Publications
          </h2>
          <div className="section-title-rule" aria-hidden={true} />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPublications.map(pub => (
            <Card key={pub.id} className="luxury-card group overflow-hidden luxury-hover relative">
              <CardContent className="relative z-10 pt-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground">
                    {pub.type}
                  </span>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{pub.year}</span>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-gradient-luxury transition-all duration-500">
                  {pub.title}
                </h3>
                <p className="text-sm italic text-foreground/80 leading-relaxed">{pub.authors}</p>
                <p className="text-sm text-muted-foreground mt-1">{pub.venue}</p>

                <div className="flex flex-wrap gap-3 mt-4">
                  {pub.doi && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent"
                    >
                      <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                        DOI <ChevronRight className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-primary/30 text-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <a href="/publications">
                      All <ChevronRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Luxury Divider */}
      <div className="luxury-divider"></div>

      {/* Enhanced News & Updates Section */}
      <section id="news" aria-labelledby="news-title" className="mb-16">
        <div className="text-center mb-8">
          <h2 id="news-title" className="text-3xl lg:text-4xl font-bold text-gradient-luxury mb-4">Academic Highlights</h2>
          <div className="section-title-rule" aria-hidden={true} />
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scholarData.news.map(item => (
            <Card 
             key={item.id} 
             className="luxury-card group overflow-hidden luxury-hover relative"
           >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-primary/6 to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardContent className="relative z-10 pt-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl border ${
                      item.tone === 'gold'
                        ? 'text-[hsl(var(--gold))] bg-[hsl(var(--gold)/0.10)] border-[hsl(var(--gold)/0.22)]'
                        : 'text-primary bg-[hsl(var(--primary)/0.10)] border-[hsl(var(--primary)/0.18)]'
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`luxury-badge ${
                          item.tone === 'gold'
                            ? 'text-[hsl(var(--gold))] bg-[hsl(var(--gold)/0.10)] border-[hsl(var(--gold)/0.22)]'
                            : 'text-primary bg-[hsl(var(--primary)/0.08)] border-[hsl(var(--primary)/0.18)]'
                        }`}
                      >
                        {item.badge}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-primary/95 group-hover:text-primary transition-colors duration-300">
                       {item.title}
                    </h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {item.description}
                    </p>
                    {item.link && (
                      <div className="mt-4">
                        <Button variant="outline" size="sm" asChild className="border-primary/30 text-primary hover:bg-primary/10 hover:text-primary">
                          <a href={item.link} className="inline-flex items-center gap-2">
                            {item.action || 'View'}
                            <ChevronRight className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Luxury Divider */}
      <div className="luxury-divider"></div>

      {/* Research Snapshot */}
      <section id="research-snapshot" aria-labelledby="research-snapshot-title" className="mb-16">
        <div className="text-center mb-8">
          <h2 id="research-snapshot-title" className="text-3xl lg:text-4xl font-bold text-gradient-luxury mb-4">
            Research Snapshot
          </h2>
          <div className="section-title-rule" aria-hidden={true} />
        </div>

        <Card className="luxury-card">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">Computing Power Networks</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  User-aware and QoS-aware scheduling across heterogeneous resources, with a focus on
                  provable performance and energy-efficient execution.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">Green & Low-carbon Optimization</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Low-carbon resource matching and system evaluation, targeting robust reductions in
                  power usage while maintaining service quality.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">Service Computing & Recommendation</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Robust service recommendation and cold-start solutions, integrating learning-based
                  models for practical deployment scenarios.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 items-center">
              {scholarData.researchKeywords.map((keyword, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full border border-border text-xs text-foreground/80"
                >
                  {keyword}
                </span>
              ))}
              <Button variant="outline" asChild className="rounded-xl border-primary/20 text-primary hover:bg-primary/5 ml-auto">
                <a href="/research" className="inline-flex items-center gap-2">
                  Explore details <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Photo Highlights */}
      <section id="photo-highlights" aria-labelledby="photo-highlights-title" className="mb-16">
        <div className="text-center mb-8">
          <h2 id="photo-highlights-title" className="text-3xl lg:text-4xl font-bold text-gradient-luxury mb-4">
            Visual Highlights
          </h2>
          <div className="section-title-rule" aria-hidden={true} />
        </div>

        <div className="luxury-card overflow-hidden luxury-hover">
          <ImageCarousel images={carouselImages} interval={5000} />
        </div>
      </section>
    </div>
  );
}