import type { ReactNode } from 'react';
import { SectionTitle } from '@/components/ui/section-title';
import { Card, CardContent } from '@/components/ui/card';
import {
  ExternalLink,
  BookOpen,
  Presentation,
  Library,
  PenTool,
  Code,
  GitBranch,
  Network,
} from 'lucide-react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import {
  curatedVenues,
  labSlides,
  labSoftware,
  writingToolkit,
  type ResourceIconKey,
  type ResourceLinkItem,
} from '@/lib/resources-data';

export const metadata: Metadata = {
  title: 'Resources & Links',
  description: `Lab software, writing tools, and curated venues for ${siteConfig.piFullName}'s research group.`,
};

const ICONS: Record<ResourceIconKey, ReactNode> = {
  github: <GitBranch className="h-5 w-5 mr-2 text-accent flex-shrink-0" aria-hidden />,
  jupyter: <Code className="h-5 w-5 mr-2 text-accent flex-shrink-0" aria-hidden />,
  overleaf: <PenTool className="h-5 w-5 mr-2 text-accent flex-shrink-0" aria-hidden />,
  zotero: <Library className="h-5 w-5 mr-2 text-accent flex-shrink-0" aria-hidden />,
  presentation: <Presentation className="h-5 w-5 mr-2 text-accent flex-shrink-0" aria-hidden />,
  book: <BookOpen className="h-5 w-5 mr-2 text-accent flex-shrink-0" aria-hidden />,
  network: <Network className="h-5 w-5 mr-2 text-accent flex-shrink-0" aria-hidden />,
};

function CatalogLinkCard({ item }: { item: ResourceLinkItem }) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/10">
      <CardContent className="pt-6">
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="group block">
          <div className="flex items-start gap-2 mb-2">
            {ICONS[item.icon]}
            <h3 className="type-subheading group-hover:underline">{item.name}</h3>
          </div>
          <p className="text-xs text-muted-foreground mb-1">{item.category}</p>
          {item.description ? (
            <p className="text-sm text-foreground/75 leading-relaxed mb-2">{item.description}</p>
          ) : null}
          <p className="text-sm text-foreground/70 group-hover:text-accent transition-colors break-all">
            {item.url} <ExternalLink className="inline h-3 w-3 ml-0.5 align-baseline" aria-hidden />
          </p>
        </a>
      </CardContent>
    </Card>
  );
}

export default function ResourcesPage() {
  return (
    <div className="content-page-calm space-y-12">
      <Card className="luxury-card border-primary/10">
        <CardContent className="pt-6 text-sm text-foreground/80 leading-relaxed">
          Curated links for our computing-power and service-intelligence work: lab repositories, writing
          stack, standards/community slides, and representative venues—not a generic software catalog.
          Contact the PI for collaboration datasets under agreement.
        </CardContent>
      </Card>

      <section id="software" aria-labelledby="software-title">
        <SectionTitle id="software-title">Lab Software & Repositories</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {labSoftware.map((item) => (
            <CatalogLinkCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section id="writing" aria-labelledby="writing-title">
        <SectionTitle id="writing-title">Writing & References</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {writingToolkit.map((item) => (
            <CatalogLinkCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section id="datasets" aria-labelledby="datasets-title">
        <SectionTitle id="datasets-title">Datasets</SectionTitle>
        <Card className="luxury-card border-primary/10">
          <CardContent className="pt-6 type-body text-sm">
            No lab-hosted public datasets are listed yet. Contact{' '}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-accent hover:underline">
              {siteConfig.contactEmail}
            </a>{' '}
            for collaboration data under agreement.
          </CardContent>
        </Card>
      </section>

      <section id="slides" aria-labelledby="slides-title">
        <SectionTitle id="slides-title">Standards & Community Materials</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {labSlides.map((item) => (
            <CatalogLinkCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section id="friendly-links" aria-labelledby="friendly-links-title">
        <SectionTitle id="friendly-links-title">Curated Venues (Lab Reading List)</SectionTitle>
        <p className="mb-4 text-sm text-muted-foreground max-w-2xl">
          Representative conferences and journals for networking, systems, and data-centric research in
          the group.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {curatedVenues.map((item) => (
            <CatalogLinkCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
