/**
 * Validate content/*.json before build. Run: npm run validate:content
 */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  validatePublicationsFile,
  validateNewsFile,
  validateProjectsFile,
  validateCoursesFile,
} from '../src/lib/content/schemas';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = join(root, 'content');

function readJson(name: string): unknown {
  const path = join(contentDir, name);
  return JSON.parse(readFileSync(path, 'utf8'));
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
  console.log('\nAll content files valid.');
} catch (e) {
  console.error('Content validation failed:');
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
}
