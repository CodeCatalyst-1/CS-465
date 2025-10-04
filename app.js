const express = require("express");
const path = require("path");

// Connect to DB via your existing db/database.js file
require("./db/database"); // this file should set up mongoose connection

const app = express();
const PORT = 3000;

// JSON body parser
app.use(express.json());

// Mount the API router at top-level endpoint "/API"
app.use("/API", require("./api/routes/trips"));

// Serve static front-end from public (index.html will fetch /API/trips)
app.use(express.static(path.join(__dirname, "public")));

// Optional: fallback for non-found route (JSON)
app.use((req, res) => {
    if (req.path.startsWith("/API")) {
        return res.status(404).json({ error: "API endpoint not found." });
    }
    // Let static serve the site for other routes
    res.status(404).send("Not Found");
});

app.listen(PORT, () => console.log("Server running on http://localhost:" + PORT));
