import Image from 'next/image';
import type { Metadata } from 'next';
import { siteConfig, getPiAcademicLinks } from '@/lib/site-config';
import { getHomeLabStats } from '@/lib/lab-stats';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/ui/section-title';
import {
  Mail,
  MapPin,
  BookOpen,
  Star,
  Users,
  Zap,
  ArrowRight,
  ChevronRight,
  Cpu,
  Crown,
  Github,
  Linkedin,
  Megaphone,
  FlaskConical,
  Newspaper,
  Award,
  Sparkles,
} from 'lucide-react';
import { getLatestNewsHighlight } from '@/lib/news-data';
import type { AcademicHighlight } from '@/lib/news-data';
import { homeGalleryImages } from '@/lib/lab-gallery';
import { getFeaturedPublications } from '@/lib/publications';
import { recruitmentMailto } from '@/lib/recruitment';
import ImageCarousel from '@/components/home/image-carousel';
import BrushCalligraphyQuote from '@/components/home/brush-calligraphy-quote';

export const metadata: Metadata = {
  title: siteConfig.piShortName,
  description: siteConfig.labTagline,
  keywords: [
    'computing power networks',
    'Inner Mongolia University',
    'RuiDong Qi',
    '祁瑞东',
    siteConfig.labTaglineZh,
    '算力网络',
  ],
};

const STAT_ICONS = [
  <BookOpen className="h-5 w-5" key="pub" />,
  <Star className="h-5 w-5" key="theme" />,
  <Users className="h-5 w-5" key="team" />,
  <Zap className="h-5 w-5" key="proj" />,
];

function academicLinkIcon(name: string) {
  if (name === 'ORCID') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden>
        <path d="M256,128c0,70.7-57.3,128-128,128S0,198.7,0,128C0,57.3,57.3,0,128,0S256,57.3,256,128z M126.1,208.9h-20V128.4c0-12.8-2.4-23.1-7.1-30.8c-4.7-7.7-11.7-11.5-21.1-11.5c-8.1,0-14.7,3.1-19.9,9.2c-5.2,6.1-7.8,15.1-7.8,26.9v86.8H29.4V72.4h20.8v10c3.8-4.5,8.2-7.9,13.4-10.2c5.1-2.3,10.6-3.5,16.5-3.5c15.9,0,28.1,5.9,36.5,17.7c8.4,11.8,12.6,28.5,12.6,50.1L126.1,208.9z M198.8,208.9h-20.5V112.4c0-11-1.4-19.1-4.1-24.4c-2.8-5.2-7.3-7.8-13.5-7.8c-6.9,0-12.3,2.9-16.1,8.6c-3.9,5.8-5.8,13.9-5.8,24.4v85.7h-20.5V72.4h20.5v10.5c3.4-4.2,7.4-7.4,11.9-9.7c4.5-2.3,9.5-3.4,14.9-3.4c11.2,0,20.1,3.6,26.7,10.9c6.6,7.3,9.9,17.7,9.9,31.2V208.9z" />
      </svg>
    );
  }
  if (name === 'Google Scholar') return <BookOpen className="h-4 w-4" />;
  if (name === 'GitHub') return <Github className="h-4 w-4" />;
  return <Linkedin className="h-4 w-4" />;
}

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
    default:
      return <Megaphone className={className} />;
  }
}

const homeStats = getHomeLabStats().map((stat, index) => ({
  ...stat,
  icon: STAT_ICONS[index] ?? STAT_ICONS[0],
}));

const academicLinks = getPiAcademicLinks();
const featuredPublications = getFeaturedPublications(3);
const latestNews = getLatestNewsHighlight();

const ctaCards = [
  {
    href: '/research',
    title: 'Research',
    description: siteConfig.researchSummary,
    icon: FlaskConical,
  },
  {
    href: '/publications',
    title: 'Publications',
    description: 'Selected papers with DOI links and BibTeX where available.',
    icon: Newspaper,
  },
  {
    href: '/team#lab-overview',
    title: 'Join the Lab',
    description: 'Recruitment details, team structure, and how to apply.',
    icon: Users,
  },
] as const;

export default function Home() {
  return (
    <div className="home-tech-canvas relative">
      <section className="home-hero-tech relative mb-16 overflow-hidden rounded-xl border-2 border-border/80 bg-card p-8 md:p-12 luxury-card tech-frame-ambient page-section-reveal">
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex shrink-0 flex-col items-center">
              <div className="relative group motion-safe:animate-subtle-float">
                <div className="relative inline-block">
                  <span
                    className="hero-avatar-crown pointer-events-none absolute left-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-md border border-[hsl(var(--gold)/0.42)] bg-background/90 text-[hsl(var(--gold))] shadow-sm backdrop-blur-sm dark:border-[hsl(var(--gold)/0.5)] dark:bg-card/90"
                    aria-hidden
                  >
                    <Crown className="h-3.5 w-3.5" strokeWidth={2.35} />
                  </span>
                  <Image
                    src={siteConfig.piAvatarUrl}
                    alt={`Profile picture of ${siteConfig.piFullName}`}
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

            <div className="flex-1 text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 luxury-badge luxury-badge-tech mb-4 motion-safe:animate-fade-up"
                style={{ animationDelay: '0ms' }}
              >
                <Cpu className="h-4 w-4 text-primary/85" />
                <span className="text-sm font-medium">
                  Computing Power Networks • Low-Carbon Scheduling • Reliable Service Intelligence
                </span>
              </div>

              <h1
                className="text-4xl lg:text-6xl font-bold leading-[1.1] text-gradient-luxury mb-4 motion-safe:animate-fade-up"
                style={{ animationDelay: '60ms' }}
              >
                {siteConfig.piFullName}
              </h1>

              <p className="type-lead mb-2 motion-safe:animate-fade-up" style={{ animationDelay: '110ms' }}>
                {siteConfig.piPosition}
              </p>

              <p className="text-lg text-foreground/70 mb-4 motion-safe:animate-fade-up" style={{ animationDelay: '150ms' }}>
                {siteConfig.institution}
              </p>

              <p className="text-sm text-foreground/70 mb-6 leading-relaxed motion-safe:animate-fade-up" style={{ animationDelay: '190ms' }}>
                {siteConfig.researchSummary}
              </p>

              <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
                {siteConfig.researchKeywords.map((keyword) => (
                  <span key={keyword} className="luxury-badge luxury-badge-accent text-xs">
                    {keyword}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {homeStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="luxury-card tech-frame-ambient p-4 text-center luxury-hover motion-safe:animate-fade-up"
                    style={{ animationDelay: `${180 + index * 70}ms` }}
                  >
                    <div className="mb-2 flex justify-center text-primary/85">{stat.icon}</div>
                    <div className="text-xl md:text-2xl font-semibold text-primary/95 tracking-tight">{stat.value}</div>
                    <div className="text-xs text-foreground/65 mt-1 font-mono tabular-nums tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-sm mb-6">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="tech-accent p-2 rounded-lg">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <a href={`mailto:${siteConfig.contactEmail}`} className="text-foreground/90 hover:text-primary transition-colors">
                    {siteConfig.contactEmail}
                  </a>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="tech-accent p-2 rounded-lg">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground/90">{siteConfig.piOffice}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-4">
                {academicLinks.map((link) => (
                  <Button key={link.name} variant="outline" size="sm" asChild className="group rounded-2xl outline-academic">
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {academicLinkIcon(link.name)}
                      <span className="ml-2">{link.name}</span>
                      <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                ))}
              </div>

              <Button variant="luxurySoft" asChild className="rounded-2xl group">
                <a href={recruitmentMailto}>
                  Prospective students: email the PI
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="explore-lab-title" className="mb-16 page-section-reveal text-center">
        <SectionTitle id="explore-lab-title" className="mb-8">Explore the Lab</SectionTitle>
        <div className="grid gap-6 md:grid-cols-3">
          {ctaCards.map((item) => (
            <Card key={item.href} className="luxury-card tech-frame-ambient luxury-hover group">
              <CardContent className="pt-6">
                <item.icon className="h-8 w-8 text-primary mb-3" aria-hidden />
                <h3 className="type-subheading mb-2 text-primary/95 group-hover:text-primary">{item.title}</h3>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">{item.description}</p>
                <Button variant="outline" size="sm" asChild className="outline-academic">
                  <a href={item.href} className="inline-flex items-center gap-2">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="luxury-divider" />

      <section id="featured-publications" aria-labelledby="featured-publications-title" className="mb-16 page-section-reveal text-center">
        <SectionTitle id="featured-publications-title" className="mb-8">Selected Publications</SectionTitle>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPublications.map((pub) => (
            <Card key={pub.id} className="luxury-card tech-frame-ambient group luxury-hover">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="luxury-badge">{pub.type}</span>
                  <span className="text-xs text-foreground/55 whitespace-nowrap">{pub.year}</span>
                </div>
                <h3 className="type-card-title mb-2 text-primary/95">{pub.title}</h3>
                <p className="text-sm italic text-foreground/80 leading-relaxed">{pub.authors}</p>
                <p className="text-sm text-muted-foreground mt-1">{pub.venue}</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {pub.doi ? (
                    <Button variant="outline" size="sm" asChild className="outline-academic">
                      <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                        DOI <ChevronRight className="h-4 w-4" />
                      </a>
                    </Button>
                  ) : null}
                  <Button variant="outline" size="sm" asChild className="outline-academic">
                    <a href="/publications">All <ChevronRight className="h-4 w-4" /></a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {latestNews ? (
        <>
          <div className="luxury-divider" />
          <section id="latest-news" aria-labelledby="latest-news-title" className="mb-16 page-section-reveal text-center">
            <SectionTitle id="latest-news-title" className="mb-8">Latest News</SectionTitle>
            <Card className="luxury-card tech-frame-ambient max-w-3xl mx-auto ring-1 ring-[hsl(var(--gold)/0.12)]">
              <CardContent className="pt-6">
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
                    <h3 className="type-subheading mb-2">{latestNews.title}</h3>
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
                          View all news <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </>
      ) : null}

      <div className="luxury-divider" />

      <section id="photo-highlights" aria-labelledby="photo-highlights-title" className="mb-16 page-section-reveal text-center">
        <SectionTitle id="photo-highlights-title" className="mb-8">Visual Highlights</SectionTitle>
        <div className="luxury-card tech-frame-ambient overflow-hidden luxury-hover">
          <ImageCarousel images={[...homeGalleryImages]} interval={5000} />
        </div>
      </section>
    </div>
  );
}
