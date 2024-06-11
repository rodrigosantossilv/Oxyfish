const Alerta = require('../entities/alerta');

class AlertaApplication {
  constructor(sensorRepository) {
    this.sensorRepository = sensorRepository;
  }

  async verificarAlertas() {
    const sensores = await this.sensorRepository.getUltimosSensores();
    const alerta = new Alerta(sensores);
    return alerta.emitirAlerta();
  }
}

module.exports = AlertaApplication;
