import assert from 'node:assert/strict';
import { access, readFile, readdir, stat } from 'node:fs/promises';
import { join, posix } from 'node:path';

const root = 'dist';
const languages = ['et', 'ru', 'en'];
const htmlFiles = (await readdir(root, { recursive: true })).filter((file) => file.endsWith('.html'));
const routes = new Map();
const titles = new Set();
const descriptions = new Set();
const references = new Set();
const defaultHome = await readFile(join(root, 'index.html'), 'utf8');
const canonical = defaultHome.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
const base = canonical ? new URL(canonical).pathname.replace(/\/et\/$/, '') : '';
const site = canonical?.replace(/\/et\/$/, '');
const entities = (value) => value.replaceAll('&amp;', '&').replaceAll('&#x27;', "'");

for (const nativeFile of htmlFiles) {
  const file = nativeFile.replaceAll('\\', '/');
  const html = await readFile(join(root, file), 'utf8');
  const lang = file.split('/')[0];
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  const missing = file === '404.html' || file.endsWith('/404/index.html');
  assert.equal((html.match(/<h1(?: |>|\n)/g) || []).length, 1, file);
  assert.ok(title && description && html.includes('<main'), file);
  assert.ok(html.includes(`<html lang="${languages.includes(lang) ? lang : 'et'}">`), file);
  for (const image of html.matchAll(/<img\b[^>]+>/g)) assert.match(image[0], /\balt="/, file);
  for (const link of html.matchAll(/\b(?:href|src|srcSet|imageSrcSet)="([^"]+)"/gi)) {
    const path = entities(link[1]);
    if (path.startsWith('#')) {
      assert.ok(html.includes(`id="${path.slice(1)}"`), file + ' ' + path);
    } else if (path.startsWith('/')) {
      references.add(path);
    }
  }
  if (missing) {
    assert.ok(html.includes('content="noindex,follow"'), file);
    continue;
  }
  if (file === 'index.html') continue;
  assert.ok(!titles.has(title) && !descriptions.has(description), 'Duplicate metadata ' + file);
  titles.add(title);
  descriptions.add(description);
  const route = '/' + file.replace(/index\.html$/, '');
  if (site) {
    assert.ok(html.includes(`rel="canonical" href="${site + route}"`), file);
    assert.equal((html.match(/rel="alternate" hrefLang=/g) || []).length, 4, file);
    const structured = html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)?.[1];
    assert.ok(JSON.parse(structured)['@graph'].some((item) => item['@type'] === 'WebPage'), file);
  }
  routes.set(route, html);
}

for (const lang of languages) {
  const home = routes.get('/' + lang + '/');
  assert.ok(home, lang);
  assert.ok(home.includes('<fieldset disabled') === !home.includes('data-enquiry=""'), lang);
  for (const field of ['name', 'phone', 'email', 'work', 'message', 'privacy_acknowledged']) {
    assert.ok(home.includes(`name="${field}"`), lang + ' ' + field);
  }
}

for (const reference of references) {
  assert.ok(reference.startsWith(base + '/'), 'Wrong base path: ' + reference);
  const [pathname, hash] = reference.slice(base.length + 1).split('#');
  const file = join(root, pathname.endsWith('/') || pathname === '' ? posix.join(pathname, 'index.html') : pathname);
  await access(file);
  if (hash) assert.ok((await readFile(file, 'utf8')).includes(`id="${hash}"`), reference);
  if (pathname.endsWith('.js')) assert.ok((await stat(file)).size < 8000, 'Client JS exceeds 8 KB');
}

const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((entry) => entities(entry[1]));
if (site) assert.deepEqual(new Set(sitemapUrls), new Set([...routes.keys()].map((route) => site + route)));
assert.ok((await readFile(join(root, 'robots.txt'), 'utf8')).includes('User-agent: *'));
console.log(`Verified ${htmlFiles.length} HTML files, ${routes.size} content routes and ${references.size} internal link and asset targets.`);
