import Image from 'next/image';
import Link from 'next/link';
import { Award, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig, getPiAcademicLinks } from '@/lib/site-config';
import { homeHero, heroHighlightStats } from '@/lib/home-content';
import { labPiAvatarClass } from '@/lib/design-tokens';

export default function HomeHero() {
  const academicLinks = getPiAcademicLinks();

  return (
    <section className="home-hero-tech relative mb-8 overflow-hidden rounded-xl border-2 border-border/80 bg-card p-6 md:p-10 luxury-card tech-frame-ambient page-section-reveal">
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="flex shrink-0 flex-col items-center">
          <div className="relative">
            <span className="absolute -top-2 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-[hsl(var(--gold)/0.45)] bg-background/95 px-3 py-1 text-[11px] font-semibold tracking-wide text-[hsl(var(--gold))] shadow-sm">
              <Award className="mr-1 inline h-3 w-3 -mt-px" aria-hidden />
              {homeHero.awardBadge}
            </span>
            <Image
              src={siteConfig.piAvatarUrl}
              alt={`Portrait of ${siteConfig.piFullName}`}
              width={200}
              height={280}
              className={`mt-4 ${labPiAvatarClass}`}
              priority
            />
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left max-w-3xl">
          <p className="text-sm font-medium text-primary/90 mb-2">{siteConfig.piPosition}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-gradient-luxury mb-4 text-balance">
            {siteConfig.piFullName}
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 font-medium leading-snug mb-3 text-balance">
            {homeHero.tagline}
          </p>
          <p className="text-sm text-muted-foreground mb-6">{homeHero.subtagline}</p>

          <div className="grid grid-cols-2 gap-3 mb-6 max-w-md mx-auto lg:mx-0">
            {heroHighlightStats.map((stat) => (
              <div
                key={stat.label}
                className="luxury-card tech-frame-ambient p-3 text-center border border-[hsl(var(--gold)/0.15)]"
              >
                <div className="text-base font-semibold text-[hsl(var(--gold))]">{stat.value}</div>
                <div className="text-[11px] text-foreground/65 mt-0.5 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-5">
            <Button asChild size="lg" className="rounded-xl px-6">
              <Link href={homeHero.primaryCta.href} className="inline-flex items-center gap-2">
                {homeHero.primaryCta.label}
                <ChevronRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl outline-academic px-6">
              <Link href={homeHero.secondaryCta.href}>{homeHero.secondaryCta.label}</Link>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground flex flex-wrap gap-x-3 gap-y-1 justify-center lg:justify-start">
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
            <Link href="/contact" className="hover:text-primary underline-offset-2 hover:underline">
              Contact →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
