const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
    destination: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    duration: { type: Number, required: true, min: 1 },
    description: { type: String, required: true, trim: true },
    imageUrl: { type: String, required: true, trim: true },
    available: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model("Trip", tripSchema);
