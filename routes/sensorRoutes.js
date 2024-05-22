const express = require('express');
const router = express.Router();

// Rota para obter um sensor pelo ID
router.get('/api/sensor/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const sensor = await sensorFacade.getById(id);
        if (!sensor) {
            res.status(404).json({ message: 'Sensor não encontrado' });
        } else {
            res.json(sensor);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para obter todos os sensores
router.get('/api/sensor', async (req, res) => {
    try {
        const sensores = await sensorFacade.getAll();
        res.json(sensores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um sensor existente
router.put('/api/sensor/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        await sensorFacade.update(id, newData);
        res.status(200).json({ message: 'Sensor atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para deletar um sensor existente
router.delete('/api/sensor/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await sensorFacade.delete(id);
        res.status(200).json({ message: 'Sensor deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
