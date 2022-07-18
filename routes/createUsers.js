var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");

router.get('/', (req, res) => {
    res.render('createUsers');
 

});

module.exports = router;