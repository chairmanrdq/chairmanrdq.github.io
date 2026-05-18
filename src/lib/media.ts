/**
 * Lab images: local public/images/ when NEXT_PUBLIC_USE_LOCAL_IMAGES=true,
 * otherwise GitHub raw (works without committing binaries).
 */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = (process.env.REPO_NAME || '').replace(/^\/+|\/+$/g, '');
const basePath = isGithubPages && repoName ? `/${repoName}` : '';

const REMOTE_IMAGE_BASE =
  'https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images';

const useLocalImages = process.env.NEXT_PUBLIC_USE_LOCAL_IMAGES === 'true';

export function assetPath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export function labImage(filename: string): string {
  const name = filename.replace(/^\//, '').replace(/^images\//, '');
  if (useLocalImages) {
    return assetPath(`/images/${name}`);
  }
  return `${REMOTE_IMAGE_BASE}/${name}`;
}

export function absoluteAssetUrl(path: string, siteOrigin: string): string {
  const origin = siteOrigin.replace(/\/$/, '');
  if (path.startsWith('http')) return path;
  return `${origin}${assetPath(path)}`;
}
