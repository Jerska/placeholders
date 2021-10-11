const UNSPLASH_ACCESS_TOKEN = process.env.UNSPLASH_ACCESS_TOKEN;
const UNSPLASH_SECRET_KEY = process.env.UNSPLASH_SECRET_KEY;

if (!UNSPLASH_ACCESS_TOKEN || UNSPLASH_ACCESS_TOKEN === 'FIXME') {
  throw new Error('Missing UNSPLASH_ACCESS_TOKEN');
}

if (!UNSPLASH_SECRET_KEY || UNSPLASH_SECRET_KEY === 'FIXME') {
  throw new Error('Missing UNSPLASH_SECRET_KEY');
}

module.exports = {
  access_token: UNSPLASH_ACCESS_TOKEN,
  secret_key: UNSPLASH_SECRET_KEY,
};
