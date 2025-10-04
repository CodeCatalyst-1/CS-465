const express = require("express");
const router = express.Router();
const controller = require("../controllers/tripController");

// Standardized RESTful endpoints as required
router.get("/trips", controller.getAllTrips);           // GET /API/trips
router.get("/trips/:id", controller.getTripById);       // GET /API/trips/:id
router.post("/trips", controller.createTrip);           // POST /API/trips
router.put("/trips/:id", controller.updateTrip);        // PUT /API/trips/:id
router.delete("/trips/:id", controller.deleteTrip);     // DELETE /API/trips/:id

// Utility to populate DB from data/trips.json
router.get("/populate", controller.populateTrips);      // GET /API/populate

module.exports = router;
