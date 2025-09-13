const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Handlebars setup
app.engine('hbs', exphbs.engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'app_server', 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'app_server', 'views', 'partials')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'app_server', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
const travelerRoutes = require('./app_server/routes/travelerRoutes');
app.use('/', travelerRoutes);

// 404 fallback
app.use((req, res) => {
  res.status(404).render('home', { title: '404 - Not Found', message: 'Sorry, page not found.' });
});

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));

