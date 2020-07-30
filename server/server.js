const express = require('express');
const data = require('./data');

const app = express();
app.use(express.json({ extended: false }));

app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;

  const product = data.products.find(
    (item) => item._id.toString() === productId
  );

  if (product) {
    return res.json(product);
  }
  res.status(404).send({ msg: 'Product not found' });
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
