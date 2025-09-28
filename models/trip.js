const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
    destination: String,
    price: Number,
    duration: Number,
    description: String,
    imageUrl: String,
    available: Boolean
}, { timestamps: true });

module.exports = mongoose.model("Trip", tripSchema);
