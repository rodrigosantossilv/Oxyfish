// controllers/alarmeController.js
const alarmeRepository = require('../repositories/alarmeRepository');

class AlarmeController {
    async verificarAlarme(req, res) {
        try {
            const alarme = await alarmeRepository.getUltimosSensores();
            const alerta = alarme.verificarAlerta();
            res.status(200).json({ alerta });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new AlarmeController();
