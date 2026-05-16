import { SectionTitle } from '@/components/ui/section-title';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Globe, Linkedin, BookUser } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import { recruitmentChecklist, recruitmentEmail, recruitmentIntro } from '@/lib/recruitment';
import { researchOverview, researchThemes } from '@/lib/research-content';
import { isValidHttpUrl } from '@/lib/utils';
import PiProfileCard from '@/components/team/pi-profile-card';
import {
  alumni,
  graduateStudents,
  undergraduateAlumni,
  undergraduateResearchers,
  type TeamMember,
} from '@/lib/team-data';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Team',
  description: `Research group led by ${siteConfig.piFullName}: PI profile, graduate and undergraduate researchers, and alumni.`,
};

function MemberLinks({ member }: { member: TeamMember }) {
  return (
    <motion className="flex flex-wrap gap-x-3 gap-y-2 items-center mt-4">
      {member.linkedin ? (
        <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-accent p-1 h-auto">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn profile of ${member.name}`}
          >
            <Linkedin size={18} className="mr-1" /> LinkedIn
          </a>
        </Button>
      ) : null}
      {isValidHttpUrl(member.website) ? (
        <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-accent p-1 h-auto">
          <a
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Website of ${member.name}`}
          >
            <Globe size={18} className="mr-1" /> Website
          </a>
        </Button>
      ) : null}
      {member.googleScholar ? (
        <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-accent p-1 h-auto">
          <a
            href={member.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Google Scholar of ${member.name}`}
          >
            <BookUser size={18} className="mr-1" /> Scholar
          </a>
        </Button>
      ) : null}
    </div>
  );
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row overflow-hidden border-primary/10">
      <div className="sm:shrink-0 sm:w-1/3 bg-secondary/30 flex items-center justify-center p-4">
        <Image
          src={member.avatarUrl}
          alt={`Photo of ${member.name}`}
          width={220}
          height={220}
          className="rounded-full border-[6px] border-background shadow-md object-cover aspect-square"
        />
      </div>
      <CardContent className="p-6 flex-grow sm:w-2/3">
        <h3 className="type-subheading-lg">{member.name}</h3>
        <p className="text-md text-accent font-medium">{member.role}</p>
        <p className="text-sm text-muted-foreground mt-1">
          Interests: {member.researchInterests.join(', ')}
        </p>
        <p className="text-sm text-foreground/80 mt-3 leading-relaxed">{member.bio}</p>
        <MemberLinks member={member} />
      </CardContent>
    </Card>
  );
}

export default function TeamPage() {
  return (
    <div id="team-page" className="content-page-calm space-y-12 scroll-mt-24">
      <section
        id="lab-overview"
        aria-labelledby="lab-overview-title"
        className="page-section-reveal"
        style={{ animationDelay: '0ms' }}
      >
        <SectionTitle id="lab-overview-title">Lab Overview</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="shadow-md border-primary/10 lg:col-span-2">
            <CardContent className="p-6">
              <h3 className="type-subheading-lg mb-3">Research Directions</h3>
              <p className="type-body text-sm md:text-base mb-5">{researchOverview}</p>
              <div className="space-y-3">
                {researchThemes.map((theme, index) => (
                  <div className="flex items-start gap-3" key={theme.title}>
                    <span className="text-primary font-semibold">{index + 1}.</span>
                    <p className="text-sm text-foreground/80">
                      <span className="font-medium text-primary/90">{theme.title}:</span> {theme.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md border-primary/10">
            <CardContent className="p-6">
              <h3 className="type-subheading-lg mb-3">Prospective Students</h3>
              <p className="type-body text-sm mb-4">{recruitmentIntro}</p>
              <ul className="space-y-2 text-sm list-none">
                {recruitmentChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-muted-foreground">•</span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground">•</span>
                  <span className="text-foreground/80">
                    Contact:{' '}
                    <a className="text-accent hover:underline" href={`mailto:${recruitmentEmail}`}>
                      {recruitmentEmail}
                    </a>
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section
        id="principal-investigator"
        aria-labelledby="pi-title"
        className="page-section-reveal"
        style={{ animationDelay: '40ms' }}
      >
        <SectionTitle id="pi-title">Principal Investigator</SectionTitle>
        <PiProfileCard />
      </section>

      <section
        id="current-team"
        aria-labelledby="current-team-title"
        className="page-section-reveal scroll-mt-24"
        style={{ animationDelay: '80ms' }}
      >
        <SectionTitle id="current-team-title">Graduate Students</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {graduateStudents.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      <section
        id="undergraduate-team"
        aria-labelledby="undergraduate-team-title"
        className="page-section-reveal"
        style={{ animationDelay: '160ms' }}
      >
        <SectionTitle id="undergraduate-team-title">Undergraduate Researchers</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {undergraduateResearchers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      <section
        id="alumni"
        aria-labelledby="alumni-title"
        className="page-section-reveal"
        style={{ animationDelay: '240ms' }}
      >
        <SectionTitle id="alumni-title">Lab Alumni</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map((member) => (
            <Card key={member.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/10">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <Image
                  src={member.avatarUrl}
                  alt={`Photo of ${member.name}`}
                  width={120}
                  height={120}
                  className="rounded-full border-2 border-background shadow-sm object-cover aspect-square mb-3"
                />
                <h3 className="type-subheading">{member.name}</h3>
                <p className="text-sm text-accent/90 font-medium">{member.role}</p>
                <p className="text-xs text-muted-foreground mt-0.5">Focus: {member.researchFocus}</p>
                <p className="text-sm text-foreground/80 mt-2">Now: {member.currentPosition}</p>
                {isValidHttpUrl(member.website) && (
                  <Button variant="link" size="sm" asChild className="mt-2 text-accent px-0 h-auto">
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Website of ${member.name}`}
                    >
                      <Globe size={14} className="mr-1" /> Profile
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="undergraduate-alumni"
        aria-labelledby="undergraduate-alumni-title"
        className="page-section-reveal"
        style={{ animationDelay: '320ms' }}
      >
        <SectionTitle id="undergraduate-alumni-title">Undergraduate Alumni</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {undergraduateAlumni.map((member) => (
            <Card key={member.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 border-primary/10">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <Image
                  src={member.avatarUrl}
                  alt={`Photo of ${member.name}`}
                  width={120}
                  height={120}
                  className="rounded-full border-2 border-background shadow-sm object-cover aspect-square mb-3"
                />
                <h3 className="type-subheading">{member.name}</h3>
                <p className="text-sm text-accent/90 font-medium">{member.role}</p>
                <p className="text-xs text-muted-foreground mt-0.5">Focus: {member.researchFocus}</p>
                <p className="text-sm text-foreground/80 mt-2">Now: {member.currentPosition}</p>
                {isValidHttpUrl(member.website) && (
                  <Button variant="link" size="sm" asChild className="mt-2 text-accent px-0 h-auto">
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Website of ${member.name}`}
                    >
                      <Globe size={14} className="mr-1" /> Profile
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
