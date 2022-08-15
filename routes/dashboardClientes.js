const pool = require('../config/conexion');
var express = require('express');
var router = express.Router();

const clientesController = require("../controllers/clientesController");
const { identificacion } = require('../controllers/usuariosController');
const mainController = require('../controllers/mainController');


router.get('/', clientesController.clienteMain);
//router.get('/dashboard', clientesController.clienteMain2);
router.get('/clientesDonar', (req, res) => {
    var queries = [
        "SELECT * FROM ubicacion",
        "SELECT * FROM identificacion",
        "SELECT * FROM clasificacion",
        "SELECT * FROM color"
    ];
    pool.query(queries.join(';'), function (err, results) {
        if (err) throw err;
       // console.log(results);
        res.render('dashboardClientes/clientesDonar', {
            ubicacion: results[0],
            identificacion: results[1],
            clasificacion: results[2],
            color: results[3],
            nombre:req.session.nombre
        });
    })
});
router.get('/misDonaciones', clientesController.misDonaciones);
router.get('/perfil', clientesController.perfilCliente);
router.post('/misDonaciones', clientesController.registerDon);


router.get('principal/index2', mainController.index2);


module.exports = router;