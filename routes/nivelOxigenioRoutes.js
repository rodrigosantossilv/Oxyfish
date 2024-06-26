const express = require('express');
const router = express.Router();
const nivelOxigenioController = require('../controllers/nivelOxigenioController');

router.get('/:id', nivelOxigenioController.getNivelOxigenioById);
router.get('/', nivelOxigenioController.getAllNiveisOxigenio);
router.post('/', nivelOxigenioController.addNivelOxigenio); // Adicionando a rota de adição
router.put('/:id', nivelOxigenioController.updateNivelOxigenio);
router.delete('/:id', nivelOxigenioController.deleteNivelOxigenio);

module.exports = router;
