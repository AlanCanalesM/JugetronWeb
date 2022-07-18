var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");



router.get('/', function (req, res, next) {
    
    db.query("SELECT * FROM usuarios", function (err, resultados) {
        console.log(resultados);
    });

    res.render('login', { title: 'Loggeate'});
});





module.exports = router;