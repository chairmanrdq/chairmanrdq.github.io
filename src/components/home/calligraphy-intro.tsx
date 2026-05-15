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
        'bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,hsl(185_90%_42%/0.22),transparent_55%),radial-gradient(ellipse_90%_60%_at_100%_100%,hsl(220_70%_35%/0.35),transparent_50%),linear-gradient(165deg,hsl(222_52%_7%)_0%,hsl(220_48%_10%)_45%,hsl(215_44%_12%)_100%)]'
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
          'max-w-4xl text-center text-[clamp(1.65rem,4.5vw,2.85rem)] leading-[1.85] tracking-[0.08em] text-cyan-50',
          'drop-shadow-[0_0_28px_hsl(185_100%_52%/0.45)]'
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
        className="pointer-events-none absolute bottom-[18%] left-1/2 origin-center h-px w-[min(72vw,28rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent motion-safe:animate-calligraphy-ink-line"
        aria-hidden
      />
      <button
        type="button"
        onClick={() => dismiss(true)}
        className="no-style rounded-full border border-cyan-400/35 bg-cyan-950/40 px-5 py-2 text-sm text-cyan-100/90 backdrop-blur-sm transition-colors hover:border-cyan-300/60 hover:bg-cyan-900/50 hover:text-cyan-50"
      >
        跳过
      </button>
    </div>
  );
}
