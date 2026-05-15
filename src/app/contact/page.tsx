import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Briefcase, Building } from 'lucide-react';
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact information for Dr. RuiDong Qi（祁瑞东）, including email, office address, and office hours.', // Replace
};

// Mock Data - Replace with actual data
const contactData = {
  name: "Dr. RuiDong Qi（祁瑞东）", // Replace
  position: "Distinguished Lecturer in Computing Power Networks", // Replace
  affiliation: "School of Computer Science (School of Software)", // Replace
  university: "Inner Mongolia University", // Replace
  email: "imucsrdq@163.com", // Replace
  phone: "+1-234-567-8900", // Replace (optional)
  office: "Room 303, BeiZheng Building", // Replace
  addressLine1: "235 West University Road", // Replace
  addressLine2: "Saihan District, Hohhot, Inner Mongolia, China", // Replace
  // Replace with actual map placeholder or embed for your location service.
  // For Google Maps, get an embed URL. For a static image, provide a URL.
  mapPlaceholderUrl: "https://picsum.photos/seed/maplocation/800/450",
  dataAiHint: "city map university campus",
  socialMedia: [
    { name: "LinkedIn", url: "#", icon: Linkedin },
    { name: "Twitter", url: "#", icon: Twitter },
    { name: "GitHub", url: "#", icon: Github },
  ],
  officeHours: "Tuesdays & Thursdays, 2:00 PM - 4:00 PM (during term, or by appointment via email)" // Replace
};

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
            {contactData.phone && (
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground/90">Phone</h3>
                  <p className="text-foreground/90">{contactData.phone}</p>
                </div>
              </div>
            )}
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
            {contactData.socialMedia.length > 0 && (
              <div>
                <h3 className="font-semibold text-foreground/90 mb-2">Connect Online</h3>
                <div className="flex space-x-4">
                  {contactData.socialMedia.map(social => (
                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" 
                       aria-label={social.name}
                       className="text-muted-foreground hover:text-accent transition-colors">
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            )}
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
                    alt="Map showing office location" 
                    width={800} 
                    height={450}
                    className="w-full h-full object-cover"
                    data-ai-hint={contactData.dataAiHint}
                />
            </div>
             {/* For an actual interactive map, you might use an iframe or a map library. Example iframe:
            <iframe
              src="YOUR_GOOGLE_MAPS_EMBED_URL"
              width="100%"
              height="100%" // ensure parent has height or use aspect ratio
              style={{ border:0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
              className="w-full h-full" // ensure parent has height or use aspect ratio
            ></iframe>
            */}
          </CardContent>
        </Card>
      </div>
      </section>
    </div>
  );
}
