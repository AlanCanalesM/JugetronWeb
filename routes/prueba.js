var express = require('express');
var router = express.Router();
var db = require("../config/conexion");

/* GET sección page. (login.ejs) */
router.get('/', function (req, res, next) {
    res.render('prueba', {var1: 'Esto es una variable'});
});


module.exports = router;