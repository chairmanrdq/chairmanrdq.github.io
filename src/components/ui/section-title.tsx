import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends PropsWithChildren {
  id?: string;
  className?: string;
}

export function SectionTitle({ children, id, className }: SectionTitleProps) {
  return (
    <h2 
      id={id} 
      className={cn(
        "text-2xl sm:text-3xl font-bold mb-6 md:mb-8 pb-3 border-b border-primary/25 text-primary bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text tracking-tight", 
        className
      )}
    >
      {children}
    </h2>
  );
}
