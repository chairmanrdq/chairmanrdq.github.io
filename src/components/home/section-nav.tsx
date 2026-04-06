'use client';

import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

type NavItem = {
  id: string;
  label: string;
};

const SECTION_ITEMS: NavItem[] = [
  { id: 'prospective-students', label: 'Students' },
  { id: 'research-focus', label: 'Research' },
  { id: 'featured-publications', label: 'Publications' },
  { id: 'news', label: 'Highlights' },
  { id: 'research-snapshot', label: 'Snapshot' },
  { id: 'photo-highlights', label: 'Visuals' },
];

export default function SectionNav() {
  const [activeId, setActiveId] = useState<string>(SECTION_ITEMS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0.15, 0.35, 0.55, 0.75],
      }
    );

    SECTION_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const items = useMemo(() => SECTION_ITEMS, []);

  return (
    <nav
      aria-label="Section navigation"
      className="mb-14 rounded-2xl border border-primary/20 bg-background/70 backdrop-blur-md p-2 sticky top-20 z-30"
    >
      <div className="flex flex-wrap gap-2 justify-center">
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'px-3 py-1.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-300',
                active
                  ? 'bg-gradient-to-r from-primary/22 via-secondary/20 to-accent/20 text-primary border border-primary/35'
                  : 'text-foreground/65 border border-transparent hover:text-primary hover:border-primary/20 hover:bg-primary/6'
              )}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
