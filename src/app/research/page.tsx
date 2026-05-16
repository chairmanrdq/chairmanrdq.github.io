import { SectionTitle } from '@/components/ui/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { researchOverview, researchThemes } from '@/lib/research-content';

export const metadata: Metadata = {
  title: 'Research',
  description: `Research interests of ${siteConfig.piFullName}: computing power networks, green scheduling, and service intelligence.`,
};

export default function ResearchPage() {
  return (
    <div className="content-page-calm space-y-12">
      <section
        id="research-overview"
        aria-labelledby="research-overview-title"
        className="page-section-reveal"
        style={{ animationDelay: '0ms' }}
      >
        <SectionTitle id="research-overview-title">Research Overview</SectionTitle>
        <Card className="shadow-md border-primary/10">
          <CardContent className="pt-6">
            <p className="type-body text-lg">{researchOverview}</p>
            <p className="type-caption mt-4">
              For student recruitment and application materials, see the{' '}
              <a href="/team#lab-overview" className="text-accent hover:underline">
                Team page
              </a>
              .
            </p>
          </CardContent>
        </Card>
      </section>

      <section
        id="research-areas"
        aria-labelledby="research-areas-title"
        className="page-section-reveal"
        style={{ animationDelay: '90ms' }}
      >
        <SectionTitle id="research-areas-title">Key Research Areas</SectionTitle>
        <div className="space-y-8">
          {researchThemes.map((area) => (
            <Card
              key={area.title}
              className="shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/10"
            >
              <CardHeader>
                <CardTitle className="text-primary/90">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="type-body mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.keywords.map((keyword) => (
                    <Badge key={keyword} variant="secondary" className="font-normal bg-secondary hover:bg-secondary/80">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
