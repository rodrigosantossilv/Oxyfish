const express = require('express');
const router = express.Router();
const NivelOxigenioRepository = require('../repositories/nivelOxigenioRepository');
const NivelOxigenioApplication = require('../applications/nivelOxigenioApplication');
const NivelOxigenioFacade = require('../facade/nivelOxigenioFacade');

const nivelOxigenioRepository = new NivelOxigenioRepository();
const nivelOxigenioApplication = new NivelOxigenioApplication(nivelOxigenioRepository);
const nivelOxigenioFacade = new NivelOxigenioFacade(nivelOxigenioApplication);

// Rota para obter um nível de oxigênio pelo ID
router.get('/api/nivelOxigenio/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const nivelOxigenio = await nivelOxigenioFacade.getById(id);
    if (!nivelOxigenio) {
      res.status(404).json({ message: 'Nível de oxigênio não encontrado' });
    } else {
      res.json(nivelOxigenio);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para obter todos os níveis de oxigênio
router.get('/api/nivelOxigenio', async (req, res) => {
  try {
    const niveisOxigenio = await nivelOxigenioFacade.getAll();
    res.json(niveisOxigenio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para atualizar um nível de oxigênio existente
router.put('/api/nivelOxigenio/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    await nivelOxigenioFacade.update(id, newData);
    res.status(200).json({ message: 'Nível de oxigênio atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para deletar um nível de oxigênio existente
router.delete('/api/nivelOxigenio/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await nivelOxigenioFacade.delete(id);
    res.status(200).json({ message: 'Nível de oxigênio deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
