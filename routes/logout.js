var express = require('express');
const pool = require('../config/conexion');
//const { route } = require('./prueba');
var router = express.Router();


router.get('/', (request, response)=>{
    request.session.destroy();
    response.render('index', {title:'index', nombre:'SIGN-UP'})
});

module.exports = router;