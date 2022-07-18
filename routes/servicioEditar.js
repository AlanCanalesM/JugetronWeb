var express = require('express');
const pool = require('../conexion/conexion');
var router = express.Router();

router.post('/', (request, response) => {
  const nombre = request.body.nombre;
  const nom_cuenta = request.body.nom_cuenta;
  const password = request.body.password;
  const email = request.body.email;
  const imagen = request.body.imagen;

  pool.query("SELECT * FROM usuarios WHERE nom_cuenta=? or email=?", [nom_cuenta, email], (error, result) => {
    
  });
});

module.exports = router;