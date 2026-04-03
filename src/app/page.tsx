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
  affiliation: "Collage of Computer Science, Inner Mongolia University",
  avatarUrl: "https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images/rdq2.jpg",
  dataAiHint: "professional portrait",
  contact: {
    email: "imucsrdq@163.com",
    phone: "+1-234-567-8900",
    office: "Room 303, BeiZheng Building, School of Computer Science (School of Software), Inner Mongolia University",
  },
  academicLinks: [
    { name: "Google Scholar", url: "#", icon: <BookOpen className="h-4 w-4" />, stats: "To be continued" },
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
    { label: "Publications", value: "More to come", icon: <BookOpen className="h-5 w-5" /> },
    { label: "Citations", value: "To be continued", icon: <TrendingUp className="h-5 w-5" /> },
    { label: "Students", value: "Growing team", icon: <Users className="h-5 w-5" /> },
    { label: "Countries", value: "Growing global reach", icon: <Globe className="h-5 w-5" /> },
  ],
  news: [
    { 
      id: 2, 
      date: "2026-04-01", 
      title: "🏆 Two Teams from Our University Win Awards in AI+Data Track of the 5th Jiutian·Wutong Cup National Finals", 
      description: "The national finals of the AI+Data Track of the 2026 5th China Mobile Jiutian·Wutong Cup recently concluded. Featuring 18 elite teams from 22 universities worldwide, our Intelligent Computing Pioneer Team and Neida Meow Meow Team won first and second prizes respectively, showcasing our students' excellence in digital intelligence innovation.", 
             icon: <Award className="h-5 w-5 flex-shrink-0 text-[hsl(35_70%_45%)]" />,
      badge: "Award"
    },   
    { 
      id: 1, 
      date: "2025-10-24", 
      title: "🎤 Our group participated in the China National Computer Congress (CNCC 2025)", 
      description: "During the congress, we engaged in academic exchanges on computing power network scheduling, heterogeneous resource orchestration, and cross-domain intelligent dispatching, and explored collaborations with industry and academia.", 
             icon: <Rss className="h-5 w-5 flex-shrink-0 text-primary" />,
      badge: "Keynote"
    },
    { 
      id: 2, 
      date: "2025-08-13", 
      title: "🏆 Our group participated in CCF HPC China 2025, held in Ordos, Inner Mongolia.", 
      description: "During the conference, we presented our research on green computing power scheduling and HPC optimization, and engaged in in-depth discussions with scholars from China and abroad.", 
             icon: <Award className="h-5 w-5 flex-shrink-0 text-[hsl(35_70%_45%)]" />,
      badge: "Award"
    },
    { 
      id: 3, 
      date: "2024-10-24", 
      title: "🎤 Our group participated in the China National Computer Congress (CNCC 2024)", 
      description: "During the congress, we engaged in academic exchanges on computing power networks, green computing, and service computing, and explored collaborations with industry and academia.", 
             icon: <Rss className="h-5 w-5 flex-shrink-0 text-primary" />,
      badge: "Keynote"
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

// Enhanced carousel data with luxury focus
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
      <section className="relative overflow-hidden rounded-3xl mb-16 p-8 md:p-12 luxury-card luxury-corner">
                 <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-70"></div>
                 <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60" style={{backgroundColor: 'hsla(225,55%,30%,0.20)'}}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-50" style={{backgroundColor: 'hsla(215,35%,32%,0.18)'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-45" style={{backgroundColor: 'hsla(150,25%,28%,0.20)'}}></div>
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Enhanced Avatar with Ultra Luxury Effects */}
            <div className="relative group">
              <div className="absolute inset-0 animated-luxury-gradient rounded-none blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
              <div className="relative">
                <Image
                  src={scholarData.avatarUrl}
                  alt={`Profile picture of ${scholarData.name}`}
                  width={200}
                  height={300}
                  className="rounded-none object-cover h-72 w-48 lg:h-96 lg:w-64 border-4 border-background shadow-2xl group-hover:scale-105 transition-transform duration-700 luxury-glow-hover luxury-float"
                  data-ai-hint={scholarData.dataAiHint}
                  priority
                />
                 <div className="absolute -bottom-2 -right-2 animated-luxury-gradient text-white p-3 rounded-none shadow-lg luxury-glow">
                  <Crown className="h-6 w-6 text-[hsl(35_70%_45%)]" />
                 </div>
                <div className="absolute -top-1 -left-1 w-4 h-4 rounded-full luxury-shimmer" style={{backgroundColor: 'hsl(35,80%,70%)'}}></div>
              </div>
            </div>

            {/* Enhanced Bio Content with Luxury Effects */}
            <div className="flex-1 text-center lg:text-left">
                             <div className="inline-flex items-center gap-2 luxury-badge mb-4">
                 <Diamond className="h-4 w-4" style={{color: '#FFC107'}} />
                 <span className="text-sm font-medium">Leading Computing Power Network Innovation</span>
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

              {/* Stats Grid with Luxury Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {scholarData.stats.map((stat, index) => (
                  <div key={index} className="luxury-card p-4 text-center luxury-hover">
                                         <div className="text-gradient-tech mb-2 flex justify-center">
                       <div style={{color: '#1E3A8A'}}>
                         {stat.icon}
                       </div>
                     </div>
                    <div className="text-2xl font-bold text-gradient-luxury">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
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
                                         className="luxury-border transition-all duration-500 group"
                     style={{
                       border: '2px solid transparent',
                       background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #5B2C6F, #1E3A8A, #1B5E20) border-box'
                     }}
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

      {/* Luxury Divider */}
      <div className="luxury-divider"></div>

      {/* Research Focus Section with Luxury Effects */}
      <section id="research-focus" aria-labelledby="research-focus-title" className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gradient-luxury mb-4">Research Focus</h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary via-secondary to-accent"></div>
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
                     color: '#1B5E20',
                     background: 'linear-gradient(135deg, rgba(27, 94, 32, 0.08) 0%, rgba(27, 94, 32, 0.12) 100%)',
                     border: '1px solid rgba(27, 94, 32, 0.2)'
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

      {/* Enhanced News & Updates Section */}
      <section id="news" aria-labelledby="news-title" className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gradient-luxury mb-4">Latest News & Updates</h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary via-secondary to-accent"></div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scholarData.news.map(item => (
            <Card 
             key={item.id} 
             className="luxury-card group overflow-hidden luxury-hover relative"
           >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-secondary/8 to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardContent className="relative z-10 pt-6">
                <div className="flex items-start gap-4">
                                       <div className="innovation-accent p-3 rounded-xl">
                       <div style={{color: '#1B5E20'}}>
                         {item.icon}
                       </div>
                     </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                                             <span className="luxury-badge" style={{
                         color: item.badge === 'Award' ? '#FFC107' : '#1E3A8A',
                         background: item.badge === 'Award' 
                           ? 'linear-gradient(135deg, rgba(255, 193, 7, 0.08) 0%, rgba(255, 193, 7, 0.12) 100%)'
                           : 'linear-gradient(135deg, rgba(30, 58, 138, 0.08) 0%, rgba(30, 58, 138, 0.12) 100%)',
                         border: item.badge === 'Award' 
                           ? '1px solid rgba(255, 193, 7, 0.2)'
                           : '1px solid rgba(30, 58, 138, 0.2)'
                       }}>
                         {item.badge}
                       </span>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                                            <h3 className="text-lg font-semibold mb-2 group-hover:text-gradient-luxury transition-all duration-500">
                       {item.title}
                     </h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Luxury Divider */}
      <div className="luxury-divider"></div>

      {/* Enhanced Image Carousel Section */}
      <section id="image-carousel" aria-labelledby="carousel-title" className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gradient-luxury mb-4">Research Highlights</h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary via-secondary to-accent"></div>
        </div>
        
        <div className="luxury-card overflow-hidden luxury-hover">
          <ImageCarousel images={carouselImages} interval={5000} />
        </div>
      </section>
    </div>
  );
}