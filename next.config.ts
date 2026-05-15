import type {NextConfig} from 'next';

// Configure for static export suitable for GitHub Pages
const isGithubPages = process.env.GITHUB_PAGES === 'true';
// If deploying to user/org site, repoName can be empty. For project pages, set REPO_NAME in env.
const repoName = process.env.REPO_NAME || '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // For GitHub Pages project sites, prefix assets and paths with repo name
  basePath: isGithubPages && repoName ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages && repoName ? `/${repoName}/` : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
	  {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'staticmap.openstreetmap.de',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
