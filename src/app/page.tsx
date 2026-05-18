import Image from 'next/image';
import Link from 'next/link';
import { siteConfig, getPiAcademicLinks } from '@/lib/site-config';
import { getHomeLabStats } from '@/lib/lab-stats';
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
import { getLatestNewsHighlight, labQuickLinks } from '@/lib/news-data';
import type { AcademicHighlight } from '@/lib/news-data';
import { labGalleryImages } from '@/lib/lab-gallery';
import { researchThemes } from '@/lib/research-content';
import { getFeaturedPublications } from '@/lib/publications';
import { recruitmentChecklist, recruitmentIntro, recruitmentMailto } from '@/lib/recruitment';
import ImageCarousel from '@/components/home/image-carousel';

const CARD = 'academic-card';

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
const researchThemesGrid = researchThemes.slice(0, 4);
const labStats = getHomeLabStats();
const academicLinks = getPiAcademicLinks();

export default function Home() {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Hero — 克制、信息优先 */}
      <section className="mb-14 rounded-xl border border-border bg-card p-6 md:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          <div className="flex shrink-0 justify-center lg:justify-start">
            <Image
              src={siteConfig.piAvatarUrl}
              alt={`Portrait of ${siteConfig.piFullName}`}
              width={200}
              height={280}
              className="h-64 w-44 rounded-lg border border-border object-cover md:h-72 md:w-52"
              priority
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
              {siteConfig.institution}
            </p>
            <h1 className="font-serif text-3xl font-bold leading-[1.12] text-foreground text-balance md:text-4xl lg:text-[2.75rem]">
              {siteConfig.piFullName}
            </h1>
            <p className="type-lead mt-3 text-balance">{siteConfig.piPosition}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground/80 md:text-base">
              {siteConfig.labTagline}
            </p>

            <ul
              className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 border-y border-border py-4 lg:justify-start"
              aria-label="Lab metrics"
            >
              {labStats.map((stat) => (
                <li key={stat.label} className="text-center lg:text-left">
                  <span className="block text-xl font-semibold tabular-nums text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button asChild size="lg">
                <Link href="/research">Research directions</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact the lab</Link>
              </Button>
            </div>

            <p className="mt-5 text-xs text-muted-foreground flex flex-wrap justify-center gap-x-4 gap-y-1 lg:justify-start">
              {academicLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary underline-offset-2 hover:underline"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="hover:text-primary underline-offset-2 hover:underline"
              >
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>
        </div>
      </section>

      {latestNews ? (
        <section id="latest-news" aria-labelledby="latest-news-title" className="mb-14 scroll-mt-24">
          <SectionTitle id="latest-news-title">Latest News</SectionTitle>
          <Card className={`${CARD} max-w-4xl`}>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[hsl(var(--gold)/0.25)] bg-[hsl(var(--gold)/0.08)] text-[hsl(var(--gold))]">
                  {highlightIcon(latestNews)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium text-[hsl(var(--gold))]">{latestNews.badge}</span>
                    <span className="text-xs text-muted-foreground">{latestNews.date}</span>
                  </div>
                  <h3 className="type-subheading mb-2">{latestNews.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/80">{latestNews.description}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Button asChild size="sm">
                      <Link href={latestNews.link}>{latestNews.action}</Link>
                    </Button>
                    <Button asChild size="sm" variant="ghost">
                      <Link href="/news" className="text-muted-foreground">
                        All news
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      ) : null}

      <section id="photo-highlights" aria-labelledby="photo-highlights-title" className="mb-14 scroll-mt-24">
        <SectionTitle id="photo-highlights-title">Lab Gallery</SectionTitle>
        <div className={`${CARD} overflow-hidden p-1`}>
          <ImageCarousel images={[...labGalleryImages]} interval={6000} />
        </div>
      </section>

      <section id="lab-quick-links" aria-labelledby="quick-links-title" className="mb-14 scroll-mt-24">
        <SectionTitle id="quick-links-title">Explore the Lab</SectionTitle>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {labQuickLinks.map((item) => (
            <Card key={item.id} className={CARD}>
              <CardContent className="pt-6">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xs font-medium text-muted-foreground">{item.badge}</span>
                  <span className="text-xs text-muted-foreground">· {item.date}</span>
                </div>
                <h3 className="type-card-title mb-2">{item.title}</h3>
                <p className="line-clamp-3 text-sm leading-relaxed text-foreground/80">{item.description}</p>
                {item.link ? (
                  <Button asChild size="sm" variant="link" className="mt-3 h-auto p-0">
                    <Link href={item.link}>
                      {item.action || 'View'} <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="research-focus" aria-labelledby="research-focus-title" className="mb-14 scroll-mt-24">
        <SectionTitle id="research-focus-title">Research Focus</SectionTitle>
        <p className="mb-8 max-w-3xl text-[15px] leading-relaxed text-foreground/80 md:text-base">
          {siteConfig.researchSummary}
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {researchThemesGrid.map((theme) => (
            <Card key={theme.title} className={CARD}>
              <CardContent className="pt-6">
                <h3 className="type-subheading mb-2">{theme.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/80">{theme.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/research">
              Full research page <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section
        id="featured-publications"
        aria-labelledby="featured-publications-title"
        className="mb-14 scroll-mt-24"
      >
        <SectionTitle id="featured-publications-title">Selected Publications</SectionTitle>
        <div className="grid gap-5 lg:grid-cols-2">
          {featuredPublications[0] ? (
            <Card className={`${CARD} lg:row-span-2`}>
              <CardContent className="flex h-full flex-col pt-6">
                <PubMeta pub={featuredPublications[0]} large />
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  <PubActions pub={featuredPublications[0]} primary />
                </div>
              </CardContent>
            </Card>
          ) : null}
          <div className="flex flex-col gap-5">
            {featuredPublications.slice(1).map((pub) => (
              <Card key={pub.id} className={CARD}>
                <CardContent className="pt-6">
                  <PubMeta pub={pub} />
                  <PubActions pub={pub} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="prospective-students"
        aria-labelledby="prospective-students-title"
        className="mb-16 scroll-mt-24"
      >
        <SectionTitle id="prospective-students-title">Prospective Students</SectionTitle>
        <Card className={CARD}>
          <CardContent className="pt-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
              <div className="flex-1">
                <p className="type-body mb-4 text-lg">{recruitmentIntro}</p>
                <ul className="list-none space-y-3 text-sm text-foreground/80">
                  {recruitmentChecklist.map((item, i) => (
                    <li key={item} className="flex gap-3">
                      <span className="font-semibold text-primary">{i + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm">
                  <Link href="/team#lab-overview" className="text-primary hover:underline">
                    Recruitment details on Team →
                  </Link>
                </p>
              </div>
              <div className="w-full shrink-0 lg:w-72">
                <p className="mb-2 flex items-center gap-2 text-sm font-medium">
                  <Mail className="h-4 w-4 text-primary" aria-hidden />
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-sm text-primary hover:underline break-all"
                >
                  {siteConfig.contactEmail}
                </a>
                <Button asChild className="mt-4 w-full" size="lg">
                  <a href={recruitmentMailto}>Apply to join the lab</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function PubMeta({
  pub,
  large = false,
}: {
  pub: ReturnType<typeof getFeaturedPublications>[number];
  large?: boolean;
}) {
  return (
    <>
      <div className="mb-2 flex items-start justify-between gap-2">
        <span className="text-xs font-medium text-muted-foreground">{pub.type}</span>
        <span className="text-xs text-muted-foreground">{pub.year}</span>
      </div>
      <h3 className={large ? 'type-subheading text-xl leading-snug md:text-2xl' : 'type-card-title mb-2'}>
        {pub.title}
      </h3>
      <p className="text-sm italic text-foreground/80">{pub.authors}</p>
      <p className="mt-1 text-sm text-muted-foreground">{pub.venue}</p>
    </>
  );
}

function PubActions({
  pub,
  primary = false,
}: {
  pub: ReturnType<typeof getFeaturedPublications>[number];
  primary?: boolean;
}) {
  return (
    <>
      {pub.doi ? (
        <Button variant={primary ? 'default' : 'outline'} size="sm" asChild>
          <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
            DOI
          </a>
        </Button>
      ) : null}
      <Button variant={primary ? 'outline' : 'ghost'} size="sm" asChild>
        <Link href="/publications">All publications</Link>
      </Button>
    </>
  );
}
