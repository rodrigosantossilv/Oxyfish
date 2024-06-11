const AlertaApplication = require('../applications/alertaApplication');
const sensorRepository = require('../repositories/sensorRepository');

const alertaApplication = new AlertaApplication(sensorRepository);

exports.getAlertas = async (req, res) => {
  try {
    const alerta = await alertaApplication.verificarAlertas();
    res.status(200).json({ alerta });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
