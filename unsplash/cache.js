import { join } from 'path';
import { readFile, writeFile, access, mkdir } from 'fs/promises';

const CACHE_DIR = 'tmp';

function safeKey(key) {
  return key
    .replace(/^\//, '')
    .replace(/\//g, '_')
    .replace(/\?/g, '--')
    .replace(/&/g, '--')
    .replace(/=/g, '-');
}

let cacheDir = null;
function getCacheDir() {
  if (cacheDir !== null) return cacheDir;
  cacheDir = join(process.cwd(), CACHE_DIR);
  return cacheDir;
}

function getFile(key) {
  const cache_dir = getCacheDir();
  const file_name = `${key}.json`;
  return join(cache_dir, file_name);
}

async function ensureCacheDirExists() {
  const cache_dir = getCacheDir();
  try {
    await access(cache_dir);
  } catch (e) {
    await mkdir(cache_dir);
  }
}

export async function getCache(key) {
  const file = getFile(safeKey(key));
  try {
    const body = await readFile(file);
    return JSON.parse(body);
  } catch (e) {
    return null;
  }
}

export async function setCache(key, data) {
  const file = getFile(safeKey(key));
  const body = JSON.stringify(data, null, 2);
  await ensureCacheDirExists();
  await writeFile(file, body);
}
