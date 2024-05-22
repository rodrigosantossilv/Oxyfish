const express = require('express');
const router = express.Router();
const criatorioUsuarioController = require('../controllers/criatorioUsuarioController');

// Rota para adicionar um novo criatório usuário
router.post('/api/criatorioUsuario', criatorioUsuarioController.addCriatorioUsuario);

// Rota para obter todos os criatórios usuários
router.get('/api/criatorioUsuario', criatorioUsuarioController.getAllCriatoriosUsuarios);

// Rota para obter um criatório usuário pelo ID
router.get('/api/criatorioUsuario/:id', criatorioUsuarioController.getCriatorioUsuarioById);

// Rota para atualizar um criatório usuário existente
router.put('/api/criatorioUsuario/:id', criatorioUsuarioController.updateCriatorioUsuario);

// Rota para deletar um criatório usuário existente
router.delete('/api/criatorioUsuario/:id', criatorioUsuarioController.deleteCriatorioUsuario);

module.exports = router;
