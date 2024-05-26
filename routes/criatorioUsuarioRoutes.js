const express = require('express');
const router = express.Router();
const criatorioUsuarioController = require('../controllers/criatorioUsuarioController');

// Rota para adicionar um novo criatório usuário
router.post('/', criatorioUsuarioController.addCriatorioUsuario);

// Rota para obter todos os criatórios usuários
router.get('/', criatorioUsuarioController.getAllCriatoriosUsuarios);

// Rota para obter um criatório usuário pelo ID
router.get('/:id', criatorioUsuarioController.getCriatorioUsuarioById);

// Rota para atualizar um criatório usuário existente
router.put('/:id', criatorioUsuarioController.updateCriatorioUsuario);

// Rota para deletar um criatório usuário existente
router.delete('/:id', criatorioUsuarioController.deleteCriatorioUsuario);

module.exports = router;
