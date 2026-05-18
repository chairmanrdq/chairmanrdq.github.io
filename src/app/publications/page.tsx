import { SectionTitle } from '@/components/ui/section-title';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Link as LinkIcon, ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Metadata } from 'next';
import { siteConfig, getOrcidUrl } from '@/lib/site-config';
import {
  filterPublicationsByType,
  getPublicationTabCategories,
  groupPublicationsByYear,
  publications,
  selectedContributionBullets,
  type Publication,
} from '@/lib/publications';
import { isValidHttpUrl } from '@/lib/utils';
import CopyBibtexButton from '@/components/publications/copy-bibtex-button';
import { labCardSurface } from '@/lib/design-tokens';

export const metadata: Metadata = {
  title: 'Publications',
  description: `Selected publications by ${siteConfig.piFullName}, including conference papers on clustering, federated QoS prediction, and density-peak modeling.`,
};

function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <Card className={labCardSurface}>
      <CardHeader>
        <CardTitle className="text-primary/90">{pub.title}</CardTitle>
        <CardDescription className="text-sm text-foreground/70 italic">{pub.authors}</CardDescription>
        <CardDescription className="text-sm text-muted-foreground">
          {pub.venue}, {pub.year}. <span className="font-medium">({pub.type})</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {pub.abstract ? (
          <details className="mb-3 group">
            <summary className="cursor-pointer text-sm font-medium text-primary hover:text-primary/80 list-none [&::-webkit-details-marker]:hidden">
              <span className="underline-offset-2 group-open:underline">Abstract</span>
            </summary>
            <p className="type-body text-sm mt-2 pl-0">{pub.abstract}</p>
          </details>
        ) : null}
        <div className="flex flex-wrap gap-2 items-center">
          {pub.doi ? (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent"
            >
              <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                <LinkIcon className="mr-1.5 h-4 w-4" /> DOI
              </a>
            </Button>
          ) : null}
          {isValidHttpUrl(pub.pdfUrl) ? (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent"
            >
              <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer">
                <Download className="mr-1.5 h-4 w-4" /> PDF
              </a>
            </Button>
          ) : null}
          {isValidHttpUrl(pub.arxivUrl) ? (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent"
            >
              <a href={pub.arxivUrl} target="_blank" rel="noopener noreferrer">
                <LinkIcon className="mr-1.5 h-4 w-4" /> arXiv
              </a>
            </Button>
          ) : null}
          {pub.bibtex ? (
            <CopyBibtexButton
              bibtex={pub.bibtex}
              className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent"
            />
          ) : null}
        </div>
        {pub.keywords && pub.keywords.length > 0 ? (
          <div className="mt-3 pt-3 border-t border-border/50">
            <h4 className="text-xs font-semibold text-muted-foreground mb-1">Keywords:</h4>
            <div className="flex flex-wrap gap-1">
              {pub.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

export default function PublicationsPage() {
  const tabCategories = getPublicationTabCategories();
  const orcidUrl = getOrcidUrl();

  return (
    <div className="content-page-calm space-y-12">
      <section className="space-y-6 page-section-reveal" style={{ animationDelay: '0ms' }}>
        <SectionTitle>Publications</SectionTitle>
        <Card className="luxury-card">
          <CardContent className="pt-6 space-y-4">
            <h3 className="type-subheading mb-2">Selected Contributions</h3>
            <ul className="list-disc list-inside space-y-2 type-body text-sm">
              {selectedContributionBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="type-caption">
              Full list on{' '}
              <a
                href={siteConfig.academic.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent hover:underline"
              >
                Google Scholar <ExternalLink className="h-3 w-3" />
              </a>
              {orcidUrl ? (
                <>
                  {' '}
                  ·{' '}
                  <a
                    href={orcidUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    ORCID
                  </a>
                </>
              ) : null}
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="page-section-reveal" style={{ animationDelay: '100ms' }}>
        <Tabs defaultValue="All" className="w-full">
          <TabsList className="flex h-auto w-full flex-wrap justify-start mb-6 gap-2">
            {tabCategories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-xs sm:text-sm">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabCategories.map((category) => {
            const filtered = filterPublicationsByType(category);
            const yearGroups = groupPublicationsByYear(filtered);

            return (
              <TabsContent key={category} value={category}>
                <div className="space-y-10">
                  {yearGroups.length > 0 ? (
                    yearGroups.map((group) => (
                      <div key={group.year} className="space-y-4">
                        <h3 className="type-subheading text-primary/90 border-b border-border/60 pb-2">
                          {group.year}
                        </h3>
                        <div className="space-y-6">
                          {group.publications.map((pub) => (
                            <PublicationCard key={pub.id} pub={pub} />
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-center py-8">
                      No publications in this category yet.
                    </p>
                  )}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
        <p className="type-caption text-center mt-6">
          Showing {publications.length} curated entr{publications.length === 1 ? 'y' : 'ies'} — update{' '}
          <code className="text-xs">src/lib/publications.ts</code> to add more.
        </p>
      </section>
    </div>
  );
}
