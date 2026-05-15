'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  id?: string;
  /** 完整标题文案（无障碍命名与整句渐变） */
  text: string;
  className?: string;
};

/**
 * 每次滚入所在 section 时播放一次：整句渐变（非逐字渐变）+ 自左向右揭开并去模糊。
 * 离开视口后保持最终态，再次进入会重播（尊重 prefers-reduced-motion）。
 */
export default function ScrollBlurRevealTitle({ id, text, className }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const wasIntersecting = useRef(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  /** 0 = 尚未首次进入；每次 false→true 进入视口 +1，用于 remount 重播动画 */
  const [playKey, setPlayKey] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    if (mq.matches) {
      setPlayKey(1);
      return;
    }

    const section = wrapRef.current?.closest('section');
    if (!section) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        const crossedIn = entry.isIntersecting && !wasIntersecting.current;
        wasIntersecting.current = entry.isIntersecting;
        if (crossedIn) {
          setPlayKey((k) => k + 1);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  const gradient =
    'inline-block max-w-full bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent';

  return (
    <div ref={wrapRef} className="mb-4 flex justify-center">
      <h2
        id={id}
        aria-label={text}
        className={cn(
          'inline-block max-w-full text-center text-3xl font-bold tracking-tight lg:text-4xl',
          className
        )}
      >
        <span
          key={reduceMotion ? 'static' : playKey === 0 ? 'pending' : playKey}
          className={cn(
            gradient,
            !reduceMotion && playKey === 0 && 'section-title-scroll-reveal-idle',
            !reduceMotion && playKey > 0 && 'section-title-scroll-reveal-play'
          )}
        >
          {text}
        </span>
      </h2>
    </div>
  );
}
