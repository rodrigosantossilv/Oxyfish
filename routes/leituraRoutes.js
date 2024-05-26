const express = require('express');
const router = express.Router();
const leituraController = require('../controllers/leituraController'); // Ajuste o caminho conforme necessário

router.post('/', leituraController.addLeitura);
router.get('/:id', leituraController.getLeituraById);
router.get('/', leituraController.getAllLeituras);
router.put('/:id', leituraController.updateLeitura);
router.delete('/:id', leituraController.deleteLeitura);

module.exports = router;
