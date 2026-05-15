'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  id?: string;
  /** 完整标题文案（用于无障碍命名与逐字动画） */
  text: string;
  className?: string;
};

/**
 * 进入视口后，标题按字符顺序从模糊过渡到清晰（尊重 prefers-reduced-motion）。
 */
export default function ScrollBlurRevealTitle({ id, text, className }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const section = wrapRef.current?.closest('section');
    if (!section) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  const chars = [...text];

  return (
    <div ref={wrapRef} className="mb-4 flex justify-center">
      <h2
        id={id}
        aria-label={text}
        className={cn(
          'inline-flex max-w-full flex-wrap justify-center text-3xl font-bold tracking-tight lg:text-4xl',
          className
        )}
      >
        <span aria-hidden className="inline-flex flex-wrap justify-center">
          {chars.map((ch, i) => (
            <span
              key={`${ch}-${i}`}
              className={cn(
                'inline-block bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent',
                'motion-safe:transition-[opacity,filter,transform] motion-safe:duration-[620ms] motion-safe:ease-out'
              )}
              style={{
                opacity: visible ? 1 : 0,
                filter: visible ? 'blur(0px)' : 'blur(11px)',
                transform: visible ? 'translateY(0)' : 'translateY(0.2em)',
                transitionDelay: visible ? `${i * 40}ms` : '0ms',
              }}
            >
              {ch === ' ' ? '\u00a0' : ch}
            </span>
          ))}
        </span>
      </h2>
    </div>
  );
}
