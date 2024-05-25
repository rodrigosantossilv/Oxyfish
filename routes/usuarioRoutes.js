// routes/usuarioRoutes.js

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.getAllUsuarios); // Protegendo a rota com isAuth
router.get('/:id', usuarioController.getUsuarioById); // Protegendo a rota com isAuth
router.post('/', usuarioController.addUsuario);
router.put('/', usuarioController.updateUsuario); // Protegendo a rota com isAuth
router.delete('/:id', usuarioController.deleteUsuario); // Protegendo a rota com isAuth

module.exports = router;
