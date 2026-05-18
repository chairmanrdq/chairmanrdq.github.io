import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { labCardSurface } from '@/lib/design-tokens';
import type { Publication } from '@/lib/publications';

type Props = {
  pub: Publication;
  featured?: boolean;
};

export default function FeaturedPublicationCard({ pub, featured = false }: Props) {
  return (
    <Card className={`${labCardSurface} group relative h-full`}>
      <CardContent className="relative z-10 flex h-full flex-col pt-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <span className="luxury-badge">{pub.type}</span>
          <span className="whitespace-nowrap text-xs text-foreground/55">{pub.year}</span>
        </div>
        <h3
          className={`mb-2 text-primary/95 transition-colors duration-300 group-hover:text-primary ${
            featured ? 'type-subheading text-xl leading-snug md:text-2xl' : 'type-card-title'
          }`}
        >
          {pub.title}
        </h3>
        <p className="text-sm italic leading-relaxed text-foreground/80">{pub.authors}</p>
        <p className="mt-1 text-sm text-muted-foreground">{pub.venue}</p>
        <div className="mt-auto flex flex-wrap gap-3 pt-4">
          {pub.doi ? (
            <Button variant="outline" size="sm" asChild className="outline-academic">
              <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                DOI <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          ) : null}
          <Button size="sm" asChild variant={featured ? 'default' : 'outline'} className={featured ? '' : 'outline-academic'}>
            <Link href="/publications">All publications</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
