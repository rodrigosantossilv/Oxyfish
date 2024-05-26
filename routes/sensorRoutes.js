// routes/sensorRoutes.js

const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');

router.get('/:id', sensorController.getSensorById);
router.get('/', sensorController.getAllSensors);
router.put('/:id', sensorController.updateSensor);
router.delete('/:id', sensorController.deleteSensor);

module.exports = router;
