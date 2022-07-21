var express = require('express');
const pool = require('../conexion/conexion');
var router = express.Router();

//alaan
router.post('/', (request, response) => {
  const nombre = request.body.nombre;
  const nom_cuenta = request.body.nom_cuenta;
  const password = request.body.password;
  const email = request.body.email;
  

  pool.query("UPDATE usuarios SET nombre=?, nom_cuenta=?, password=?, email=? WHERE nom_cuenta=?", [nombre,nom_cuenta ,password, email, nom_cuenta], (error, result) => {

    if(error) throw error;

    response.send('Se actualizo tu registro');

    
  });
});

module.exports = router;