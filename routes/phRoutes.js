// routes/phRoutes.js

const express = require('express');
const router = express.Router();
const phController = require('../controllers/phController');

router.get('/api/ph/:id', phController.getPhById);
router.get('/api/ph', phController.getAllPhs);
router.put('/api/ph/:id', phController.updatePh);
router.delete('/api/ph/:id', phController.deletePh);

module.exports = router;
