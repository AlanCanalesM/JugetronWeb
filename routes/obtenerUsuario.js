var express = require('express');
const { response } = require('../app');
const pool = require('../conexion/conexion');
var router = express.Router();


router.post('/', (request, response) =>{

    nom_cuenta=request.body.nom_cuenta;

    pool.query("SELECT * FROM usuarios WHERE nom_cuenta=?", nom_cuenta, (error, result)  =>{


        if(error) throw error;

        response.send(result);


    })

})

module.exports = router;