
const express = require('express');
const router = express.Router();
const nivelOxigenioController = require('../controllers/nivelOxigenioController');

router.get('/api/nivelOxigenio/:id', nivelOxigenioController.getNivelOxigenioById);
router.get('/api/nivelOxigenio', nivelOxigenioController.getAllNiveisOxigenio);
router.put('/api/nivelOxigenio/:id', nivelOxigenioController.updateNivelOxigenio);
router.delete('/api/nivelOxigenio/:id', nivelOxigenioController.deleteNivelOxigenio);

module.exports = router;
