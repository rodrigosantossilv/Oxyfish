const express = require('express');
const router = express.Router();
const PeixeRepository = require('../repositories/peixeRepository');
const PeixeApplication = require('../applications/peixeApplication');
const PeixeFacade = require('../facade/peixeFacade');

const peixeRepository = new PeixeRepository();
const peixeApplication = new PeixeApplication(peixeRepository);
const peixeFacade = new PeixeFacade(peixeApplication);

// Rota para adicionar um novo peixe
router.post('/api/peixe', async (req, res) => {
    try {
        const peixe = req.body;
        const novoPeixe = await peixeFacade.add(peixe);
        res.status(201).json(novoPeixe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para obter um peixe pelo ID
router.get('/api/peixe/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const peixe = await peixeFacade.getById(id);
        if (!peixe) {
            res.status(404).json({ message: 'Peixe não encontrado' });
        } else {
            res.json(peixe);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para obter todos os peixes
router.get('/api/peixe', async (req, res) => {
    try {
        const peixes = await peixeFacade.getAll();
        res.json(peixes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um peixe existente
router.put('/api/peixe/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        await peixeFacade.update(id, newData);
        res.status(200).json({ message: 'Peixe atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para deletar um peixe existente
router.delete('/api/peixe/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await peixeFacade.delete(id);
        res.status(200).json({ message: 'Peixe deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
