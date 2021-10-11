const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

if (!UNSPLASH_ACCESS_KEY || UNSPLASH_ACCESS_KEY === 'FIXME') {
  throw new Error('Missing UNSPLASH_ACCESS_KEY');
}

module.exports = {
  access_key: UNSPLASH_ACCESS_KEY,
};
