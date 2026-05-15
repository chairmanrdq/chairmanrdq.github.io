import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { THEME_STORAGE_KEY } from '@/lib/theme-constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Research | Dr. RuiDong Qi',
    template: '%s | Dr. RuiDong Qi（祁瑞东）', // Replace with actual scholar name
  },
  description: 'Personal academic website of Dr. RuiDong Qi（祁瑞东）, showcasing research, publications, and professional activities.', // Replace
  verification: {
    google: '9adTvMEmfFATov8HAuYaYB9QK_tOM2trq8dGqcdRvi8',
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
        <ThemeProvider>
          <Header />
          <main className="flex-grow w-full py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
            <div
              className="page-shell mx-auto w-full max-w-6xl rounded-3xl border border-border/65 bg-card/50 shadow-lg shadow-primary/[0.06] ring-1 ring-primary/[0.07] backdrop-blur-xl dark:bg-card/40 dark:shadow-black/25 dark:ring-primary/15 px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-11 min-h-0"
            >
              {children}
            </div>
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
