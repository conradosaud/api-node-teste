const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/usuarioController')

router.post('/usuarios', UsuarioController.Insere);
router.get('/usuarios', UsuarioController.BuscaTodos);
router.get('/usuarios/:id', UsuarioController.BuscaId);
router.put('/usuarios/:id', UsuarioController.Altera);
router.delete('/usuarios/:id', UsuarioController.Deleta);

module.exports = router;