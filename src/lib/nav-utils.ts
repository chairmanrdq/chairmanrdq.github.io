/** Normalize paths for nav active state (supports trailingSlash routes). */
export function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  return path.replace(/\/+$/, '') || '/';
}

export function isNavActive(pathname: string, href: string): boolean {
  return normalizePath(pathname) === normalizePath(href);
}
