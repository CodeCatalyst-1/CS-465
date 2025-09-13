const path = require('path');
const fs = require('fs');

const seedFile = path.join(__dirname, '..', 'data', 'seed_trips.json');

function readSeed() {
  try {
    const data = fs.readFileSync(seedFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading seed JSON:', err);
    return { trips: [] };
  }
}

exports.showHome = (req, res) => {
  const data = readSeed();
  const featured = (data.trips || []).slice(0, 3);
  res.render('home', { title: 'Travlr Getaways', featured });
};

exports.showPackages = (req, res) => {
  const data = readSeed();
  res.render('packages', { title: 'Packages', packages: data.trips });
};

exports.getPackagesJson = (req, res) => {
  const data = readSeed();
  res.json(data.trips);
};

exports.searchPackagesJson = (req, res) => {
  const { location, maxPrice } = req.query;
  let trips = (readSeed().trips || []);
  if (location) {
    trips = trips.filter(t => t.location.toLowerCase().includes(location.toLowerCase()));
  }
  if (maxPrice) {
    trips = trips.filter(t => Number(t.price) <= Number(maxPrice));
  }
  res.json(trips);
};
