import Link from 'next/link';
import type { Metadata } from 'next';
import { Award, Megaphone, ChevronRight, CalendarDays } from 'lucide-react';
import { SectionTitle } from '@/components/ui/section-title';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { newsArticles, type NewsArticle } from '@/lib/news-data';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'News',
  description:
    'Lab news, awards, and academic milestones from Dr. RuiDong Qi’s research group at Inner Mongolia University.',
};

function categoryIcon(category: NewsArticle['category']) {
  if (category === 'award') {
    return <Award className="h-5 w-5 flex-shrink-0" aria-hidden />;
  }
  return <Megaphone className="h-5 w-5 flex-shrink-0" aria-hidden />;
}

function formatNewsDate(date: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return date;
  return new Date(`${date}T12:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function NewsPage() {
  const sortedArticles = [...newsArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="space-y-12">
      <section className="space-y-6 page-section-reveal" style={{ animationDelay: '0ms' }}>
        <SectionTitle>News &amp; Updates</SectionTitle>
        <Card className="luxury-card">
          <CardContent className="pt-6">
            <p className="text-sm text-foreground/80 leading-relaxed">
              Awards, competition results, recruitment notices, and other milestones from the lab.
              Items previously featured on the homepage{' '}
              <span className="text-primary font-medium">Academic Highlights</span> section appear here
              as full stories when they are news-worthy updates.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="page-section-reveal space-y-8" style={{ animationDelay: '100ms' }}>
        {sortedArticles.length === 0 ? (
          <Card className="luxury-card">
            <CardContent className="pt-6 text-sm text-muted-foreground">No news items yet.</CardContent>
          </Card>
        ) : (
          sortedArticles.map((article, index) => (
            <article
              key={article.id}
              id={article.id}
              className="scroll-mt-24 motion-safe:animate-fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <Card
                className={cn(
                  'luxury-card tech-frame-ambient overflow-hidden',
                  article.category === 'award' && 'ring-1 ring-[hsl(var(--gold)/0.15)]',
                )}
              >
                <CardContent className="relative z-10 pt-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        'p-3 rounded-xl border shrink-0',
                        article.category === 'award'
                          ? 'text-[hsl(var(--gold))] bg-[hsl(var(--gold)/0.10)] border-[hsl(var(--gold)/0.22)]'
                          : 'text-primary bg-[hsl(var(--primary)/0.10)] border-[hsl(var(--primary)/0.18)]',
                      )}
                    >
                      {categoryIcon(article.category)}
                    </div>
                    <div className="flex-1 min-w-0 space-y-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge
                          variant="outline"
                          className={cn(
                            'luxury-badge',
                            article.category === 'award'
                              ? 'text-[hsl(var(--gold))] bg-[hsl(var(--gold)/0.10)] border-[hsl(var(--gold)/0.22)]'
                              : 'text-primary bg-[hsl(var(--primary)/0.08)] border-[hsl(var(--primary)/0.18)]',
                          )}
                        >
                          {article.badge}
                        </Badge>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                          <time dateTime={article.date}>{formatNewsDate(article.date)}</time>
                        </span>
                      </div>

                      <h2 className="type-card-title text-primary/95">{article.title}</h2>
                      <p className="text-sm text-foreground/85 leading-relaxed font-medium">{article.summary}</p>

                      <div className="space-y-3 border-t border-primary/10 pt-4">
                        {article.content.map((paragraph, i) => (
                          <p key={i} className="text-sm text-foreground/80 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {article.relatedLink && (
                        <div className="pt-2">
                          <Button variant="outline" size="sm" asChild className="outline-academic">
                            <Link href={article.relatedLink.href} className="inline-flex items-center gap-2">
                              {article.relatedLink.label}
                              <ChevronRight className="h-4 w-4" aria-hidden />
                            </Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))
        )}
      </section>
    </div>
  );
}
