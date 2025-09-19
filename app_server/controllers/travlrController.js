const path = require("path");
const fs = require("fs");

const tripsFile = path.join(__dirname, "..", "data", "trips.json");

function readTrips() {
  try {
    const raw = fs.readFileSync(tripsFile, "utf8");
    const obj = JSON.parse(raw);
    return obj.trips || [];
  } catch (e) {
    console.error("Error reading trips.json:", e);
    return [];
  }
}

exports.showHome = (req, res) => {
  const trips = readTrips();
  console.log("DEBUG trips from showHome:", trips); // add this line
  const featured = trips.slice(0, 3);
  res.render("home", { title: "Travlr Getaways", featured });
};


exports.showPackages = (req, res) => {
  const trips = readTrips();
  res.render("packages", { title: "Packages", packages: trips });
};

exports.getPackagesJson = (req, res) => {
  const trips = readTrips();
  res.json(trips);
};

exports.searchPackagesJson = (req, res) => {
  const { location, maxPrice } = req.query;
  let trips = readTrips();
  if (location) {
    trips = trips.filter(t => t.location.toLowerCase().includes(location.toLowerCase()));
  }
  if (maxPrice) {
    const p = Number(maxPrice);
    trips = trips.filter(t => Number(t.price) <= p);
  }
  res.json(trips);
};
