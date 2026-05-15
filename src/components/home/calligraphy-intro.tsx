'use client';

import { useEffect, useState, useCallback } from 'react';
import { Ma_Shan_Zheng } from 'next/font/google';
import { cn } from '@/lib/utils';

const calligraphyFont = Ma_Shan_Zheng({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const QUOTE = '人生万事须自为，跬步江山即寥廓。';

const STORAGE_KEY = 'calligraphy-intro-dismissed';

export default function CalligraphyIntro() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [exiting, setExiting] = useState(false);

  const dismiss = useCallback((persist: boolean) => {
    setExiting(true);
    window.setTimeout(() => {
      if (persist) {
        try {
          sessionStorage.setItem(STORAGE_KEY, '1');
        } catch {
          /* ignore */
        }
      }
      setShow(false);
    }, 520);
  }, []);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      try {
        sessionStorage.setItem(STORAGE_KEY, '1');
      } catch {
        /* ignore */
      }
      return;
    }
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* ignore */
    }
    setShow(true);
  }, []);

  useEffect(() => {
    if (!mounted || !show) return;
    const charMs = 95;
    const charDuration = 780;
    const pauseAfter = 950;
    const total = QUOTE.length * charMs + charDuration + pauseAfter;
    const id = window.setTimeout(() => dismiss(true), total);
    return () => window.clearTimeout(id);
  }, [mounted, show, dismiss]);

  if (!mounted || !show) return null;

  const chars = [...QUOTE];

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center gap-10 px-5 transition-opacity duration-500 ease-out',
        exiting ? 'pointer-events-none opacity-0' : 'opacity-100',
        'bg-[#FFFFFF]'
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="calligraphy-quote-label"
    >
      <p id="calligraphy-quote-label" className="sr-only">
        书法体引言动画：{QUOTE}
      </p>
      <div
        className={cn(
          calligraphyFont.className,
          'max-w-4xl text-center text-[clamp(1.65rem,4.5vw,2.85rem)] leading-[1.85] tracking-[0.08em] text-[#0A1526]',
          'drop-shadow-none'
        )}
      >
        {chars.map((ch, i) => (
          <span
            key={`${ch}-${i}`}
            className="calligraphy-char inline-block"
            style={{ animationDelay: `${i * 0.095}s` }}
          >
            {ch}
          </span>
        ))}
      </div>
      <div
        className="pointer-events-none absolute bottom-[18%] left-1/2 origin-center h-px w-[min(72vw,28rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#1D4ED8]/55 to-transparent motion-safe:animate-calligraphy-ink-line"
        aria-hidden
      />
      <button
        type="button"
        onClick={() => dismiss(true)}
        className="no-style rounded-full border-2 border-[#0A1526]/25 bg-[#FFFFFF] px-5 py-2 text-sm text-[#0A1526] transition-colors hover:border-[#1D4ED8] hover:text-[#1D4ED8]"
      >
        跳过
      </button>
    </div>
  );
}
