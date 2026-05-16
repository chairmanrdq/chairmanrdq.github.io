import { Source_Sans_3, Source_Serif_4 } from 'next/font/google';

/** 正文、导航、UI（Source Sans 3：清晰、偏学术出版） */
export const fontSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  adjustFontFallback: true,
});

/** 页面标题、区块标题（Source Serif 4：与期刊风配色更协调） */
export const fontSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  adjustFontFallback: true,
});

export const fontVariables = `${fontSans.variable} ${fontSerif.variable}`.trim();
