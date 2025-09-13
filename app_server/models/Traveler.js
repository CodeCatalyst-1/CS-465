const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  description: String,
  startDate: Date,
  endDate: Date,
  price: Number,
  seatsAvailable: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Trip', TripSchema);
