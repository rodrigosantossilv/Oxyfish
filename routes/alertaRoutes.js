const express = require('express');
const router = express.Router();
const alertaController = require('../controllers/alertaController');

router.get('/alertas', alertaController.getAlertas);

module.exports = router;
