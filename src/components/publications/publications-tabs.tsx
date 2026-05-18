'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Link as LinkIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  filterPublicationsByType,
  getEmptyTabMessage,
  getPublicationTabCategories,
  getPublicationTabLabel,
  groupPublicationsByYear,
  type Publication,
  type PublicationTabCategory,
} from '@/lib/publications';
import { isValidHttpUrl } from '@/lib/utils';
import CopyBibtexButton from '@/components/publications/copy-bibtex-button';
import PublicationsSearch from '@/components/publications/publications-search';

function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <Card className="luxury-card shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/10">
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
            <Button variant="outline" size="sm" asChild className="border-accent/50 text-accent hover:bg-accent/10">
              <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                <LinkIcon className="mr-1.5 h-4 w-4" /> DOI
              </a>
            </Button>
          ) : null}
          {isValidHttpUrl(pub.pdfUrl) ? (
            <Button variant="outline" size="sm" asChild className="border-accent/50 text-accent hover:bg-accent/10">
              <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer">
                <Download className="mr-1.5 h-4 w-4" /> PDF
              </a>
            </Button>
          ) : null}
          {isValidHttpUrl(pub.arxivUrl) ? (
            <Button variant="outline" size="sm" asChild className="border-accent/50 text-accent hover:bg-accent/10">
              <a href={pub.arxivUrl} target="_blank" rel="noopener noreferrer">
                <LinkIcon className="mr-1.5 h-4 w-4" /> arXiv
              </a>
            </Button>
          ) : null}
          {pub.bibtex ? (
            <CopyBibtexButton bibtex={pub.bibtex} className="border-accent/50 text-accent hover:bg-accent/10" />
          ) : null}
        </div>
        {pub.keywords && pub.keywords.length > 0 ? (
          <div className="mt-3 pt-3 border-t border-border/50">
            <h4 className="text-xs font-semibold text-muted-foreground mb-1">Keywords:</h4>
            <div className="flex flex-wrap gap-1">
              {pub.keywords.map((kw) => (
                <span key={kw} className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full">
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

function YearGroupedList({
  pubs,
  emptyMessage = 'No publications match your search.',
}: {
  pubs: Publication[];
  emptyMessage?: string;
}) {
  const yearGroups = groupPublicationsByYear(pubs);
  if (yearGroups.length === 0) {
    return <p className="text-muted-foreground text-center py-8">{emptyMessage}</p>;
  }
  return (
    <div className="space-y-10">
      {yearGroups.map((group) => (
        <div key={group.year} className="space-y-4">
          <h3 className="type-subheading text-primary/90 border-b border-border/60 pb-2">{group.year}</h3>
          <div className="space-y-6">
            {group.publications.map((pub) => (
              <PublicationCard key={pub.id} pub={pub} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PublicationsTabs() {
  const tabCategories = getPublicationTabCategories();
  const [activeTab, setActiveTab] = useState<PublicationTabCategory>('All');
  const activePubs = filterPublicationsByType(activeTab);

  return (
    <Tabs
      value={activeTab}
      onValueChange={(value) => setActiveTab(value as PublicationTabCategory)}
      className="w-full"
    >
      <TabsList className="flex h-auto w-full flex-wrap justify-start mb-6 gap-2">
        {tabCategories.map((category) => (
          <TabsTrigger key={category} value={category} className="text-xs sm:text-sm">
            {getPublicationTabLabel(category)}
          </TabsTrigger>
        ))}
      </TabsList>

      <PublicationsSearch publications={activePubs} key={activeTab}>
        {(filtered) => (
          <TabsContent value={activeTab} forceMount className="mt-0">
            <YearGroupedList
              pubs={filtered}
              emptyMessage={
                filtered.length === 0 && activePubs.length > 0
                  ? 'No publications match your search.'
                  : getEmptyTabMessage(activeTab)
              }
            />
          </TabsContent>
        )}
      </PublicationsSearch>
    </Tabs>
  );
}
