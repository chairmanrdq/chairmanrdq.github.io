import Link from 'next/link';
import { homeJumpLinks } from '@/lib/home-content';

export default function HomeJumpPills() {
  return (
    <nav
      aria-label="On this page"
      className="mb-10 flex flex-wrap justify-center gap-2 md:justify-start"
    >
      {homeJumpLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-full border border-primary/20 bg-card px-4 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
