var express = require('express');
var router = express.Router();
const pool = require('../config/conexion');

const usuariosController = require("../controllers/usuariosController");


router.get('/', usuariosController.index);
//router.get('/dashboard', usuariosController.index2);
router.get('/ctrlUsuarios', usuariosController.control);
router.get('/createUsers', usuariosController.create);
router.post("/", usuariosController.register);
router.post('/delete/:id', usuariosController.eliminar);
router.get('/editar/:id', usuariosController.editar);
router.post('/actualizar', usuariosController.actualizar);
router.get('/perfil', usuariosController.perfilAdmin);



//##############Logistica de Negocio#################


        //######Contenedores##############
router.get('/contenedores', usuariosController.contenedores);
router.post("/prueba", (request, response) => {

    const nombre = request.body.nombre;
    const id_ubi = request.body.id_ubi;
    const id_cont = request.body.id_con;

    pool.query("INSERT INTO contenedor (id_cont, nombre, id_ubi) VALUES (?,?,?)", [id_cont, nombre, id_ubi], (error, result) => {
        if (error) throw error;
        //response.send(result);
        response.redirect("/dashboardAdmin/contenedores");

    })
});
router.get('/createContenedores', usuariosController.createContenedores);
router.post('/eliminar/:id_cont', usuariosController.eliminarContenedor);
router.get('/editarContenedor/editar/:id_cont', usuariosController.editarContenedor);
router.post('/contenedores/actualizar', usuariosController.actualizarContenedor);



 //######Direcciones##############
router.get('/direcciones', usuariosController.direcciones);
router.get('/createDireccion', usuariosController.createDireccion);
router.post('/direcciones', usuariosController.registerDireccion);
router.post('/direcciones/eliminar/:id_ubi', usuariosController.eliminarDireccion);
router.get('/editarDireccion/editar/:id_ubi', usuariosController.editarDireccion);
router.post('/direcciones/actualizar', usuariosController.actualizarDireccion);

//######Colores##############
router.get('/color', usuariosController.color);
router.get('/createColor', usuariosController.createColor);
router.post('/color', usuariosController.registerColor);
router.post('/color/eliminar/:id_color', usuariosController.eliminarColor);
router.get('/editarColor/editar/:id_color', usuariosController.editarColor);
router.post('/color/actualizar', usuariosController.actualizarColor);


//######Identificadores##############
router.get('/identificacion', usuariosController.identificacion);
router.get('/createIdentificacion', usuariosController.createIdentificacion);
router.post('/identificacion', usuariosController.registerIdentificacion);
router.post('/identificacion/eliminar/:id_iden', usuariosController.eliminarIdentificacion);
router.get('/editarIdentificacion/editar/:id_iden', usuariosController.editarIdentificacion);
router.post('/identificacion/actualizar', usuariosController.actualizarIdentificacion);

//######Clasificaciones##############
router.get('/clasificacion', usuariosController.clasificacion);
router.get('/createClasificacion', usuariosController.createClasificacion);
router.post('/clasificacion', usuariosController.registerClasificacion);
router.post('/clasificacion/delete/:id_clas', usuariosController.eliminarClasificacion);
router.get('/editarClasificacion/editar/:id_clas', usuariosController.editarClasificacion);
router.post('/clasificacion/actualizar', usuariosController.actualizarClasificacion);

module.exports = router;
