const express = require("express");
const router = express.Router();
const controller = require("../controllers/travlrController");

router.get("/", controller.showHome);
router.get("/packages", controller.showPackages);
router.get("/api/packages", controller.getPackagesJson);
router.get("/api/search", controller.searchPackagesJson);

module.exports = router;
