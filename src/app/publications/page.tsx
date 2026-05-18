import { SectionTitle } from '@/components/ui/section-title';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';
import { siteConfig, getOrcidUrl } from '@/lib/site-config';
import { selectedContributionBullets } from '@/lib/publications';
import PublicationsTabs from '@/components/publications/publications-tabs';

export const metadata: Metadata = {
  title: 'Publications',
  description: `Selected publications by ${siteConfig.piFullName}, including conference papers on clustering, federated QoS prediction, and density-peak modeling.`,
};

export default function PublicationsPage() {
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
                  <a href={orcidUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    ORCID
                  </a>
                </>
              ) : null}
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="page-section-reveal" style={{ animationDelay: '100ms' }}>
        <PublicationsTabs />
      </section>
    </div>
  );
}
