'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

interface CopyBibtexButtonProps {
  bibtex: string;
  className?: string;
}

export default function CopyBibtexButton({ bibtex, className }: CopyBibtexButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className={className}
      onClick={handleCopy}
      aria-label={copied ? 'BibTeX copied' : 'Copy BibTeX to clipboard'}
    >
      {copied ? (
        <>
          <Check className="mr-1.5 h-4 w-4" /> Copied
        </>
      ) : (
        <>
          <Copy className="mr-1.5 h-4 w-4" /> BibTeX
        </>
      )}
    </Button>
  );
}
