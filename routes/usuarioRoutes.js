const express = require('express');
const router = express.Router();
const UsuarioRepository = require('../repositories/usuarioRepository');
const UsuarioApplication = require('../applications/usuarioApplication');
const UsuarioFacade = require('../facade/usuarioFacade');

const usuarioRepository = new UsuarioRepository();
const usuarioApplication = new UsuarioApplication(usuarioRepository);
const usuarioFacade = new UsuarioFacade(usuarioApplication);

router.get('/api/usuario', async (req, res) => {
  const usuarios = await usuarioFacade.getAll();
  res.json(usuarios);
});

module.exports = router;
