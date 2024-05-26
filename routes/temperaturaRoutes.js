const express = require('express');
const router = express.Router();
const temperaturaController = require('../controllers/temperaturaController');

router.get('/:id', temperaturaController.getTemperaturaById);
router.get('/', temperaturaController.getAllTemperaturas);
router.put('/:id', temperaturaController.updateTemperatura);
router.delete('/:id', temperaturaController.deleteTemperatura);

module.exports = router;
