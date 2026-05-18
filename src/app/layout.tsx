import type { Metadata } from 'next';
import './globals.css';
import { fontSans, fontVariables } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { THEME_STORAGE_KEY } from '@/lib/theme-constants';
import JsonLd from '@/components/seo/json-ld';
import ScrollProgressBar from '@/components/layout/scroll-progress-bar';
import { siteConfig, getCanonicalSiteUrl, getSiteKeywords } from '@/lib/site-config';
import { absoluteAssetUrl } from '@/lib/media';

const canonical = getCanonicalSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonical),
  title: {
    default: `${siteConfig.piShortName} | ${siteConfig.institutionLegalName}`,
    template: `%s | ${siteConfig.piShortName}`,
  },
  description: siteConfig.labTagline,
  keywords: getSiteKeywords(),
  alternates: {
    types: {
      'application/rss+xml': [{ url: '/feed.xml', title: `${siteConfig.piShortName} — Lab News` }],
    },
  },
  verification: {
    google: '9adTvMEmfFATov8HAuYaYB9QK_tOM2trq8dGqcdRvi8',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
    url: canonical,
    siteName: siteConfig.institutionLegalName,
    title: siteConfig.piShortName,
    description: siteConfig.labTagline,
    images: [{ url: absoluteAssetUrl('/images/rdq2.jpg', canonical), alt: siteConfig.piFullName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.piShortName,
    description: siteConfig.labTagline,
    images: [absoluteAssetUrl('/images/rdq2.jpg', canonical)],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeInitScript = `(function(){try{var k='${THEME_STORAGE_KEY}';var t=localStorage.getItem(k);if(t==='dark'){document.documentElement.classList.add('dark');}else if(t==='light'){document.documentElement.classList.remove('dark');}else{if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}}catch(e){}})();`;

  return (
    <html lang="en" suppressHydrationWarning className={fontVariables}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={cn(
          fontSans.className,
          'font-sans antialiased flex flex-col min-h-screen bg-background text-foreground text-[15px] leading-relaxed md:text-base',
        )}
      >
        <a href="#main-content" className="skip-to-main">
          <span className="sr-only">跳到主内容 · </span>
          Skip to main content
        </a>
        <JsonLd />
        <ThemeProvider>
          <ScrollProgressBar />
          <Header />
          <main
            id="main-content"
            className="typography-content flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8"
          >
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
