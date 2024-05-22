// routes/sensorRoutes.js

const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');

router.get('/api/sensor/:id', sensorController.getSensorById);
router.get('/api/sensor', sensorController.getAllSensors);
router.put('/api/sensor/:id', sensorController.updateSensor);
router.delete('/api/sensor/:id', sensorController.deleteSensor);

module.exports = router;
