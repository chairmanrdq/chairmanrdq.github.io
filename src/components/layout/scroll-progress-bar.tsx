'use client';

import { useEffect, useState } from 'react';

/**
 * 顶栏下方阅读进度条（轻量）；尊重 prefers-reduced-motion。
 */
export default function ScrollProgressBar() {
  const [p, setP] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduce(mq.matches);
    const onMq = () => setReduce(mq.matches);
    mq.addEventListener('change', onMq);

    const onScroll = () => {
      const el = document.documentElement;
      const scrollable = el.scrollHeight - el.clientHeight;
      const next = scrollable > 0 ? el.scrollTop / scrollable : 0;
      setP(Math.min(1, Math.max(0, next)));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      mq.removeEventListener('change', onMq);
    };
  }, []);

  if (reduce) {
    return (
      <div
        className="pointer-events-none fixed left-0 right-0 top-20 z-[49] h-px bg-border/80"
        aria-hidden={true}
      />
    );
  }

  return (
    <div
      className="pointer-events-none fixed left-0 right-0 top-20 z-[49] h-0.5 origin-left bg-muted"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(p * 100)}
      aria-label="Page read progress"
    >
      <div
        className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-[transform] duration-150 ease-out"
        style={{ transform: `scaleX(${p})`, transformOrigin: 'left' }}
      />
    </div>
  );
}
