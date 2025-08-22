import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { Mail, Phone, Link as LinkIcon, MapPin, Award, Rss, BookOpen, Star, TrendingUp, Users, Globe, Zap, ArrowRight, ChevronRight, Leaf, Cpu, Database } from 'lucide-react';
import ImageCarousel from '@/components/home/image-carousel';

// Enhanced Mock Data with tech and sustainability focus
const scholarData = {
  name: "Dr. Eleanor Vance",
  position: "Distinguished Professor of Computational Linguistics",
  affiliation: "Department of Computer Science, University of Innovation",
  avatarUrl: "https://picsum.photos/seed/scholarvance/400/400",
  dataAiHint: "professional portrait",
  contact: {
    email: "eleanor.vance@university.edu",
    phone: "+1-234-567-8900",
    office: "Room 404, Tech Building, Innovation Drive",
  },
  academicLinks: [
    { name: "Google Scholar", url: "#", icon: <BookOpen className="h-4 w-4" />, stats: "2.3k+ citations" },
    { name: "ORCID", url: "#", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M256,128c0,70.7-57.3,128-128,128S0,198.7,0,128C0,57.3,57.3,0,128,0S256,57.3,256,128z M126.1,208.9h-20V128.4c0-12.8-2.4-23.1-7.1-30.8c-4.7-7.7-11.7-11.5-21.1-11.5c-8.1,0-14.7,3.1-19.9,9.2c-5.2,6.1-7.8,15.1-7.8,26.9v86.8H29.4V72.4h20.8v10c3.8-4.5,8.2-7.9,13.4-10.2c5.1-2.3,10.6-3.5,16.5-3.5c15.9,0,28.1,5.9,36.5,17.7c8.4,11.8,12.6,28.5,12.6,50.1L126.1,208.9L126.1,208.9z M198.8,208.9h-20.5V112.4c0-11-1.4-19.1-4.1-24.4c-2.8-5.2-7.3-7.8-13.5-7.8c-6.9,0-12.3,2.9-16.1,8.6c-3.9,5.8-5.8,13.9-5.8,24.4v85.7h-20.5V72.4h20.5v10.5c3.4-4.2,7.4-7.4,11.9-9.7c4.5-2.3,9.5-3.4,14.9-3.4c11.2,0,20.1,3.6,26.7,10.9c6.6,7.3,9.9,17.7,9.9,31.2V208.9z"/></svg> },
    { name: "LinkedIn", url: "#", icon: <LinkIcon className="h-4 w-4" /> },
  ],
  researchFocusSummary: "Pioneering research in Natural Language Processing and Machine Learning, with groundbreaking contributions to computational semantics, AI ethics, and applications in healthcare and education. Leading the development of robust, interpretable, and fair AI systems that transform how we understand and interact with technology.",
  researchKeywords: [
    "Natural Language Processing",
    "Machine Learning",
    "AI Ethics",
    "Computational Semantics",
    "Neural Networks",
    "Deep Learning",
  ],
  stats: [
    { label: "Publications", value: "150+", icon: <BookOpen className="h-5 w-5" /> },
    { label: "Citations", value: "2.3k+", icon: <TrendingUp className="h-5 w-5" /> },
    { label: "Students", value: "45+", icon: <Users className="h-5 w-5" /> },
    { label: "Countries", value: "12", icon: <Globe className="h-5 w-5" /> },
  ],
  news: [
    { 
      id: 1, 
      date: "2024-07-15", 
      title: "🏆 Best Paper Award at ACL 2024", 
      description: "Our revolutionary work on multilingual transformers was recognized for its innovative approach and significant impact on the field.", 
      icon: <Award className="h-5 w-5 text-yellow-500 flex-shrink-0" />,
      badge: "Award"
    },
    { 
      id: 2, 
      date: "2024-06-01", 
      title: "🎤 Keynote at Stanford NLP Seminar", 
      description: "Presented cutting-edge research on AI ethics in language models, influencing the next generation of responsible AI development.", 
      icon: <Rss className="h-5 w-5 text-blue-500 flex-shrink-0" />,
      badge: "Keynote"
    },
    { 
      id: 3, 
      date: "2024-05-20", 
      title: "🎓 PhD Recruitment Open", 
      description: "Seeking exceptional students passionate about NLP and ML. Join our world-class research team and shape the future of AI.", 
      icon: <Users className="h-5 w-5 text-green-500 flex-shrink-0" />,
      badge: "Opportunity"
    },
  ],
};

// Enhanced carousel data with tech focus
const carouselImages = [
  { src: "https://picsum.photos/seed/carouselA/1400/600", alt: "State-of-the-Art Research Facility", dataAiHint: "modern laboratory with advanced equipment" },
  { src: "https://picsum.photos/seed/carouselB/1400/600", alt: "AI Neural Network Visualization", dataAiHint: "complex neural network visualization" },
  { src: "https://picsum.photos/seed/carouselC/1400/600", alt: "International Research Collaboration", dataAiHint: "diverse team collaboration" },
  { src: "https://picsum.photos/seed/carouselD/1400/600", alt: "Advanced Computing Infrastructure", dataAiHint: "high-performance computing center" },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section with Tech Blue & Green Gradient */}
      <section className="relative overflow-hidden tech-gradient-light rounded-3xl mb-16 p-8 md:p-12 border border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-50"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Enhanced Avatar with Tech Theme */}
            <div className="relative group">
              <div className="absolute inset-0 tech-gradient rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative">
                <Image
                  src={scholarData.avatarUrl}
                  alt={`Profile picture of ${scholarData.name}`}
                  width={300}
                  height={300}
                  className="rounded-full object-cover h-64 w-64 lg:h-80 lg:w-80 border-4 border-background shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint={scholarData.dataAiHint}
                  priority
                />
                <div className="absolute -bottom-2 -right-2 tech-gradient text-white p-3 rounded-full shadow-lg">
                  <Cpu className="h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Enhanced Bio Content with Tech Theme */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-4 border border-primary/20">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Leading AI Research</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                {scholarData.name}
              </h1>
              
              <p className="text-xl lg:text-2xl text-foreground/80 mb-2 font-medium">
                {scholarData.position}
              </p>
              
              <p className="text-lg text-foreground/70 mb-6">
                {scholarData.affiliation}
              </p>

              {/* Stats Grid with Modern Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {scholarData.stats.map((stat, index) => (
                  <div key={index} className="modern-card p-4 text-center hover:scale-105 transition-all duration-300">
                    <div className="text-primary mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Enhanced Contact Info */}
              <div className="space-y-3 text-sm mb-6">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg border border-primary/20">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <a href={`mailto:${scholarData.contact.email}`} className="text-foreground/90 hover:text-primary transition-colors">
                    {scholarData.contact.email}
                  </a>
                </div>
                {scholarData.contact.phone && (
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg border border-primary/20">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground/90">{scholarData.contact.phone}</span>
                  </div>
                )}
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg border border-primary/20">
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
                    className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
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

      {/* Research Focus Section with Tech Theme */}
      <section id="research-focus" aria-labelledby="research-focus-title" className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Research Focus</h2>
          <div className="w-24 h-1 tech-gradient mx-auto rounded-full"></div>
        </div>
        
        <Card className="modern-card overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-50"></div>
          <CardContent className="relative z-10 pt-8">
            <p className="text-lg lg:text-xl text-foreground/80 mb-6 leading-relaxed">
              {scholarData.researchFocusSummary}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {scholarData.researchKeywords.map((keyword, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-sm rounded-full font-medium border border-primary/20 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 cursor-default"
                >
                  {keyword}
                </span>
              ))}
            </div>
            
            <Button 
              variant="default" 
              asChild 
              className="btn-modern px-6 py-3 rounded-xl group"
            >
              <a href="/research" className="flex items-center gap-2">
                Explore my research
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Enhanced News & Updates Section */}
      <section id="news" aria-labelledby="news-title" className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Latest News & Updates</h2>
          <div className="w-24 h-1 tech-gradient mx-auto rounded-full"></div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scholarData.news.map(item => (
            <Card 
              key={item.id} 
              className="modern-card group overflow-hidden hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative z-10 pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-3 rounded-xl border border-primary/20">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                        {item.badge}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-primary/90 mb-2 group-hover:text-primary transition-colors">
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

      {/* Enhanced Image Carousel Section */}
      <section id="image-carousel" aria-labelledby="carousel-title" className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Research Highlights</h2>
          <div className="w-24 h-1 tech-gradient mx-auto rounded-full"></div>
        </div>
        
        <div className="modern-card overflow-hidden">
          <ImageCarousel images={carouselImages} interval={5000} />
        </div>
      </section>
    </div>
  );
}
