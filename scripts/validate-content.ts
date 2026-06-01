/**
 * Validate content/*.json before build. Run: npm run validate:content
 */
import { existsSync } from 'node:fs';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  validatePublicationsFile,
  validateNewsFile,
  validateProjectsFile,
  validateCoursesFile,
  validateTeamFile,
  validateGalleryFile,
  validateResearchFile,
  validateResourcesFile,
  collectTeamAvatars,
  collectGalleryFiles,
} from '../src/lib/content/schemas';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = join(root, 'content');
const imagesDir = join(root, 'public', 'images');

function readJson(name: string): unknown {
  const path = join(contentDir, name);
  return JSON.parse(readFileSync(path, 'utf8'));
}

function warnMissingImages(files: string[], label: string): void {
  const missing: string[] = [];
  for (const file of files) {
    if (!existsSync(join(imagesDir, file))) {
      missing.push(file);
    }
  }
  if (missing.length > 0) {
    console.warn(`⚠ ${label}: missing in public/images/ → ${missing.join(', ')}`);
    console.warn('  Run npm run sync:images or copy files before deploy.');
  }
}

try {
  validatePublicationsFile(readJson('publications.json'));
  console.log('✓ content/publications.json');

  validateNewsFile(readJson('news.json'));
  console.log('✓ content/news.json');

  validateProjectsFile(readJson('projects.json'));
  console.log('✓ content/projects.json');

  validateCoursesFile(readJson('courses.json'));
  console.log('✓ content/courses.json');

  const team = validateTeamFile(readJson('team.json'));
  console.log('✓ content/team.json');
  warnMissingImages(collectTeamAvatars(team), 'team.json avatars');

  const gallery = validateGalleryFile(readJson('gallery.json'));
  console.log('✓ content/gallery.json');
  warnMissingImages(collectGalleryFiles(gallery), 'gallery.json');

  validateResearchFile(readJson('research.json'));
  console.log('✓ content/research.json');

  validateResourcesFile(readJson('resources.json'));
  console.log('✓ content/resources.json');

  console.log('\nAll content files valid.');
} catch (e) {
  console.error('Content validation failed:');
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
}
