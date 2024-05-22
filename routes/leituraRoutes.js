const express = require('express');
const router = express.Router();
const leituraController = require('../controllers/leituraController'); // Ajuste o caminho conforme necessário

router.post('/api/leitura', leituraController.addLeitura);
router.get('/api/leitura/:id', leituraController.getLeituraById);
router.get('/api/leitura', leituraController.getAllLeituras);
router.put('/api/leitura/:id', leituraController.updateLeitura);
router.delete('/api/leitura/:id', leituraController.deleteLeitura);

module.exports = router;
