import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { build } from 'vite';

await build();
const manifest = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'));
const entry = Object.values(manifest).find((item) => item.isEntry);
if (!entry?.file || !entry.css?.length) throw new Error('The client manifest is incomplete.');

await build({
  build: {
    ssr: 'src/render.tsx',
    outDir: '.ssr',
    manifest: false,
    copyPublicDir: false,
  },
});

const { generate, configuredDomain } = await import('../.ssr/render.js');
const siteUrl = (process.env.SITE_URL || configuredDomain).trim().replace(/\/+$/, '');
let base = '';
if (siteUrl) {
  const parsed = new URL(siteUrl);
  if (!['http:', 'https:'].includes(parsed.protocol) || parsed.search || parsed.hash || parsed.username || parsed.password) {
    throw new Error('SITE_URL must be an absolute HTTP(S) URL without query, fragment or credentials.');
  }
  base = parsed.pathname.replace(/\/+$/, '');
}
const output = generate({
  base,
  siteUrl,
  script: entry.file,
  styles: entry.css,
  pagesPreview: process.env.PAGES_PREVIEW === '1',
});
await Promise.all(Object.entries(output).map(async ([name, body]) => {
  const path = 'dist/' + name;
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, body);
}));
console.log(`Generated ${Object.keys(output).length} static files.`);
