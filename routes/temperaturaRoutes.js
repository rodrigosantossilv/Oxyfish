const express = require('express');
const router = express.Router();
const temperaturaController = require('../controllers/temperaturaController');

router.get('/api/temperatura/:id', temperaturaController.getTemperaturaById);
router.get('/api/temperatura', temperaturaController.getAllTemperaturas);
router.put('/api/temperatura/:id', temperaturaController.updateTemperatura);
router.delete('/api/temperatura/:id', temperaturaController.deleteTemperatura);

module.exports = router;
