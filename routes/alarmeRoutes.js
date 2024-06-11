const express = require('express');
const alarmeController = require('../controllers/alarmeController');

const router = express.Router();


router.get('/verificar', alarmeController.verificarAlarme);

module.exports = router;
