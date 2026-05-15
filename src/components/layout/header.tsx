
"use client";

import Link from 'next/link';
import Image from 'next/image';
import logoOne from '../../../pic/logo-one.png';
import {
  Home,
  FlaskConical,
  Newspaper,
  FolderGit2,
  Users,
  GraduationCap,
  Download as DownloadIcon,
  MessageSquare,
  Menu,
  X,
  Diamond,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';
import React from 'react';
import { siteConfig } from '@/lib/site-config';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/research', label: 'Research', icon: FlaskConical },
  { href: '/publications', label: 'Publications', icon: Newspaper },
  { href: '/projects', label: 'Projects', icon: FolderGit2 },
  { href: '/team', label: 'Team', icon: Users },
  { href: '/courses', label: 'Courses', icon: GraduationCap },
  { href: '/resources', label: 'Resources', icon: DownloadIcon },
  { href: '/contact', label: 'Contact', icon: MessageSquare },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="site-header-tech sticky top-0 z-50 w-full">
      <div className="container mx-auto flex h-20 min-h-[5rem] min-w-0 items-center justify-between gap-2 px-4 sm:gap-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 hover:opacity-80 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center">
            <Image
              src={logoOne}
              alt=""
              width={72}
              height={72}
              className="rounded-full w-full h-full object-contain"
              priority
            />
          </div>
          <span className="text-gradient-luxury max-w-[9rem] truncate text-xs font-bold leading-none sm:max-w-none sm:text-sm sm:whitespace-nowrap md:text-base lg:text-lg">
            {siteConfig.piShortName}
          </span>
        </Link>

        {/* Desktop Navigation + theme：占剩余宽度，必要时横向滚动，避免被品牌区挤压 */}
        <div className="hidden min-w-0 flex-1 items-center justify-end gap-1 pl-2 md:flex lg:gap-2">
          <nav className="flex max-w-full flex-nowrap items-center justify-end gap-1 overflow-x-auto overscroll-x-contain [scrollbar-width:thin] lg:gap-2">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                asChild
                className={cn(
                  "nav-chip-tech text-sm font-medium transition-all duration-300 rounded-2xl motion-safe:transition-transform motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98]",
                  pathname === item.href
                    ? "bg-gradient-to-r from-primary/8 via-secondary/8 to-accent/8 text-primary font-semibold hover:from-primary/15 hover:via-secondary/15 hover:to-accent/15 luxury-border" // Active state
                    : "text-foreground/70 hover:text-gradient-luxury hover:bg-gradient-to-r hover:from-primary/3 hover:via-secondary/3 hover:to-accent/3" // Inactive state
                )}
              >
                <Link href={item.href}>
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="shrink-0 pl-1">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex shrink-0 items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle menu" className="text-primary hover:text-primary/80">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background/95 backdrop-blur-md p-0 text-foreground border-l border-primary/20">
              <div className="flex flex-col h-full">
                <div className="p-6 flex justify-between items-center border-b border-primary/20">
                    <Link
                      href="/"
                      className="flex min-w-0 max-w-[calc(100%-3rem)] items-center gap-2 hover:opacity-80 transition-opacity"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center">
                        <Image
                          src={logoOne}
                          alt=""
                          width={72}
                          height={72}
                          className="rounded-full w-full h-full object-contain"
                          priority
                        />
                      </div>
                      <span className="text-gradient-luxury min-w-0 flex-1 truncate text-left text-base font-bold leading-tight sm:text-lg">
                        {siteConfig.piShortName}
                      </span>
                    </Link>
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon" aria-label="Close menu" className="text-primary hover:text-primary/80">
                            <X className="h-6 w-6" />
                        </Button>
                    </SheetClose>
                </div>
                <nav className="flex-grow p-6 space-y-2">
                  {navItems.map((item) => (
                    <SheetClose key={item.href} asChild>
                       <Link
                        href={item.href}
                        className={cn(
                          "nav-chip-tech flex items-center space-x-3 text-md font-medium transition-all duration-300 rounded-2xl px-3 py-3 motion-safe:transition-transform motion-safe:active:scale-[0.99]",
                          pathname === item.href
                            ? "bg-gradient-to-r from-primary/8 via-secondary/8 to-accent/8 text-primary font-semibold luxury-border" // Active state
                            : "text-foreground/70 hover:text-gradient-luxury hover:bg-gradient-to-r hover:from-primary/3 hover:via-secondary/3 hover:to-accent/3" // Inactive state
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="p-6 border-t border-primary/20">
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Diamond className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="leading-snug">{siteConfig.labTagline}</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
