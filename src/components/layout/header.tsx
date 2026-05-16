
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

const navItems: { href: string; label: string; icon: LucideIcon }[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/research', label: 'Research', icon: FlaskConical },
  { href: '/publications', label: 'Publications', icon: Newspaper },
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
      {/* 网格：左列品牌、右列始终为导航/操作区，避免 flex 换行把 Home 挤到姓名下方 */}
      <div className="container mx-auto grid min-h-[5rem] w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-2 gap-y-0 px-4 sm:gap-x-3 sm:px-6 md:h-20 md:grid-cols-[auto_minmax(0,1fr)] md:items-center lg:px-8">
        <Link
          href="/"
          className="col-start-1 row-start-1 flex min-w-0 max-w-full shrink-0 items-center gap-2 hover:opacity-80 transition-opacity md:max-w-[14rem] lg:max-w-[15rem]"
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
          <span className="text-gradient-luxury min-w-0 max-w-[6.25rem] whitespace-normal break-words text-left text-xs font-bold leading-tight sm:max-w-[7rem] sm:text-sm md:max-w-[7.5rem] md:text-base lg:text-lg">
            {siteConfig.piShortName}
          </span>
        </Link>

        {/* 桌面：右列整列给导航 + 主题，单行不换行 */}
        <div className="col-start-2 row-start-1 hidden min-w-0 items-center justify-end gap-2 justify-self-stretch md:flex">
          <nav className="flex min-w-0 flex-1 flex-nowrap items-center justify-end gap-1 overflow-x-auto overscroll-x-contain py-1 [scrollbar-width:thin] lg:gap-2">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                asChild
                className={cn(
                  "nav-chip-tech shrink-0 whitespace-nowrap px-3 text-sm font-medium transition-all duration-300 rounded-2xl motion-safe:transition-transform motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98]",
                  pathname === item.href
                    ? "bg-gradient-to-r from-primary/8 via-secondary/8 to-accent/8 text-primary font-semibold hover:from-primary/15 hover:via-secondary/15 hover:to-accent/15 luxury-border"
                    : "text-foreground/70 hover:text-gradient-luxury hover:bg-gradient-to-r hover:from-primary/3 hover:via-secondary/3 hover:to-accent/3"
                )}
              >
                <Link href={item.href} className="inline-flex items-center gap-1">
                  <item.icon className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden strokeWidth={2} />
                  {item.label}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="shrink-0">
            <ThemeToggle />
          </div>
        </div>

        {/* 移动：右列为主题 + 菜单 */}
        <div className="col-start-2 row-start-1 flex shrink-0 items-center justify-end gap-1 justify-self-end md:hidden">
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
                    <span className="text-gradient-luxury min-w-0 flex-1 whitespace-normal break-words text-left text-base font-bold leading-tight sm:text-lg">
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
