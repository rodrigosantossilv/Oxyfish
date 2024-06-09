const express = require('express');
const router = express.Router();
const phController = require('../controllers/phController');

router.get('/:id', phController.getPhById);
router.get('/', phController.getAllPhs);
router.post('/', phController.addPh); // Adicionando a rota de adição
router.put('/:id', phController.updatePh);
router.delete('/:id', phController.deletePh);

module.exports = router;
