const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Handlebars setup
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

const fs = require('fs');

// Load trips from trips.json
const trips = JSON.parse(fs.readFileSync(path.join(__dirname, 'trips.json')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Travlr Getaways', trips });
});

app.get('/api/trips', (req, res) => {
  res.json(trips);
});

// Start server
app.listen(PORT, () => {
  console.log(`Travlr running at http://localhost:${PORT}`);
});
