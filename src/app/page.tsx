import Image from 'next/image';
import { siteConfig, getPiAcademicLinks } from '@/lib/site-config';
import { getHomeLabStats } from '@/lib/lab-stats';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { Mail, Phone, MapPin, Award, BookOpen, Star, Users, Zap, ArrowRight, ChevronRight, Leaf, Cpu, Database, Battery, Cloud, Sparkles, Crown, Github, Linkedin, Megaphone } from 'lucide-react';
import { getLatestNewsHighlight, labQuickLinks } from '@/lib/news-data';
import type { AcademicHighlight } from '@/lib/news-data';
import { labGalleryImages } from '@/lib/lab-gallery';
import { researchThemes } from '@/lib/research-content';
import { getFeaturedPublications } from '@/lib/publications';
import { recruitmentChecklist, recruitmentIntro, recruitmentMailto } from '@/lib/recruitment';
import ImageCarousel from '@/components/home/image-carousel';
import BrushCalligraphyQuote from '@/components/home/brush-calligraphy-quote';
import ScrollBlurRevealTitle from '@/components/home/scroll-blur-reveal-title';

// Enhanced Mock Data with luxury focus
const scholarData = {
  name: "Dr. RuiDong Qi (祁瑞东)",
  position: siteConfig.piPosition,
  affiliation: siteConfig.institution,
  avatarUrl: siteConfig.piAvatarUrl,
  contact: {
    email: siteConfig.contactEmail,
    office: siteConfig.piOffice,
  },
  academicLinks: getPiAcademicLinks().map((link) => ({
    ...link,
    icon:
      link.name === 'ORCID' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden>
          <path d="M256,128c0,70.7-57.3,128-128,128S0,198.7,0,128C0,57.3,57.3,0,128,0S256,57.3,256,128z M126.1,208.9h-20V128.4c0-12.8-2.4-23.1-7.1-30.8c-4.7-7.7-11.7-11.5-21.1-11.5c-8.1,0-14.7,3.1-19.9,9.2c-5.2,6.1-7.8,15.1-7.8,26.9v86.8H29.4V72.4h20.8v10c3.8-4.5,8.2-7.9,13.4-10.2c5.1-2.3,10.6-3.5,16.5-3.5c15.9,0,28.1,5.9,36.5,17.7c8.4,11.8,12.6,28.5,12.6,50.1L126.1,208.9z M198.8,208.9h-20.5V112.4c0-11-1.4-19.1-4.1-24.4c-2.8-5.2-7.3-7.8-13.5-7.8c-6.9,0-12.3,2.9-16.1,8.6c-3.9,5.8-5.8,13.9-5.8,24.4v85.7h-20.5V72.4h20.5v10.5c3.4-4.2,7.4-7.4,11.9-9.7c4.5-2.3,9.5-3.4,14.9-3.4c11.2,0,20.1,3.6,26.7,10.9c6.6,7.3,9.9,17.7,9.9,31.2V208.9z" />
        </svg>
      ) : link.name === 'Google Scholar' ? (
        <BookOpen className="h-4 w-4" />
      ) : link.name === 'GitHub' ? (
        <Github className="h-4 w-4" />
      ) : (
        <Linkedin className="h-4 w-4" />
      ),
    stats: '',
  })),
  researchFocusSummary: siteConfig.researchSummary,
  researchKeywords: [...siteConfig.researchKeywords],
  stats: getHomeLabStats().map((stat, index) => {
    const icons = [
      <BookOpen className="h-5 w-5" key="pub" />,
      <Star className="h-5 w-5" key="theme" />,
      <Users className="h-5 w-5" key="team" />,
      <Zap className="h-5 w-5" key="proj" />,
    ];
    return { ...stat, icon: icons[index] ?? icons[0] };
  }),
};

function highlightIcon(item: AcademicHighlight) {
  const className = 'h-5 w-5 flex-shrink-0';
  switch (item.icon) {
    case 'book':
      return <BookOpen className={className} />;
    case 'sparkles':
      return <Sparkles className={className} />;
    case 'users':
      return <Users className={className} />;
    case 'award':
      return <Award className={className} />;
    case 'megaphone':
      return <Megaphone className={className} />;
    default:
      return <Megaphone className={className} />;
  }
}

const featuredPublications = getFeaturedPublications(3);
const latestNews = getLatestNewsHighlight();
const researchSnapshotThemes = researchThemes.slice(0, 3);

export default function Home() {
  return (
    <div className="home-tech-canvas relative">
      {/* Hero */}
      <section className="home-hero-tech relative mb-16 overflow-hidden rounded-xl border-2 border-border/80 bg-card p-8 md:p-12 luxury-card tech-frame-ambient page-section-reveal">
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex shrink-0 flex-col items-center">
              <div className="relative group motion-safe:animate-subtle-float">
                <div className="relative inline-block">
                  <span
                    className="hero-avatar-crown pointer-events-none absolute left-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-md border border-[hsl(var(--gold)/0.42)] bg-background/90 text-[hsl(var(--gold))] shadow-sm backdrop-blur-sm dark:border-[hsl(var(--gold)/0.5)] dark:bg-card/90"
                    aria-hidden={true}
                  >
                    <Crown className="h-3.5 w-3.5" strokeWidth={2.35} />
                  </span>
                  <Image
                    src={scholarData.avatarUrl}
                    alt={`Profile picture of ${scholarData.name}`}
                    width={200}
                    height={300}
                    className="rounded-none object-cover h-72 w-48 border-2 border-border lg:h-96 lg:w-64"
                    priority
                  />
                </div>
              </div>
              <figure className="mt-5 w-full max-w-[12rem] text-center lg:max-w-[16rem]">
                <BrushCalligraphyQuote />
              </figure>
            </div>

            {/* Enhanced Bio Content with Luxury Effects */}
            <div className="flex-1 text-center lg:text-left">
                             <div className="inline-flex items-center gap-2 luxury-badge luxury-badge-tech mb-4 motion-safe:animate-fade-up" style={{ animationDelay: '0ms' }}>
                <Cpu className="h-4 w-4 text-primary/85" />
                <span className="text-sm font-medium">Computing Power Networks • Low-Carbon Scheduling • Reliable Service Intelligence</span>
               </div>
              
              <h1
                className="text-4xl lg:text-6xl font-bold leading-[1.1] text-gradient-luxury mb-4 motion-safe:animate-fade-up"
                style={{ animationDelay: '60ms' }}
              >
                {scholarData.name}
              </h1>
              
              <p
                className="type-lead mb-2 motion-safe:animate-fade-up"
                style={{ animationDelay: '110ms' }}
              >
                {scholarData.position}
              </p>
              
              <p className="text-lg text-foreground/70 mb-6 motion-safe:animate-fade-up" style={{ animationDelay: '150ms' }}>
                {scholarData.affiliation}
              </p>
              <p className="text-sm text-foreground/70 mb-6 leading-relaxed motion-safe:animate-fade-up" style={{ animationDelay: '190ms' }}>
                Research agenda: theory-grounded and system-validated methods for computing-power scheduling,
                low-carbon optimization, and trustworthy service intelligence.
              </p>
              <p className="text-sm text-foreground/70 mb-8 leading-relaxed motion-safe:animate-fade-up" style={{ animationDelay: '230ms' }}>
                I build learning-enabled systems with a focus on <span className="text-primary font-medium">reliability</span>,{' '}
                <span className="text-primary font-medium">efficiency</span>, and <span className="text-primary font-medium">reproducibility</span>.
              </p>

              {/* Stats Grid with Luxury Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {scholarData.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="luxury-card tech-frame-ambient p-4 text-center luxury-hover motion-safe:animate-fade-up"
                    style={{ animationDelay: `${180 + index * 70}ms` }}
                  >
                    <div className="mb-2 flex justify-center text-primary/85">
                      {stat.icon}
                    </div>
                    <div className="text-xl md:text-2xl font-semibold text-primary/95 tracking-tight">{stat.value}</div>
                    <div className="text-xs text-foreground/65 mt-1 font-mono tabular-nums tracking-wide">{stat.label}</div>
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
                    className="group rounded-2xl outline-academic transition-colors"
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
      <section
        id="prospective-students"
        aria-labelledby="prospective-students-title"
        className="mb-16 page-section-reveal"
        style={{ animationDelay: "80ms" }}
      >
        <div className="text-center mb-8">
          <ScrollBlurRevealTitle id="prospective-students-title" text="Prospective Students" />
          <div className="section-title-rule" aria-hidden={true} />
        </div>

        <Card className="luxury-card tech-frame-ambient overflow-hidden luxury-hover relative">
          <CardContent className="relative z-10 pt-8">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="flex-1">
                <p className="type-body text-lg mb-4">{recruitmentIntro}</p>

                <ul className="space-y-3 text-sm text-foreground/80 list-none">
                  {recruitmentChecklist.map((item, i) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-primary font-semibold">{i + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm mt-4">
                  <a href="/team#lab-overview" className="text-accent hover:underline">
                    Full recruitment details on the Team page →
                  </a>
                </p>
              </div>

              <div className="w-full lg:w-[340px]">
                <div className="tech-accent-soft p-4 rounded-xl mb-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <p className="font-semibold text-foreground/90">Contact Email</p>
                  </div>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="block mt-2 text-accent hover:underline break-all"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>

                <Button
                  variant="luxurySoft"
                  asChild
                  className="w-full px-6 py-3 rounded-2xl group"
                >
                  <a href={recruitmentMailto}>
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
      <section
        id="research-focus"
        aria-labelledby="research-focus-title"
        className="mb-16 page-section-reveal"
        style={{ animationDelay: "160ms" }}
      >
        <div className="text-center mb-8">
          <ScrollBlurRevealTitle id="research-focus-title" text="Research Focus" />
          <div className="section-title-rule" aria-hidden={true} />
        </div>
        
        <Card className="luxury-card tech-frame-ambient overflow-hidden luxury-hover relative">
          <div className="absolute inset-0 animated-luxury-gradient-light opacity-70"></div>
          <CardContent className="relative z-10 pt-8">
            <p className="text-lg lg:text-xl text-foreground/80 mb-6 leading-relaxed">
              {scholarData.researchFocusSummary}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {scholarData.researchKeywords.map((keyword, index) => (
                <span
                  key={index}
                  className="luxury-badge luxury-badge-accent transition-all duration-300 cursor-default motion-safe:hover:scale-[1.03]"
                >
                   {keyword}
                </span>
              ))}
            </div>
            
            <Button 
              variant="luxurySoft" 
              asChild 
              className="px-6 py-3 rounded-2xl group luxury-glow-hover"
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
      <section
        id="featured-publications"
        aria-labelledby="featured-publications-title"
        className="mb-16 page-section-reveal"
        style={{ animationDelay: "240ms" }}
      >
        <div className="text-center mb-8">
          <ScrollBlurRevealTitle id="featured-publications-title" text="Selected Publications" />
          <div className="section-title-rule" aria-hidden={true} />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPublications.map((pub, index) => (
            <Card
              key={pub.id}
              className="luxury-card tech-frame-ambient group overflow-hidden luxury-hover relative motion-safe:animate-fade-up"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <CardContent className="relative z-10 pt-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="luxury-badge">
                    {pub.type}
                  </span>
                  <span className="text-xs text-foreground/55 whitespace-nowrap">{pub.year}</span>
                </div>

                <h3 className="type-card-title mb-2 text-primary/95 group-hover:text-primary transition-colors duration-300">
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
                      className="outline-academic"
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
                    className="outline-academic"
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

      <section
        id="lab-quick-links"
        aria-labelledby="quick-links-title"
        className="mb-16 page-section-reveal"
        style={{ animationDelay: "320ms" }}
      >
        <div className="text-center mb-8">
          <ScrollBlurRevealTitle id="quick-links-title" text="Explore the Lab" />
          <div className="section-title-rule" aria-hidden={true} />
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {labQuickLinks.map((item, index) => (
            <Card 
             key={item.id} 
             className="luxury-card tech-frame-ambient group overflow-hidden luxury-hover relative motion-safe:animate-fade-up"
             style={{ animationDelay: `${index * 55}ms` }}
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
                    {highlightIcon(item)}
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
                    <h3 className="type-subheading mb-2 text-primary/95 group-hover:text-primary transition-colors duration-300">
                       {item.title}
                    </h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {item.description}
                    </p>
                    {item.link && (
                      <div className="mt-4">
                        <Button variant="outline" size="sm" asChild className="outline-academic">
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

      <div className="luxury-divider" />

      {latestNews && (
        <section
          id="latest-news"
          aria-labelledby="latest-news-title"
          className="mb-16 page-section-reveal"
          style={{ animationDelay: "360ms" }}
        >
          <div className="text-center mb-8">
            <ScrollBlurRevealTitle id="latest-news-title" text="Latest News" />
            <div className="section-title-rule" aria-hidden={true} />
          </div>
          <Card className="luxury-card tech-frame-ambient group overflow-hidden luxury-hover relative max-w-3xl mx-auto ring-1 ring-[hsl(var(--gold)/0.12)]">
            <CardContent className="relative z-10 pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl border text-[hsl(var(--gold))] bg-[hsl(var(--gold)/0.10)] border-[hsl(var(--gold)/0.22)]">
                  {highlightIcon(latestNews)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="luxury-badge text-[hsl(var(--gold))] bg-[hsl(var(--gold)/0.10)] border-[hsl(var(--gold)/0.22)]">
                      {latestNews.badge}
                    </span>
                    <span className="text-xs text-muted-foreground">{latestNews.date}</span>
                  </div>
                  <h3 className="type-subheading mb-2 text-primary/95">{latestNews.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">{latestNews.description}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" asChild className="outline-academic">
                      <a href={latestNews.link} className="inline-flex items-center gap-2">
                        {latestNews.action}
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href="/news" className="inline-flex items-center gap-2 text-muted-foreground">
                        View all news
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      <div className="luxury-divider" />

      {/* Research Snapshot */}
      <section
        id="research-snapshot"
        aria-labelledby="research-snapshot-title"
        className="mb-16 page-section-reveal"
        style={{ animationDelay: "400ms" }}
      >
        <div className="text-center mb-8">
          <ScrollBlurRevealTitle id="research-snapshot-title" text="Research Snapshot" />
          <div className="section-title-rule" aria-hidden={true} />
        </div>

        <Card className="luxury-card tech-frame-ambient">
          <CardContent className="relative z-10 pt-6">
            <div className="space-y-6">
              {researchSnapshotThemes.map((theme) => (
                <div key={theme.title}>
                  <h3 className="type-subheading mb-1">{theme.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">{theme.description}</p>
                </div>
              ))}
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
              <Button variant="outline" asChild className="rounded-xl outline-academic ml-auto">
                <a href="/research" className="inline-flex items-center gap-2">
                  Explore details <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Photo Highlights */}
      <section
        id="photo-highlights"
        aria-labelledby="photo-highlights-title"
        className="mb-16 page-section-reveal"
        style={{ animationDelay: "480ms" }}
      >
        <div className="text-center mb-8">
          <ScrollBlurRevealTitle id="photo-highlights-title" text="Visual Highlights" />
          <div className="section-title-rule" aria-hidden={true} />
        </div>

        <div className="luxury-card tech-frame-ambient overflow-hidden luxury-hover motion-safe:animate-fade-in" style={{ animationDelay: '120ms' }}>
          <ImageCarousel images={[...labGalleryImages]} interval={5000} />
        </div>
      </section>
    </div>
  );
}