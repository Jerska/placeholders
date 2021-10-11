import 'dotenv/config';

import express from 'express';

import { search } from './unsplash/search.js';

const PORT = parseInt(process.env.PORT || '3000', 10);
const UNSPLASH_ACCESS_TOKEN = process.env.UNSPLASH_ACCESS_TOKEN;
const UNSPLASH_SECRET_KEY = process.env.UNSPLASH_SECRET_KEY;

const app = express();

app.get('/', async (req, res) => {
  const new_image_params = req.query;
  const body = await search('', new_image_params);
  res.status(200).header('Content-Type', 'image/svg+xml').send(body);
});

app.get('/:search', async (req, res) => {
  const search_query = req.params.search;
  const new_image_params = req.query;
  const body = await search(search_query, new_image_params);
  res.status(200).header('Content-Type', 'image/svg+xml').send(body);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.error('Caught unhandled rejection:');
  console.error(err);
  process.exit(1);
});
