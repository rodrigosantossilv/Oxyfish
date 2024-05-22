
const CriatorioRepository = require('../repositories/criatorioRepository');
const CriatorioApplication = require('../applications/criatorioApplication');
const CriatorioFacade = require('../facade/criatorioFacade');

const criatorioRepository = new CriatorioRepository();
const criatorioApplication = new CriatorioApplication(criatorioRepository);
const criatorioFacade = new CriatorioFacade(criatorioApplication);

const CriatorioUsuarioRepository = require('../repositories/criatorioUsuarioRepository');
const CriatorioUsuarioApplication = require('../applications/criatorioUsuarioApplication');
const CriatorioUsuarioFacade = require('../facade/criatorioUsuarioFacade');

const criatorioUsuarioRepository = new CriatorioUsuarioRepository();
const criatorioUsuarioApplication = new CriatorioUsuarioApplication(criatorioUsuarioRepository);
const criatorioUsuarioFacade = new CriatorioUsuarioFacade(criatorioUsuarioApplication);

const LeituraRepository = require('../repositories/leituraRepository');
const LeituraApplication = require('../applications/leituraApplication');
const LeituraFacade = require('../facade/leituraFacade');

const leituraRepository = new LeituraRepository();
const leituraApplication = new LeituraApplication(leituraRepository);
const leituraFacade = new LeituraFacade(leituraApplication);

const NivelOxigenioRepository = require('../repositories/nivelOxigenioRepository');
const NivelOxigenioApplication = require('../applications/nivelOxigenioApplication');
const NivelOxigenioFacade = require('../facade/nivelOxigenioFacade');

const nivelOxigenioRepository = new NivelOxigenioRepository();
const nivelOxigenioApplication = new NivelOxigenioApplication(nivelOxigenioRepository);
const nivelOxigenioFacade = new NivelOxigenioFacade(nivelOxigenioApplication);

const PeixeRepository = require('../repositories/peixeRepository');
const PeixeApplication = require('../applications/peixeApplication');
const PeixeFacade = require('../facade/peixeFacade');

const peixeRepository = new PeixeRepository();
const peixeApplication = new PeixeApplication(peixeRepository);
const peixeFacade = new PeixeFacade(peixeApplication);

const PhRepository = require('../repositories/phRepository');
const PhApplication = require('../applications/phApplication');
const PhFacade = require('../facade/phFacade');

const phRepository = new PhRepository();
const phApplication = new PhApplication(phRepository);
const phFacade = new PhFacade(phApplication);

const SensorRepository = require('../repositories/sensorRepository');
const SensorApplication = require('../applications/sensorApplication');
const SensorFacade = require('../facade/sensorFacade');

const sensorRepository = new SensorRepository();
const sensorApplication = new SensorApplication(sensorRepository);
const sensorFacade = new SensorFacade(sensorApplication);

const TemperaturaRepository = require('../repositories/temperaturaRepository');
const TemperaturaApplication = require('../applications/temperaturaApplication');
const TemperaturaFacade = require('../facade/temperaturaFacade');

const temperaturaRepository = new TemperaturaRepository();
const temperaturaApplication = new TemperaturaApplication(temperaturaRepository);
const temperaturaFacade = new TemperaturaFacade(temperaturaApplication);

const UsuarioRepository = require('../repositories/usuarioRepository');
const UsuarioApplication = require('../applications/usuarioApplication');
const UsuarioFacade = require('../facade/usuarioFacade');

const usuarioRepository = new UsuarioRepository();
const usuarioApplication = new UsuarioApplication(usuarioRepository);
const usuarioFacade = new UsuarioFacade(usuarioApplication);

module.exports = { criatorioFacade, criatorioUsuarioFacade, leituraFacade, nivelOxigenioFacade, peixeFacade, phFacade, sensorFacade, temperaturaFacade, usuarioFacade};