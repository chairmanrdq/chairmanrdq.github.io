'use client';

import { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import type { Publication } from '@/lib/publications';

type Props = {
  publications: Publication[];
  children: (filtered: Publication[]) => React.ReactNode;
};

export default function PublicationsSearch({ publications, children }: Props) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return publications;
    return publications.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.authors.toLowerCase().includes(q) ||
        p.venue.toLowerCase().includes(q) ||
        (p.keywords?.some((kw) => kw.toLowerCase().includes(q)) ?? false),
    );
  }, [publications, query]);

  return (
    <div className="space-y-6">
      <div className="relative max-w-md">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, author, venue, keyword…"
          className="pl-9"
          aria-label="Search publications"
        />
      </div>
      {children(filtered)}
    </div>
  );
}
