import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, BookOpen, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { piProfile } from '@/lib/team-data';
import { getPiAcademicLinks } from '@/lib/site-config';

function OrcidIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 256 256"
      fill="currentColor"
      aria-hidden
    >
      <path d="M256,128c0,70.7-57.3,128-128,128S0,198.7,0,128C0,57.3,57.3,0,128,0S256,57.3,256,128z M126.1,208.9h-20V128.4c0-12.8-2.4-23.1-7.1-30.8c-4.7-7.7-11.7-11.5-21.1-11.5c-8.1,0-14.7,3.1-19.9,9.2c-5.2,6.1-7.8,15.1-7.8,26.9v86.8H29.4V72.4h20.8v10c3.8-4.5,8.2-7.9,13.4-10.2c5.1-2.3,10.6-3.5,16.5-3.5c15.9,0,28.1,5.9,36.5,17.7c8.4,11.8,12.6,28.5,12.6,50.1L126.1,208.9z M198.8,208.9h-20.5V112.4c0-11-1.4-19.1-4.1-24.4c-2.8-5.2-7.3-7.8-13.5-7.8c-6.9,0-12.3,2.9-16.1,8.6c-3.9,5.8-5.8,13.9-5.8,24.4v85.7h-20.5V72.4h20.5v10.5c3.4-4.2,7.4-7.4,11.9-9.7c4.5-2.3,9.5-3.4,14.9-3.4c11.2,0,20.1,3.6,26.7,10.9c6.6,7.3,9.9,17.7,9.9,31.2V208.9z" />
    </svg>
  );
}

const linkIcons: Record<string, React.ReactNode> = {
  'Google Scholar': <BookOpen className="h-4 w-4" aria-hidden />,
  ORCID: <OrcidIcon />,
  GitHub: <Github className="h-4 w-4" aria-hidden />,
  LinkedIn: <Linkedin className="h-4 w-4" aria-hidden />,
};

export default function PiProfileCard() {
  const academicLinks = getPiAcademicLinks();

  return (
    <Card className="academic-card lg:col-span-3">
      <CardContent className="p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="flex shrink-0 justify-center md:justify-start">
            <Image
              src={piProfile.avatarUrl}
              alt={`Portrait of ${piProfile.name}`}
              width={200}
              height={280}
              className="h-56 w-40 rounded-lg border border-border object-cover md:h-64 md:w-44"
              priority
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium uppercase tracking-wide text-accent">Principal Investigator</p>
            <h2 className="type-subheading-lg mt-1">{piProfile.name}</h2>
            <p className="text-sm font-medium text-primary/90 mt-1">{piProfile.position}</p>
            <p className="text-sm text-muted-foreground">{piProfile.affiliation}</p>
            <p className="type-body text-sm mt-4 leading-relaxed">{piProfile.bio}</p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" aria-hidden />
                <a href={`mailto:${piProfile.email}`} className="text-accent hover:underline">
                  {piProfile.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" aria-hidden />
                <span className="text-foreground/85">{piProfile.office}</span>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {academicLinks.map((link) => (
                <Button key={link.name} variant="outline" size="sm" asChild className="outline-academic">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {linkIcons[link.name]}
                    <span className="ml-2">{link.name}</span>
                  </a>
                </Button>
              ))}
              <Button variant="ghost" size="sm" asChild>
                <Link href="/contact">Contact page</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
