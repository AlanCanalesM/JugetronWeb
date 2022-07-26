
var express = require('express');
var router = express.Router();

const clientesController = require("../controllers/clientesController");


router.get('/', clientesController.clienteMain);
router.get('/clientesDonar', clientesController.donar);
router.get('/misDonaciones', clientesController.misDonaciones);
router.get('/perfil', clientesController.perfilCliente);

module.exports = router;