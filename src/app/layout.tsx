import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { THEME_STORAGE_KEY } from '@/lib/theme-constants';
import JsonLd from '@/components/seo/json-ld';
import ScrollProgressBar from '@/components/layout/scroll-progress-bar';
import { siteConfig, getCanonicalSiteUrl } from '@/lib/site-config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const canonical = getCanonicalSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonical),
  title: {
    default: `${siteConfig.piShortName} | ${siteConfig.institutionLegalName}`,
    template: `%s | ${siteConfig.piShortName}`,
  },
  description: siteConfig.labTagline,
  verification: {
    google: '9adTvMEmfFATov8HAuYaYB9QK_tOM2trq8dGqcdRvi8',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: canonical,
    siteName: siteConfig.institutionLegalName,
    title: siteConfig.piShortName,
    description: siteConfig.labTagline,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.piShortName,
    description: siteConfig.labTagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeInitScript = `(function(){try{var k='${THEME_STORAGE_KEY}';var t=localStorage.getItem(k);if(t==='dark'){document.documentElement.classList.add('dark');}else if(t==='light'){document.documentElement.classList.remove('dark');}else{if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}}catch(e){}})();`;

  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased flex flex-col min-h-screen bg-background text-foreground">
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <JsonLd />
        <ThemeProvider>
          <ScrollProgressBar />
          <Header />
          <main id="main-content" className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
