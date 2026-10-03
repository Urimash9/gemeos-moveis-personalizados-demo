import { readFile, readdir, stat, mkdir, cp, rm } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { Script } from 'node:vm';
import { execFileSync } from 'node:child_process';

const root = resolve(import.meta.dirname, '..');
const html = await readFile(join(root, 'index.html'), 'utf8');
const chunks = (await readdir(join(root, 'approved'))).filter(f => /^chunk-\d+\.txt$/.test(f)).sort();
const base = (await Promise.all(chunks.map(f => readFile(join(root, 'approved', f), 'utf8')))).join('');
for (const source of [html, base]) {
  for (const [, script] of source.matchAll(/<script\b(?![^>]*type="(?:module|application\/ld\+json)")[^>]*>([\s\S]*?)<\/script>/g)) new Script(script);
}
const files = ['index.html', 'approved', 'assets'];
for (const folder of ['styles', 'config']) {
  try { await stat(join(root, folder)); files.push(folder); } catch (e) { if (e.code !== 'ENOENT') throw e; }
}
for (const file of ['scripts/interactions.js', 'config/site.js', 'config/assets.js']) {
  try { await stat(join(root, file)); execFileSync(process.execPath, ['--check', join(root, file)]); }
  catch (e) { if (e.code !== 'ENOENT') throw e; }
}
const assetSources = [html];
for (const file of ['config/site.js', 'config/assets.js']) {
  try { assetSources.push(await readFile(join(root, file), 'utf8')); } catch (e) { if (e.code !== 'ENOENT') throw e; }
}
const paths = new Set(assetSources.flatMap(s => [...s.matchAll(/["'](\/assets\/[^"']+\.(?:webp|png|svg|jpg))["']/g)].map(m => m[1])));
for (const path of paths) await stat(join(root, path));
const out = join(root, 'dist');
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
for (const file of files) await cp(join(root, file), join(out, file), { recursive: true });
await cp(join(root, 'scripts'), join(out, 'scripts'), { recursive: true, filter: p => !p.endsWith('build.mjs') });
console.log(`Build OK: ${chunks.length} chunks preservados; ${paths.size} caminhos de imagens válidos; saída dist/.`);
