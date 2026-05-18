'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';

type Props = {
  lines: string[];
};

export default function CopyAddressButton({ lines }: Props) {
  const [copied, setCopied] = useState(false);
  const text = lines.filter(Boolean).join('\n');

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <Button type="button" variant="outline" size="sm" onClick={handleCopy} className="mt-2">
      {copied ? (
        <>
          <Check className="mr-1.5 h-4 w-4" /> Copied
        </>
      ) : (
        <>
          <Copy className="mr-1.5 h-4 w-4" /> Copy address
        </>
      )}
    </Button>
  );
}
