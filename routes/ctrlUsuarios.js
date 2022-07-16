var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");

/* GET sección page. (login.ejs) */
router.get('/', function (req, res, next) {
    
    db.query("SELECT * FROM usuarios", function (err, resultados) {
        console.log(resultados);
        if (err) {  
            throw err;
        }else{
            res.render('ctrlUsuarios', {resultados:resultados});
        }
    });

    
});


module.exports = router;