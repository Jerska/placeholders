import * as client from './client.js';
import { getCache, setCache } from './cache.js';

const PATH = '/photos/random';

export async function search(search_query, new_image_params = {}, png = false) {
  const full_path = `${PATH}?count=30&query=${search_query}`;
  console.log(full_path);

  // Check in cache
  let res = await getCache(full_path);
  // Download new items
  if (res === null) {
    console.log('Refreshing data');
    res = await client.get(full_path);
    await setCache(full_path, res);
  }

  const width = new_image_params.w ?? 200;
  const height = new_image_params.h ?? 200;

  // Get random picture
  const idx = Math.floor(Math.random() * res.length);
  const photo = res[idx];

  // Send back the picture
  const url = photo.links.html;
  const author_name = photo.user.name;
  const author_link = photo.user.links.html;
  const link = 'https://unsplash.com/';
  const image_url = new URL(photo.urls.thumb);
  const image_params = new URLSearchParams(image_url.search);
  for (let [k, v] of Object.entries(new_image_params)) {
    image_params.set(k, v);
  }
  image_url.search = `?${image_params.toString()}`;
  const safe_image_url = image_url.toString().replace(/&/g, '&amp;');
  return `
      <svg version="1.1" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        >
        <title>${search_query}</title>
        <image
          x="0"
          y="0"
          width="${width}"
          height="${height}"
          xlink:href=${JSON.stringify(safe_image_url)}
        >
          <title>
            Photo by ${author_name}      <br />
            ${author_link}      <br />
            on Unsplash - ${link}      
          </title>
        </image>
      </svg>`.replace(/^ {6}/gm, '');
}
