var express = require('express');
var router = express.Router();

const usuariosController = require("../controllers/usuariosController");


router.get('/', usuariosController.index)
router.get('/createUsers', usuariosController.create);
router.post("/", usuariosController.register);
router.post('/delete/:id', usuariosController.eliminar);
router.get('/editar/:id', usuariosController.editar);
router.post('/actualizar', usuariosController.actualizar);


module.exports = router;