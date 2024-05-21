const express = require('express');
const router = express.Router();
const UsuarioRepository = require('../repositories/usuarioRepository');
const UsuarioApplication = require('../applications/usuarioApplication');
const UsuarioFacade = require('../facade/usuarioFacade');

const usuarioRepository = new UsuarioRepository();
const usuarioApplication = new UsuarioApplication(usuarioRepository);
const usuarioFacade = new UsuarioFacade(usuarioApplication);

// Rota para obter todos os usuários
router.get('/api/usuario', async (req, res) => {
  try {
    const usuarios = await usuarioFacade.getAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para obter um usuário pelo ID
router.get('/api/usuario/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const usuario = await usuarioFacade.getById(id);
    if (!usuario) {
      res.status(404).json({ message: 'Usuário não encontrado' });
    } else {
      res.json(usuario);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para adicionar um novo usuário
router.post('/api/usuario', async (req, res) => {
  try {
    const usuario = req.body;
    const novoUsuario = await usuarioFacade.add(usuario);
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para atualizar um usuário existente
router.put('/api/usuario/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    await usuarioFacade.update(id, newData);
    res.status(200).json({ message: 'Usuário atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para deletar um usuário existente
router.delete('/api/usuario/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await usuarioFacade.delete(id);
    res.status(200).json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

