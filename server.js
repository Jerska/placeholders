const express = require('express');

const PORT = parseInt(process.env.PORT || "3000", 10);

const app = express();

app.get("/", (req, res) => {
  res.status(200).send('Success');
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
