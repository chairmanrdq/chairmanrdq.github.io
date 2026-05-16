
"use client";

import Link from 'next/link';
import Image from 'next/image';
import logoOne from '../../../pic/logo-one.png';
import type { LucideIcon } from 'lucide-react';
import {
  Home,
  FlaskConical,
  Newspaper,
  Rss,
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

const navItems: { href: string; label: string; icon: LucideIcon; shortLabel?: string }[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/research', label: 'Research', icon: FlaskConical },
  { href: '/publications', label: 'Publications', icon: Newspaper, shortLabel: 'Pub' },
  { href: '/projects', label: 'Projects', icon: FolderGit2 },
  { href: '/news', label: 'News', icon: Rss },
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
      <div className="container mx-auto flex min-h-[5rem] w-full min-w-0 items-center gap-3 px-4 sm:px-6 md:h-20 md:gap-4 lg:px-8">
        {/* 品牌区：固定最大宽度 + 单行省略，避免遮挡右侧导航（含 Home） */}
        <Link
          href="/"
          className="flex w-[min(42%,10.5rem)] shrink-0 items-center gap-2 overflow-hidden hover:opacity-80 transition-opacity sm:w-[min(38%,11.5rem)] md:max-w-[10.5rem] lg:max-w-[12rem]"
          onClick={() => setIsMobileMenuOpen(false)}
          title={siteConfig.piShortName}
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center md:h-12 md:w-12 lg:h-14 lg:w-14">
            <Image
              src={logoOne}
              alt=""
              width={56}
              height={56}
              className="h-full w-full rounded-full object-contain"
              priority
            />
          </div>
          <span className="text-gradient-luxury min-w-0 flex-1 truncate text-left text-xs font-bold leading-tight sm:text-sm md:text-sm lg:text-base">
            {siteConfig.piShortName}
          </span>
        </Link>

        {/* 桌面导航：占满剩余空间，必要时横向滚动 */}
        <div className="relative hidden min-w-0 flex-1 items-center justify-end gap-2 md:flex">
          <nav
            className="flex min-w-0 max-w-full flex-nowrap items-center justify-end gap-0.5 overflow-x-auto overscroll-x-contain py-1 pl-2 [scrollbar-width:thin] lg:gap-1.5"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                asChild
                className={cn(
                  'nav-chip-tech shrink-0 whitespace-nowrap rounded-2xl px-2 text-xs font-medium transition-all duration-300 motion-safe:transition-transform motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98] lg:px-3 lg:text-sm',
                  pathname === item.href
                    ? 'bg-gradient-to-r from-primary/8 via-secondary/8 to-accent/8 text-primary font-semibold hover:from-primary/15 hover:via-secondary/15 hover:to-accent/15 luxury-border'
                    : 'text-foreground/70 hover:text-gradient-luxury hover:bg-gradient-to-r hover:from-primary/3 hover:via-secondary/3 hover:to-accent/3',
                )}
              >
                <Link
                  href={item.href}
                  title={item.label}
                  aria-label={item.label}
                  className="inline-flex items-center gap-1"
                >
                  <item.icon className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden strokeWidth={2} />
                  {item.shortLabel ? (
                    <>
                      <span className="md:inline xl:hidden">{item.shortLabel}</span>
                      <span className="hidden xl:inline">{item.label}</span>
                    </>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="shrink-0 border-l border-primary/10 pl-1">
            <ThemeToggle />
          </div>
        </div>

        {/* 移动：主题 + 菜单 */}
        <div className="ml-auto flex shrink-0 items-center justify-end gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle menu" className="text-primary hover:text-primary/80">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background/95 backdrop-blur-md p-0 text-foreground border-l border-primary/20">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b border-primary/20 p-6">
                  <Link
                    href="/"
                    className="flex min-w-0 max-w-[calc(100%-3rem)] items-center gap-2 hover:opacity-80 transition-opacity"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center">
                      <Image
                        src={logoOne}
                        alt=""
                        width={56}
                        height={56}
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
                <nav className="flex-grow space-y-2 p-6">
                  {navItems.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "nav-chip-tech inline-flex items-center gap-1.5 rounded-2xl px-3 py-3 text-base font-medium transition-all duration-300 motion-safe:transition-transform motion-safe:active:scale-[0.99]",
                          pathname === item.href
                            ? "bg-gradient-to-r from-primary/8 via-secondary/8 to-accent/8 text-primary font-semibold luxury-border"
                            : "text-foreground/70 hover:text-gradient-luxury hover:bg-gradient-to-r hover:from-primary/3 hover:via-secondary/3 hover:to-accent/3"
                        )}
                      >
                        <item.icon className="h-4 w-4 shrink-0 opacity-90" aria-hidden strokeWidth={2} />
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="border-t border-primary/20 p-6">
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
