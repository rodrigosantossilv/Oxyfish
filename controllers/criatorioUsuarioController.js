const { criatorioUsuarioFacade } = require('../dependency/injection');

const addCriatorioUsuario = async (req, res) => {
  try {
    const { idCriatorio, periodo, idUsuario, idSensor } = req.body;
    const novoCriatorioUsuario = await criatorioUsuarioFacade.add(idCriatorio, periodo, idUsuario, idSensor);
    res.status(201).json(novoCriatorioUsuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllCriatoriosUsuarios = async (req, res) => {
  try {
    const criatoriosUsuarios = await criatorioUsuarioFacade.getAll();
    res.json(criatoriosUsuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCriatorioUsuarioById = async (req, res) => {
  try {
    const id = req.params.id;
    const criatorioUsuario = await criatorioUsuarioFacade.getById(id);
    if (!criatorioUsuario) {
      res.status(404).json({ message: 'Criatório usuário não encontrado' });
    } else {
      res.json(criatorioUsuario);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCriatorioUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    await criatorioUsuarioFacade.update(id, newData);
    res.status(200).json({ message: 'Criatório usuário atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCriatorioUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    await criatorioUsuarioFacade.delete(id);
    res.status(200).json({ message: 'Criatório usuário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addCriatorioUsuario,
  getAllCriatoriosUsuarios,
  getCriatorioUsuarioById,
  updateCriatorioUsuario,
  deleteCriatorioUsuario,
};
