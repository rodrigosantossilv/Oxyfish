const express = require('express');
const router = express.Router();
const PhRepository = require('../repositories/phRepository');
const PhApplication = require('../applications/phApplication');
const PhFacade = require('../facade/phFacade');

const phRepository = new PhRepository();
const phApplication = new PhApplication(phRepository);
const phFacade = new PhFacade(phApplication);

// Rota para obter um Ph pelo ID
router.get('/api/ph/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const ph = await phFacade.getById(id);
        if (!ph) {
            res.status(404).json({ message: 'Ph não encontrado' });
        } else {
            res.json(ph);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para obter todos os Phs
router.get('/api/ph', async (req, res) => {
    try {
        const phs = await phFacade.getAll();
        res.json(phs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um Ph existente
router.put('/api/ph/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        await phFacade.update(id, newData);
        res.status(200).json({ message: 'Ph atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para deletar um Ph existente
router.delete('/api/ph/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await phFacade.delete(id);
        res.status(200).json({ message: 'Ph deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
