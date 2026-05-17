import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/ui/section-title';
import {
  Mail,
  Award,
  BookOpen,
  Users,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Megaphone,
} from 'lucide-react';
import { labQuickLinks } from '@/lib/news-data';
import type { AcademicHighlight } from '@/lib/news-data';
import { labGalleryImages } from '@/lib/lab-gallery';
import { researchThemes } from '@/lib/research-content';
import { getFeaturedPublications } from '@/lib/publications';
import type { Publication } from '@/lib/publications';
import { recruitmentChecklist, recruitmentIntro, recruitmentMailto } from '@/lib/recruitment';
import ImageCarousel from '@/components/home/image-carousel';
import HomeHero from '@/components/home/home-hero';
import LatestNewsBand from '@/components/home/latest-news-band';
import ScrollBlurRevealTitle from '@/components/home/scroll-blur-reveal-title';

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

function PublicationCard({ pub, featured = false }: { pub: Publication; featured?: boolean }) {
  return (
    <Card className="luxury-card tech-frame-ambient group overflow-hidden luxury-hover relative h-full">
      <CardContent className="relative z-10 pt-6 flex flex-col h-full">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="luxury-badge">{pub.type}</span>
          <span className="text-xs text-foreground/55 whitespace-nowrap">{pub.year}</span>
        </div>
        <h3
          className={`mb-2 text-primary/95 group-hover:text-primary transition-colors duration-300 ${
            featured ? 'type-subheading text-xl md:text-2xl leading-snug' : 'type-card-title'
          }`}
        >
          {pub.title}
        </h3>
        <p className="text-sm italic text-foreground/80 leading-relaxed">{pub.authors}</p>
        <p className="text-sm text-muted-foreground mt-1">{pub.venue}</p>
        <div className="flex flex-wrap gap-3 mt-auto pt-4">
          {pub.doi && (
            <Button variant="outline" size="sm" asChild className="outline-academic">
              <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                DOI <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          )}
          <Button size="sm" asChild className={featured ? '' : 'outline-academic'} variant={featured ? 'default' : 'outline'}>
            <Link href="/publications">All publications</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

const featuredPublications = getFeaturedPublications(3);
const leadPublication = featuredPublications[0];
const morePublications = featuredPublications.slice(1);
const researchFocusThemes = researchThemes.slice(0, 4);

export default function Home() {
  return (
    <div className="home-tech-canvas relative">
      <HomeHero />
      <LatestNewsBand />

      <section
        id="photo-highlights"
        aria-labelledby="photo-highlights-title"
        className="mb-14 page-section-reveal"
      >
        <SectionTitle id="photo-highlights-title">Visual Highlights</SectionTitle>
        <div className="luxury-card tech-frame-ambient overflow-hidden luxury-hover p-2 md:p-3">
          <ImageCarousel images={[...labGalleryImages]} interval={5500} />
        </div>
      </section>

      <div className="luxury-divider" />

      <section
        id="lab-quick-links"
        aria-labelledby="quick-links-title"
        className="mb-14 page-section-reveal"
      >
        <SectionTitle id="quick-links-title">Explore the Lab</SectionTitle>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {labQuickLinks.map((item) => (
            <Card
              key={item.id}
              className="luxury-card tech-frame-ambient group overflow-hidden luxury-hover relative"
            >
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
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
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
                    <h3 className="type-subheading mb-2 text-primary/95">{item.title}</h3>
                    <p className="text-sm text-foreground/80 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                    {item.link && (
                      <div className="mt-4">
                        <Button size="sm" asChild>
                          <Link href={item.link} className="inline-flex items-center gap-2">
                            {item.action || 'View'}
                            <ChevronRight className="h-4 w-4" />
                          </Link>
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

      <section
        id="research-focus"
        aria-labelledby="research-focus-title"
        className="mb-14 page-section-reveal"
      >
        <div className="text-center mb-8">
          <ScrollBlurRevealTitle id="research-focus-title" text="Research Focus" />
          <div className="section-title-rule" aria-hidden />
        </div>
        <p className="text-center text-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed">
          {siteConfig.researchSummary}
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {researchFocusThemes.map((theme) => (
            <Card key={theme.title} className="luxury-card tech-frame-ambient luxury-hover">
              <CardContent className="pt-6">
                <h3 className="type-subheading mb-2 text-primary/95">{theme.title}</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">{theme.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href="/research" className="inline-flex items-center gap-2">
              Explore research directions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <div className="luxury-divider" />

      <section
        id="featured-publications"
        aria-labelledby="featured-publications-title"
        className="mb-14 page-section-reveal"
      >
        <SectionTitle id="featured-publications-title">Selected Publications</SectionTitle>
        {leadPublication && (
          <div className="grid gap-6 lg:grid-cols-2">
            <PublicationCard pub={leadPublication} featured />
            <div className="flex flex-col gap-6">
              {morePublications.map((pub) => (
                <PublicationCard key={pub.id} pub={pub} />
              ))}
            </div>
          </div>
        )}
      </section>

      <div className="luxury-divider" />

      <section
        id="prospective-students"
        aria-labelledby="prospective-students-title"
        className="mb-16 page-section-reveal"
      >
        <SectionTitle id="prospective-students-title">Prospective Students</SectionTitle>
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
                  <Link href="/team#lab-overview" className="text-accent hover:underline">
                    Full recruitment details on the Team page →
                  </Link>
                </p>
              </div>
              <div className="w-full lg:w-[320px]">
                <div className="tech-accent-soft p-4 rounded-xl mb-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <p className="font-semibold text-foreground/90">Contact</p>
                  </div>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="block mt-2 text-sm text-accent hover:underline break-all"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>
                <Button asChild className="w-full rounded-xl" size="lg">
                  <a href={recruitmentMailto}>
                    Apply to join the lab
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
