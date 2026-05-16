/**
 * Static asset paths for lab images under public/images/.
 * Respects GitHub Pages basePath (REPO_NAME + GITHUB_PAGES at build time).
 */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = (process.env.REPO_NAME || '').replace(/^\/+|\/+$/g, '');
const basePath = isGithubPages && repoName ? `/${repoName}` : '';

export function assetPath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

/** Lab photo in public/images (e.g. labImage('rdq2.jpg')). */
export function labImage(filename: string): string {
  const name = filename.replace(/^\//, '');
  return assetPath(`/images/${name}`);
}

export function absoluteAssetUrl(path: string, siteOrigin: string): string {
  const origin = siteOrigin.replace(/\/$/, '');
  return `${origin}${assetPath(path)}`;
}
