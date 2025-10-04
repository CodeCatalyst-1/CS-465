const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const Trip = require("../../models/trip");

// GET /API/trips
exports.getAllTrips = async (req, res) => {
    try {
        const trips = await Trip.find();
        return res.json(trips);
    } catch (err) {
        console.error("getAllTrips error:", err);
        return res.status(500).json({ error: "Server error while retrieving trips." });
    }
};

// GET /API/trips/:id
exports.getTripById = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid trip id format." });
    }
    try {
        const trip = await Trip.findById(id);
        if (!trip) return res.status(404).json({ error: "Trip not found." });
        return res.json(trip);
    } catch (err) {
        console.error("getTripById error:", err);
        return res.status(500).json({ error: "Server error while retrieving trip." });
    }
};

// POST /API/trips
exports.createTrip = async (req, res) => {
    try {
        const created = await Trip.create(req.body);
        return res.status(201).json(created);
    } catch (err) {
        console.error("createTrip error:", err);
        // Validation errors -> 400
        return res.status(400).json({ error: err.message });
    }
};

// PUT /API/trips/:id
exports.updateTrip = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid trip id format." });
    }
    try {
        const updated = await Trip.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updated) return res.status(404).json({ error: "Trip not found." });
        return res.json(updated);
    } catch (err) {
        console.error("updateTrip error:", err);
        return res.status(400).json({ error: err.message });
    }
};

// DELETE /API/trips/:id
exports.deleteTrip = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid trip id format." });
    }
    try {
        const removed = await Trip.findByIdAndDelete(id);
        if (!removed) return res.status(404).json({ error: "Trip not found." });
        return res.json({ message: "Trip deleted." });
    } catch (err) {
        console.error("deleteTrip error:", err);
        return res.status(500).json({ error: "Server error while deleting trip." });
    }
};

// GET /API/populate
exports.populateTrips = async (req, res) => {
    try {
        const jsonPath = path.join(__dirname, "../../data/trips.json");
        const tripsData = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
        await Trip.deleteMany({});
        await Trip.insertMany(tripsData);
        return res.json({ message: "Trips populated successfully!" });
    } catch (err) {
        console.error("populateTrips error:", err);
        return res.status(500).json({ error: "Failed to populate trips." });
    }
};
