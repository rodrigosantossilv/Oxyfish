// factories/alarmeFactory.js
const Alarme = require('../entities/alarme');
const Ph = require('../entities/ph');
const NivelOxigenio = require('../entities/nivelOxigenio');
const Temperatura = require('../entities/temperatura');

class AlarmeFactory {
    static createAlarme(phValor, oxigenioValor, temperaturaValor) {
        const ph = new Ph(phValor);
        const nivelOxigenio = new NivelOxigenio(oxigenioValor);
        const temperatura = new Temperatura(temperaturaValor);

        return new Alarme(ph, nivelOxigenio, temperatura);
    }
}

module.exports = AlarmeFactory;
