const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// In-memory "Database"
let stocks = [
  { id: '1', symbol: 'AAPL', price: 150, quantity: 10 },
  { id: '2', symbol: 'TSLA', price: 700, quantity: 5 },
  { id: '3', symbol: 'GOOGL', price: 2800, quantity: 2 }
];

// GET: All stocks
app.get('/api/stocks', (req, res) => {
  console.log('Fetching stocks...');
  res.json(stocks);
});

// POST: Add new stock
app.post('/api/stocks', (req, res) => {
  const newStock = { id: Date.now().toString(), ...req.body };
  stocks.push(newStock);
  res.status(201).json(newStock);
});

// PATCH: Update price (simulating a market fluctuation)
app.patch('/api/stocks/:id', (req, res) => {
  const { id } = req.params;
  const { price } = req.body;
  const stock = stocks.find(s => s.id === id);
  if (stock) {
    stock.price = price;
    res.json(stock);
  } else {
    res.status(404).send('Stock not found');
  }
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});