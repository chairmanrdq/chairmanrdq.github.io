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
import { recruitmentChecklist, recruitmentIntro, recruitmentMailto } from '@/lib/recruitment';
import { labCardSurface } from '@/lib/design-tokens';
import ImageCarousel from '@/components/home/image-carousel';
import HomeHero from '@/components/home/home-hero';
import HomeJumpPills from '@/components/home/home-jump-pills';
import LatestNewsBand from '@/components/home/latest-news-band';
import ScrollBlurRevealTitle from '@/components/home/scroll-blur-reveal-title';
import FeaturedPublicationCard from '@/components/publications/featured-publication-card';

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
const leadPublication = featuredPublications[0];
const morePublications = featuredPublications.slice(1);
const researchFocusThemes = researchThemes.slice(0, 4);

export default function Home() {
  return (
    <div className="home-tech-canvas relative">
      <HomeHero />
      <HomeJumpPills />
      <LatestNewsBand />

      <section
        id="photo-highlights"
        aria-labelledby="photo-highlights-title"
        className="mb-14 page-section-reveal scroll-mt-24"
      >
        <SectionTitle id="photo-highlights-title">Visual Highlights</SectionTitle>
        <div className={`${labCardSurface} p-2 md:p-3`}>
          <ImageCarousel images={[...labGalleryImages]} interval={5500} />
        </div>
      </section>

      <section
        id="lab-quick-links"
        aria-labelledby="quick-links-title"
        className="mb-14 page-section-reveal scroll-mt-24"
      >
        <SectionTitle id="quick-links-title">Explore the Lab</SectionTitle>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {labQuickLinks.map((item) => (
            <Card key={item.id} className={`${labCardSurface} group relative`}>
              <CardContent className="relative z-10 pt-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`rounded-xl border p-3 ${
                      item.tone === 'gold'
                        ? 'text-[hsl(var(--gold))] bg-[hsl(var(--gold)/0.10)] border-[hsl(var(--gold)/0.22)]'
                        : 'text-primary bg-[hsl(var(--primary)/0.10)] border-[hsl(var(--primary)/0.18)]'
                    }`}
                  >
                    {highlightIcon(item)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
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
                    <p className="line-clamp-3 text-sm leading-relaxed text-foreground/80">
                      {item.description}
                    </p>
                    {item.link ? (
                      <div className="mt-4">
                        <Button size="sm" asChild>
                          <Link href={item.link} className="inline-flex items-center gap-2">
                            {item.action || 'View'}
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    ) : null}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="research-focus"
        aria-labelledby="research-focus-title"
        className="mb-14 page-section-reveal scroll-mt-24"
      >
        <div className="mb-8 text-center">
          <ScrollBlurRevealTitle id="research-focus-title" text="Research Focus" />
          <div className="section-title-rule" aria-hidden />
        </div>
        <p className="mx-auto mb-8 max-w-3xl text-center leading-relaxed text-foreground/80">
          {siteConfig.researchSummary}
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {researchFocusThemes.map((theme) => (
            <Card key={theme.title} className={labCardSurface}>
              <CardContent className="pt-6">
                <h3 className="type-subheading mb-2 text-primary/95">{theme.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/80">{theme.description}</p>
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

      <section
        id="featured-publications"
        aria-labelledby="featured-publications-title"
        className="mb-14 page-section-reveal scroll-mt-24"
      >
        <SectionTitle id="featured-publications-title">Selected Publications</SectionTitle>
        {leadPublication ? (
          <div className="grid gap-6 lg:grid-cols-2">
            <FeaturedPublicationCard pub={leadPublication} featured />
            <div className="flex flex-col gap-6">
              {morePublications.map((pub) => (
                <FeaturedPublicationCard key={pub.id} pub={pub} />
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <section
        id="prospective-students"
        aria-labelledby="prospective-students-title"
        className="mb-16 page-section-reveal scroll-mt-24"
      >
        <SectionTitle id="prospective-students-title">Prospective Students</SectionTitle>
        <Card className={labCardSurface}>
          <CardContent className="relative z-10 pt-8">
            <div className="flex flex-col items-start gap-10 lg:flex-row">
              <div className="flex-1">
                <p className="type-body mb-4 text-lg">{recruitmentIntro}</p>
                <ul className="list-none space-y-3 text-sm text-foreground/80">
                  {recruitmentChecklist.map((item, i) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="font-semibold text-primary">{i + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm">
                  <Link href="/team#lab-overview" className="text-accent hover:underline">
                    Full recruitment details on the Team page →
                  </Link>
                </p>
              </div>
              <div className="w-full lg:w-[320px]">
                <div className="tech-accent-soft mb-4 rounded-xl p-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <p className="font-semibold text-foreground/90">Contact</p>
                  </div>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="mt-2 block break-all text-sm text-accent hover:underline"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>
                <Button asChild className="w-full rounded-xl" size="lg">
                  <a href={recruitmentMailto}>
                    Apply to join the lab
                    <ChevronRight className="ml-1 h-4 w-4" />
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
