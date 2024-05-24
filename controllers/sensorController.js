const {sensorFacade} = require('../dependency/injection');

const getSensorById = async (req, res) => {
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
};

const getAllSensors = async (req, res) => {
    try {
        const sensors = await sensorFacade.getAll();
        res.json(sensors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateSensor = async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        await sensorFacade.update(id, newData);
        res.status(200).json({ message: 'Sensor atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteSensor = async (req, res) => {
    try {
        const id = req.params.id;
        await sensorFacade.delete(id);
        res.status(200).json({ message: 'Sensor deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getSensorById,
    getAllSensors,
    updateSensor,
    deleteSensor,
};
