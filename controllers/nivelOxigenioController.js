const nivelOxigenioFacade = require('../dependency/injection');

const getNivelOxigenioById = async (req, res) => {
  try {
    const id = req.params.id;
    const nivelOxigenio = await nivelOxigenioFacade.getById(id);
    if (!nivelOxigenio) {
      res.status(404).json({ message: 'Nível de oxigênio não encontrado' });
    } else {
      res.json(nivelOxigenio);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllNiveisOxigenio = async (req, res) => {
  try {
    const niveisOxigenio = await nivelOxigenioFacade.getAll();
    res.json(niveisOxigenio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateNivelOxigenio = async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    await nivelOxigenioFacade.update(id, newData);
    res.status(200).json({ message: 'Nível de oxigênio atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteNivelOxigenio = async (req, res) => {
  try {
    const id = req.params.id;
    await nivelOxigenioFacade.delete(id);
    res.status(200).json({ message: 'Nível de oxigênio deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getNivelOxigenioById,
  getAllNiveisOxigenio,
  updateNivelOxigenio,
  deleteNivelOxigenio,
};
