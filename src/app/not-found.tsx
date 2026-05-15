import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site-config';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-sm text-muted-foreground">404</p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        The page you requested does not exist or has been moved. Return to the {siteConfig.labName} home
        or use the navigation menu.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild className="rounded-xl">
          <Link href="/">Back to home</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-xl outline-academic">
          <Link href="/publications">Publications</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-xl outline-academic">
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
    </div>
  );
}
