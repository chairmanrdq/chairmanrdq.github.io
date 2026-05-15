'use client';

import { Ma_Shan_Zheng } from 'next/font/google';
import { cn } from '@/lib/utils';

const brushFont = Ma_Shan_Zheng({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const LINE_1 = '人生万事须自为，';
const LINE_2 = '跬步江山即寥廓。';

/** 逐字毛笔落墨式显现（尊重 prefers-reduced-motion） */
export default function BrushCalligraphyQuote({ className }: { className?: string }) {
  const chars1 = [...LINE_1];
  const chars2 = [...LINE_2];
  const stepMs = 88;
  const charDelay = (index: number) => `${index * stepMs + (index % 4) * 10}ms`;
  const totalChars = chars1.length + chars2.length;
  const inkLineDelayMs = totalChars * stepMs + (totalChars % 4) * 10 + 180;

  return (
    <>
      <blockquote
        aria-label={`${LINE_1}${LINE_2}`}
        className={cn(
          brushFont.className,
          'brush-calligraphy-root text-[clamp(0.95rem,2.4vw,1.35rem)] leading-[1.85] tracking-[0.08em] text-[#0A1526] dark:text-foreground/90',
          className
        )}
      >
        <span className="block">
          {chars1.map((ch, i) => (
            <span
              key={`b1-${i}-${ch}`}
              className="brush-calligraphy-char"
              style={{ animationDelay: charDelay(i) }}
            >
              {ch}
            </span>
          ))}
        </span>
        <span className="mt-0.5 block">
          {chars2.map((ch, i) => (
            <span
              key={`b2-${i}-${ch}`}
              className="brush-calligraphy-char"
              style={{ animationDelay: charDelay(chars1.length + i) }}
            >
              {ch}
            </span>
          ))}
        </span>
      </blockquote>
      <div
        className="brush-calligraphy-ink-line mx-auto mt-4 h-px w-full max-w-[10rem] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        style={{ animationDelay: `${inkLineDelayMs}ms` }}
        aria-hidden
      />
    </>
  );
}
