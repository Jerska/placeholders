if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const express = require('express');

const unsplash_credentials = require('./unsplash/credentials.js');

const PORT = parseInt(process.env.PORT || "3000", 10);
const UNSPLASH_ACCESS_TOKEN = process.env.UNSPLASH_ACCESS_TOKEN;
const UNSPLASH_SECRET_KEY = process.env.UNSPLASH_SECRET_KEY;

const app = express();

app.get("/", (req, res) => {
  res.status(200).send('Success');
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
