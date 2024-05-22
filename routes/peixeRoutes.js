const express = require('express');
const router = express.Router();
const peixeController = require('../controllers/peixeController');

router.post('/api/peixe', peixeController.addPeixe);
router.get('/api/peixe/:id', peixeController.getPeixeById);
router.get('/api/peixe', peixeController.getAllPeixes);
router.put('/api/peixe/:id', peixeController.updatePeixe);
router.delete('/api/peixe/:id', peixeController.deletePeixe);

module.exports = router;
