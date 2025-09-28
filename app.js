const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/travlr", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected successfully!"))
.catch(err => console.error("MongoDB connection error:", err));

const Trip = require("./models/trip");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/populate", async (req, res) => {
    try {
        const tripsData = JSON.parse(fs.readFileSync("./data/trips.json", "utf-8"));
        await Trip.deleteMany();
        await Trip.insertMany(tripsData);
        res.json({ message: "Trips populated successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/api/trips", async (req, res) => {
    try {
        const trips = await Trip.find();
        res.json(trips);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/", async (req, res) => {
    try {
        const trips = await Trip.find();
        let html = `
        <html>
        <head>
            <title>Travlr Getaways</title>
            <style>
                body { font-family: Arial; margin: 20px; }
                h1 { text-align: center; }
                .trip { border: 1px solid #ccc; padding: 10px; margin: 10px; width: 300px; float: left; }
                .trip img { width: 100%; height: auto; }
            </style>
        </head>
        <body>
            <h1>Travlr Getaways</h1>
            <div class="trips">
        `;

        trips.forEach(trip => {
            html += `
                <div class="trip">
                    <img src="${trip.imageUrl}" alt="${trip.destination}">
                    <h2>${trip.destination}</h2>
                    <p>${trip.description}</p>
                    <p>Price: $${trip.price}</p>
                    <p>Duration: ${trip.duration} days</p>
                </div>
            `;
        });

        html += `
            </div>
        </body>
        </html>
        `;
        res.send(html);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
