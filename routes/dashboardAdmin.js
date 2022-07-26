var express = require('express');
var router = express.Router();

const usuariosController = require("../controllers/usuariosController");


router.get('/', usuariosController.index);
router.get('/ctrlUsuarios', usuariosController.control);
router.get('/createUsers', usuariosController.create);
router.post("/", usuariosController.register);
router.post('/delete/:id', usuariosController.eliminar);
router.get('/editar/:id', usuariosController.editar);
router.post('/actualizar', usuariosController.actualizar);
router.get('/perfil', usuariosController.perfilAdmin);


module.exports = router;