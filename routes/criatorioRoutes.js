const express = require('express');
const router = express.Router();
const criatorioController = require('../controllers/criatorioController');

// Rota para obter todos os criatórios
router.get('/', criatorioController.getAllCriatorios);

// Rota para obter um criatório pelo ID
router.get('/:id', criatorioController.getCriatorioById);

// Rota para adicionar um novo criatório
router.post('/', criatorioController.addCriatorio);

// Rota para atualizar um criatório existente
router.put('/:id', criatorioController.updateCriatorio);

// Rota para deletar um criatório existente
router.delete('/:id', criatorioController.deleteCriatorio);

module.exports = router;
