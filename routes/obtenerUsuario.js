var express = require('express');
const { response } = require('../app');
const pool = require('../conexion/conexion');
var router = express.Router();

//alan
router.get('/:nom_cuenta', (request, response) =>{

    nom_cuenta=request.params.nom_cuenta;

    pool.query("SELECT * FROM usuarios WHERE username=?", username, (error, result)  =>{


        if(error) throw error;
//response.status(200).send((result[0].id).toString());
        response.send({nombre:result[0].nombre.toString(),user:result[0].username.toString(), pass:result[0].password.toString(), email:result[0].email.toString() });


    })

})

module.exports = router;