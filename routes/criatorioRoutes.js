const express = require('express');
const router = express.Router();

// Rota para obter todos os criatórios
router.get('/api/criatorio', async (req, res) => {
  try {
    const criatorios = await criatorioFacade.getAll();
    res.json(criatorios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para obter um criatório pelo ID
router.get('/api/criatorio/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const criatorio = await criatorioFacade.getById(id);
    if (!criatorio) {
      res.status(404).json({ message: 'Criatório não encontrado' });
    } else {
      res.json(criatorio);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para adicionar um novo criatório
router.post('/api/criatorio', async (req, res) => {
  try {
    const criatorio = req.body;
    const novoCriatorio = await criatorioFacade.add(criatorio);
    res.status(201).json(novoCriatorio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para atualizar um criatório existente
router.put('/api/criatorio/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    await criatorioFacade.update(id, newData);
    res.status(200).json({ message: 'Criatório atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para deletar um criatório existente
router.delete('/api/criatorio/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await criatorioFacade.delete(id);
    res.status(200).json({ message: 'Criatório deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
