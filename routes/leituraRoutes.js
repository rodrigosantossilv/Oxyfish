const express = require('express');
const router = express.Router();
const LeituraRepository = require('../repositories/leituraRepository');
const LeituraApplication = require('../applications/leituraApplication');
const LeituraFacade = require('../facade/leituraFacade');

const leituraRepository = new LeituraRepository();
const leituraApplication = new LeituraApplication(leituraRepository);
const leituraFacade = new LeituraFacade(leituraApplication);

// Rota para adicionar uma nova leitura
router.post('/api/leitura', async (req, res) => {
  try {
    const { idSensor, idTemperatura, idPh, idNivelOxigenio } = req.body;
    const novaLeitura = await leituraFacade.add(idSensor, idTemperatura, idPh, idNivelOxigenio);
    res.status(201).json(novaLeitura);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para obter uma leitura pelo ID
router.get('/api/leitura/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const leitura = await leituraFacade.getById(id);
    if (!leitura) {
      res.status(404).json({ message: 'Leitura não encontrada' });
    } else {
      res.json(leitura);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para obter todas as leituras
router.get('/api/leitura', async (req, res) => {
  try {
    const leituras = await leituraFacade.getAll();
    res.json(leituras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para atualizar uma leitura existente
router.put('/api/leitura/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    await leituraFacade.update(id, newData);
    res.status(200).json({ message: 'Leitura atualizada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para deletar uma leitura existente
router.delete('/api/leitura/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await leituraFacade.delete(id);
    res.status(200).json({ message: 'Leitura deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
