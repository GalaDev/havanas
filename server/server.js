const express = require('express');
const data = require('./data');

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
