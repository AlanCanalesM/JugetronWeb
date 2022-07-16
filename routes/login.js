var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");




// Middlewares



/* GET sección page. (login.ejs) */
/*router.get('/', function (req, res, next) {
    
    db.query("SELECT * FROM usuarios", function (err, resultados) {
        console.log(resultados);
    });

    res.render('login', { title: 'Loggeate' });
});*/

router.get('/', function (req, res, next) {
    
    db.query("SELECT * FROM usuarios", function (err, resultados) {
        console.log(resultados);
    });

    res.render('login', { title: 'Loggeate'});
});





module.exports = router;