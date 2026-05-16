import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { footerNavLinks } from '@/lib/site-nav';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer-prairie border-t border-border/60 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div className="text-center md:text-left">
            <p className="font-serif text-sm font-semibold text-foreground">{siteConfig.piShortName}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{siteConfig.institution}</p>
            <p className="mt-3 text-xs text-muted-foreground">
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-accent hover:underline">
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-end">
            {footerNavLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.piFullName}. All rights reserved.
          </p>
          <a
            href="#main-content"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowUp className="h-3.5 w-3.5" aria-hidden />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
