// routes/usuarioRoutes.js

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const isAuth = require("../middleware/isAuth"); // Importando o middleware isAuth

router.get('/api/usuario', isAuth, usuarioController.getAllUsuarios); // Protegendo a rota com isAuth
router.get('/api/usuario/:id', isAuth, usuarioController.getUsuarioById); // Protegendo a rota com isAuth
router.post('/api/usuario', usuarioController.addUsuario);
router.put('/api/usuario/:id', isAuth, usuarioController.updateUsuario); // Protegendo a rota com isAuth
router.delete('/api/usuario/:id', isAuth, usuarioController.deleteUsuario); // Protegendo a rota com isAuth

module.exports = router;
