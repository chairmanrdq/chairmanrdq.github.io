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
        "type-section-title mb-6 border-b border-border pb-3 md:mb-8 text-foreground",
        className
      )}
    >
      {children}
    </h2>
  );
}
