const express = require('express');
const router = express.Router();

// Rota para obter uma temperatura pelo ID
router.get('/api/temperatura/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const temperatura = await temperaturaFacade.getById(id);
        if (!temperatura) {
            res.status(404).json({ message: 'Temperatura não encontrada' });
        } else {
           

res.json(temperatura);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para obter todas as temperaturas
router.get('/api/temperatura', async (req, res) => {
    try {
        const temperaturas = await temperaturaFacade.getAll();
        res.json(temperaturas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar uma temperatura existente
router.put('/api/temperatura/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        await temperaturaFacade.update(id, newData);
        res.status(200).json({ message: 'Temperatura atualizada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para deletar uma temperatura existente
router.delete('/api/temperatura/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await temperaturaFacade.delete(id);
        res.status(200).json({ message: 'Temperatura deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
