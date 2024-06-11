
const Ph = require('../entities/ph');
const Oxigenio = require('../entities/oxigenio');
const Temperatura = require('../entities/temperatura');
const Sensores = require('../entities/sensores');

class SensorFactory {
  static createSensores(phValor, oxigenioValor, temperaturaValor) {
    const ph = new Ph(phValor);
    const oxigenio = new Oxigenio(oxigenioValor);
    const temperatura = new Temperatura(temperaturaValor);
    return new Sensores(ph, oxigenio, temperatura);
  }
}

module.exports = SensorFactory;
