# Dr. RuiDong Qi — Lab Website

Static academic site for the computing power networks research group at Inner Mongolia University. Built with **Next.js 15** (App Router) and exported to static HTML for **GitHub Pages**.

## Quick start

```bash
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL and academic profile URLs
npm install
npm run dev                  # http://localhost:9002
```

## Build & deploy

```bash
npm run build                # syncs images, optimizes JPEGs, generates feed.xml, exports to out/
npm run preview              # serve out/ locally
```

For **GitHub Pages project sites**, set in CI or `.env.local`:

```bash
GITHUB_PAGES=true
REPO_NAME=your-repo-name
NEXT_PUBLIC_SITE_URL=https://username.github.io/your-repo-name
```

## Content updates

**All page content (edit JSON → `npm run validate:content` → build):**

| Content | File |
|---------|------|
| Publications | `content/publications.json` |
| News & home quick links | `content/news.json` |
| Projects | `content/projects.json` |
| Courses | `content/courses.json` |
| Team | `content/team.json` |
| Home gallery | `content/gallery.json` |
| Research themes | `content/research.json` |
| Resource links | `content/resources.json` |

See **`content/README.md`** (中文维护指南).

**Config & assets (not in `content/`):**

| Content | File |
|---------|------|
| Site URL, email, PI title, Scholar/ORCID env | `.env.local` + `src/lib/site-config.ts` |
| Recruitment mailto copy | `src/lib/recruitment.ts` |
| Lab images | `public/images/` or `npm run sync:images` |

## Scripts

- `npm run validate:content` — validate `content/*.json` (runs before build)
- `npm run sync:images` — download images to `public/images/`
- `npm run optimize:images` — compress JPEGs (requires `sharp`)
- `npm run generate:feed` — write `public/feed.xml` from `content/news.json`
- `npm run typecheck` — TypeScript check
