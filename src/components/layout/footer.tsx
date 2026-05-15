import React from 'react';
import { siteConfig } from '@/lib/site-config';

export default function Footer() {
  return (
    <footer className="site-footer-prairie py-8">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-medium tracking-wide text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.piFullName}. All rights reserved.
        </p>
        <p className="mx-auto mt-2 max-w-3xl text-xs leading-relaxed text-muted-foreground/90">
          {siteConfig.institution}
        </p>
      </div>
    </footer>
  );
}
