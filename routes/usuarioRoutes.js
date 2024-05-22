// routes/usuarioRoutes.js

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/api/usuario', usuarioController.getAllUsuarios);
router.get('/api/usuario/:id', usuarioController.getUsuarioById);
router.post('/api/usuario', usuarioController.addUsuario);
router.put('/api/usuario/:id', usuarioController.updateUsuario);
router.delete('/api/usuario/:id', usuarioController.deleteUsuario);

module.exports = router;
