
"use client";

import Link from 'next/link';
import { Home, FlaskConical, Newspaper, FolderGit2, Users, GraduationCap, Download as DownloadIcon, MessageSquare, Menu, X, Cpu, Leaf, Battery, Sparkles } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import React from 'react';

// Replace with actual scholar name
const SCHOLAR_NAME = "Dr. Eleanor Vance";

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
    <header className="bg-background/95 backdrop-blur-md sticky top-0 z-50 w-full border-b border-primary/20 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl sm:text-2xl font-bold hover:opacity-80 transition-opacity" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="animated-gradient p-2 rounded-lg">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <span className="text-gradient-premium">
            {SCHOLAR_NAME}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              className={cn(
                "text-sm font-medium transition-all duration-300 rounded-xl",
                pathname === item.href
                  ? "bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 text-primary font-semibold hover:from-primary/20 hover:via-secondary/20 hover:to-accent/20 premium-border" // Active state
                  : "text-foreground/70 hover:text-gradient-premium hover:bg-gradient-to-r hover:from-primary/5 hover:via-secondary/5 hover:to-accent/5" // Inactive state
              )}
            >
              <Link href={item.href}>
                <item.icon className="h-4 w-4 mr-2" />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle menu" className="text-primary hover:text-primary/80">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background/95 backdrop-blur-md p-0 text-foreground border-l border-primary/20">
              <div className="flex flex-col h-full">
                <div className="p-6 flex justify-between items-center border-b border-primary/20">
                    <Link href="/" className="flex items-center gap-2 text-lg font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                      <div className="animated-gradient p-2 rounded-lg">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gradient-premium">
                        {SCHOLAR_NAME}
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
                          "flex items-center space-x-3 text-md font-medium transition-all duration-300 rounded-xl px-3 py-3",
                          pathname === item.href
                            ? "bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 text-primary font-semibold premium-border" // Active state
                            : "text-foreground/70 hover:text-gradient-premium hover:bg-gradient-to-r hover:from-primary/5 hover:via-secondary/5 hover:to-accent/5" // Inactive state
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="p-6 border-t border-primary/20">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Sparkles className="h-4 w-4 text-accent" />
                    <span>Leading AI Innovation</span>
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
