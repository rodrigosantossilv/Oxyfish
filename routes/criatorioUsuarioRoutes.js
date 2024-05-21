const express = require('express');
const router = express.Router();
const CriatorioUsuarioRepository = require('../repositories/criatoriosUsuariosRepository');
const CriatorioUsuarioApplication = require('../applications/criatorioUsuarioApplication');
const CriatorioUsuarioFacade = require('../facade/criatorioUsuarioFacade');

// Instanciando o repositório, aplicação e fachada do CriatorioUsuario
const criatorioUsuarioRepository = new CriatorioUsuarioRepository();
const criatorioUsuarioApplication = new CriatorioUsuarioApplication(criatorioUsuarioRepository);
const criatorioUsuarioFacade = new CriatorioUsuarioFacade(criatorioUsuarioApplication);

// Rota para adicionar um novo criatório usuário
router.post('/api/criatorioUsuario', async (req, res) => {
  try {
    const { idCriatorio, periodo, idUsuario, idSensor } = req.body;
    const novoCriatorioUsuario = await criatorioUsuarioFacade.add(idCriatorio, periodo, idUsuario, idSensor);
    res.status(201).json(novoCriatorioUsuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para obter todos os criatórios usuários
router.get('/api/criatorioUsuario', async (req, res) => {
  try {
    const criatoriosUsuarios = await criatorioUsuarioFacade.getAll();
    res.json(criatoriosUsuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para obter um criatório usuário pelo ID
router.get('/api/criatorioUsuario/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const criatorioUsuario = await criatorioUsuarioFacade.getById(id);
    if (!criatorioUsuario) {
      res.status(404).json({ message: 'Criatório usuário não encontrado' });
    } else {
      res.json(criatorioUsuario);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para atualizar um criatório usuário existente
router.put('/api/criatorioUsuario/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    await criatorioUsuarioFacade.update(id, newData);
    res.status(200).json({ message: 'Criatório usuário atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para deletar um criatório usuário existente
router.delete('/api/criatorioUsuario/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await criatorioUsuarioFacade.delete(id);
    res.status(200).json({ message: 'Criatório usuário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
