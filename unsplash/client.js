import fetch from 'node-fetch';

import { access_key } from './credentials.js';

const HOST = 'https://api.unsplash.com';

function getEndpoint(path) {
  return `${HOST}${path}`;
}

async function request(method, path, opts = {}) {
  const endpoint = getEndpoint(path);
  const res = await fetch(endpoint, {
    method,
    headers: {
      Authorization: `Client-ID ${access_key}`,
      ...opts.headers,
    },
    ...opts,
  });
  const body = await res.text();
  return JSON.parse(body);
}

export async function get(...opts) {
  return await request('GET', ...opts);
}
