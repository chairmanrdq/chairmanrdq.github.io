/**
 * One-time helper: reads src/lib/team-data.ts and writes content/team.json
 * Run: node scripts/migrate-team-to-json.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = readFileSync(join(root, 'src/lib/team-data.ts'), 'utf8');

function extractArray(name) {
  const re = new RegExp(`export const ${name}[^[]*\\[([\\s\\S]*?)\\];`);
  const m = src.match(re);
  return m ? m[1] : '';
}

function parseTeamMemberBlocks(block) {
  const items = [];
  const objRe = /\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}/g;
  for (const chunk of block.match(objRe) ?? []) {
    const id = /id:\s*(\d+)/.exec(chunk)?.[1];
    const name = /name:\s*'((?:\\'|[^'])*)'/.exec(chunk)?.[1]?.replace(/\\'/g, "'");
    const role = /role:\s*'((?:\\'|[^'])*)'/.exec(chunk)?.[1]?.replace(/\\'/g, "'");
    const avatar = /labImage\('([^']+)'\)/.exec(chunk)?.[1];
    if (!id || !name || !role || !avatar) continue;

    const interestsMatch = /researchInterests:\s*\[([\s\S]*?)\]/.exec(chunk);
    const bio = /bio:\s*'((?:\\'|[^'])*)'/.exec(chunk)?.[1]?.replace(/\\'/g, "'");
    const interests = interestsMatch
      ? [...interestsMatch[1].matchAll(/'((?:\\'|[^'])*)'/g)].map((m) => m[1].replace(/\\'/g, "'"))
      : [];

    const linkedin = /linkedin:\s*'([^']*)'/.exec(chunk)?.[1];
    const website = /website:\s*'([^']*)'/.exec(chunk)?.[1];
    const scholar = /googleScholar:\s*'([^']*)'/.exec(chunk)?.[1];

    const item = { id: Number(id), name, role, avatar, researchInterests: interests, bio: bio ?? '' };
    if (linkedin) item.linkedin = linkedin;
    if (website) item.website = website;
    if (scholar) item.googleScholar = scholar;
    items.push(item);
  }
  return items;
}

function parseAlumniBlocks(block) {
  const items = [];
  const objRe = /\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}/g;
  for (const chunk of block.match(objRe) ?? []) {
    const id = /id:\s*(\d+)/.exec(chunk)?.[1];
    const name = /name:\s*'((?:\\'|[^'])*)'/.exec(chunk)?.[1]?.replace(/\\'/g, "'");
    const role = /role:\s*'((?:\\'|[^'])*)'/.exec(chunk)?.[1]?.replace(/\\'/g, "'");
    const avatar = /labImage\('([^']+)'\)/.exec(chunk)?.[1];
    const currentPosition = /currentPosition:\s*'((?:\\'|[^'])*)'/.exec(chunk)?.[1]?.replace(/\\'/g, "'");
    const researchFocus = /researchFocus:\s*'((?:\\'|[^'])*)'/.exec(chunk)?.[1]?.replace(/\\'/g, "'");
    const website = /website:\s*'([^']*)'/.exec(chunk)?.[1];
    if (!id || !name || !role || !avatar) continue;
    const item = {
      id: Number(id),
      name,
      role,
      avatar,
      currentPosition: currentPosition ?? '',
      researchFocus: researchFocus ?? '',
    };
    if (website) item.website = website;
    items.push(item);
  }
  return items;
}

const out = {
  graduateStudents: parseTeamMemberBlocks(extractArray('graduateStudents')),
  undergraduateResearchers: parseTeamMemberBlocks(extractArray('undergraduateResearchers')),
  alumni: parseAlumniBlocks(extractArray('alumni')),
  undergraduateAlumni: parseAlumniBlocks(extractArray('undergraduateAlumni')),
};

writeFileSync(join(root, 'content/team.json'), JSON.stringify(out, null, 2) + '\n', 'utf8');
console.log('✓ content/team.json', {
  graduateStudents: out.graduateStudents.length,
  undergraduateResearchers: out.undergraduateResearchers.length,
  alumni: out.alumni.length,
  undergraduateAlumni: out.undergraduateAlumni.length,
});
