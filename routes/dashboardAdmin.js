var express = require('express');
var router = express.Router();
const pool = require('../config/conexion');

const usuariosController = require("../controllers/usuariosController");


router.get('/', usuariosController.index);
router.get('/ctrlUsuarios', usuariosController.control);
router.get('/createUsers', usuariosController.create);
router.post("/", usuariosController.register);
router.post('/delete/:id', usuariosController.eliminar);
router.get('/editar/:id', usuariosController.editar);
router.post('/actualizar', usuariosController.actualizar);
router.get('/perfil', usuariosController.perfilAdmin);

//##############Logistica de Negocio#################
router.get('/contenedores', usuariosController.contenedores);
router.get('/createContenedores', usuariosController.createContenedores);
router.post("/prueba", (request, response) => {

    const nombre = request.body.nombre;
    const id_ubi = request.body.id_ubi;
    const id_cont = request.body.id_con;

    pool.query("INSERT INTO contenedor (id_cont, nombre, id_ubi) VALUES (?,?,?)", [id_cont, nombre, id_ubi], (error, result) => {
        if (error) throw error;
        response.send(result);

    })
});
router.get('/direcciones', usuariosController.direcciones);
router.get('/color', usuariosController.color);
router.get('/identificacion', usuariosController.identificacion);
router.get('/clasificacion', usuariosController.clasificacion);


module.exports = router;
