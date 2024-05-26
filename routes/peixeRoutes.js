const express = require('express');
const router = express.Router();
const peixeController = require('../controllers/peixeController');

router.post('/', peixeController.addPeixe);
router.get('/:id', peixeController.getPeixeById);
router.get('/', peixeController.getAllPeixes);
router.put('/:id', peixeController.updatePeixe);
router.delete('/:id', peixeController.deletePeixe);

module.exports = router;
