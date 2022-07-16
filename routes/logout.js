var express = require('express');
const pool = require('../conexion/conexion');
const { route } = require('./prueba');
var router = express.Router();


router.get('/', (request, response)=>{
    request.session.destroy();
    response.render('index', {title:'index', nombre:'sn'})
});

module.exports = router;