import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, BookOpen, Briefcase } from 'lucide-react';
import Image from "next/image";
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${siteConfig.piFullName}: email, office address, and office hours.`,
};

const contactData = {
  name: siteConfig.piFullName,
  position: "Principal Investigator in Computing Power Networks",
  affiliation: "School of Computer Science (School of Software)",
  university: siteConfig.institutionLegalName,
  email: siteConfig.contactEmail,
  phone: "" as string,
  office: "Room 303, BeiZheng Building",
  addressLine1: "235 West University Road",
  addressLine2: "Saihan District, Hohhot, Inner Mongolia, China",
  /** OpenStreetMap static preview（内蒙古大学附近）；可换为自建地图嵌入 */
  mapPlaceholderUrl:
    "https://staticmap.openstreetmap.de/staticmap.php?center=40.8183,111.6520&zoom=15&size=800x450&markers=40.8183,111.6520,red-pushpin",
  dataAiHint: "city map university campus",
  officeHours:
    "Tuesdays & Thursdays, 2:00 PM - 4:00 PM (during term, or by appointment via email)",
};

const socialMedia = [
  { name: "Google Scholar", url: siteConfig.academic.googleScholar, icon: BookOpen },
  { name: "LinkedIn", url: siteConfig.academic.linkedinSearch, icon: Linkedin },
  { name: "GitHub", url: siteConfig.academic.githubProfile, icon: Github },
].filter((s) => Boolean(s.url));

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="page-section-reveal" style={{ animationDelay: "0ms" }}>
        <SectionTitle>Get in Touch</SectionTitle>
      </section>

      <section className="page-section-reveal" style={{ animationDelay: "90ms" }}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <Card className="lg:col-span-2 shadow-lg border-primary/10">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">{contactData.name}</CardTitle>
            <p className="text-md text-foreground/80">{contactData.position}</p>
            <p className="text-sm text-foreground/70">{contactData.affiliation}, {contactData.university}</p>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex items-start">
              <Mail className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground/90">Email</h3>
                <a href={`mailto:${contactData.email}`} className="text-accent hover:underline">{contactData.email}</a>
              </div>
            </div>
            {contactData.phone ? (
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground/90">Phone</h3>
                  <p className="text-foreground/90">{contactData.phone}</p>
                </div>
              </div>
            ) : null}
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground/90">Office Address</h3>
                <p className="text-foreground/90">{contactData.office}</p>
                <p className="text-foreground/90">{contactData.addressLine1}</p>
                <p className="text-foreground/90">{contactData.addressLine2}</p>
              </div>
            </div>
             <div className="flex items-start">
              <Briefcase className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground/90">Office Hours</h3>
                <p className="text-foreground/90">{contactData.officeHours}</p>
              </div>
            </div>
            {socialMedia.length > 0 ? (
              <div>
                <h3 className="font-semibold text-foreground/90 mb-2">Connect Online</h3>
                <div className="flex space-x-4">
                  {socialMedia.map((social) => (
                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer"
                       aria-label={social.name}
                       className="text-muted-foreground hover:text-accent transition-colors">
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </CardContent>
        </Card>

        <Card className="shadow-lg overflow-hidden border-primary/10">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Campus Location</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="aspect-video bg-secondary">
                <Image
                    src={contactData.mapPlaceholderUrl}
                    alt="Map showing office location near Inner Mongolia University"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                    data-ai-hint={contactData.dataAiHint}
                />
            </div>
          </CardContent>
        </Card>
      </div>
      </section>
    </div>
  );
}
