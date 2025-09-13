const express = require('express');
const router = express.Router();
const travelerController = require('../controllers/travelerController');

// Public pages
router.get('/', travelerController.showHome);
router.get('/packages', travelerController.showPackages);

// API endpoints
router.get('/api/packages', travelerController.getPackagesJson);
router.get('/api/search', travelerController.searchPackagesJson);

module.exports = router;
