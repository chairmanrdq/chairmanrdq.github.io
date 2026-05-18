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
        "type-section-title-gradient", 
        className
      )}
    >
      {children}
    </h2>
  );
}
