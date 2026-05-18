import Image from 'next/image';
import Link from 'next/link';
import { Award, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getLatestNewsHighlight } from '@/lib/news-data';
import { latestNewsVisual } from '@/lib/home-content';
import { labImage } from '@/lib/media';

export default function LatestNewsBand() {
  const news = getLatestNewsHighlight();
  if (!news) return null;

  const coverSrc = labImage(latestNewsVisual.image);

  return (
    <section
      id="latest-news"
      aria-labelledby="latest-news-title"
      className="mb-12 page-section-reveal scroll-mt-24"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="luxury-badge text-[hsl(var(--gold))] bg-[hsl(var(--gold)/0.12)] border-[hsl(var(--gold)/0.28)]">
          Latest
        </span>
        <h2 id="latest-news-title" className="type-section-title text-2xl md:text-3xl">
          News &amp; Highlights
        </h2>
      </div>

      <Card className="luxury-card tech-frame-ambient overflow-hidden ring-2 ring-[hsl(var(--gold)/0.18)]">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]">
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px] bg-muted">
              <Image
                src={coverSrc}
                alt={latestNewsVisual.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-background/20" />
              <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-background/90 px-2.5 py-1 text-xs font-semibold text-[hsl(var(--gold))] shadow-sm">
                <Award className="h-3.5 w-3.5" aria-hidden />
                {news.badge}
              </span>
            </div>

            <div className="flex flex-col justify-center p-6 md:p-8">
              <p className="text-xs text-muted-foreground mb-2">{news.date}</p>
              <h3 className="type-subheading text-primary/95 mb-3 leading-snug">{news.title}</h3>
              <p className="text-sm text-foreground/80 leading-relaxed line-clamp-3 mb-6">
                {news.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="rounded-xl">
                  <Link href={news.link} className="inline-flex items-center gap-2">
                    Read full story
                    <ChevronRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="rounded-xl outline-academic">
                  <Link href="/team#current-team" className="inline-flex items-center gap-2">
                    Meet the team
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
