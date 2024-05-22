const express = require('express');
const router = express.Router();
const criatorioController = require('../controllers/criatorioController');

// Rota para obter todos os criatórios
router.get('/api/criatorio', criatorioController.getAllCriatorios);

// Rota para obter um criatório pelo ID
router.get('/api/criatorio/:id', criatorioController.getCriatorioById);

// Rota para adicionar um novo criatório
router.post('/api/criatorio', criatorioController.addCriatorio);

// Rota para atualizar um criatório existente
router.put('/api/criatorio/:id', criatorioController.updateCriatorio);

// Rota para deletar um criatório existente
router.delete('/api/criatorio/:id', criatorioController.deleteCriatorio);

module.exports = router;
