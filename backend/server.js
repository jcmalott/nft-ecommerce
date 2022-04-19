import express from 'express';
import data from './data.js';
const app = express();

// sends this data when client connects
// - data is a json file listing products to show
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

// location that the client will connect to
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
