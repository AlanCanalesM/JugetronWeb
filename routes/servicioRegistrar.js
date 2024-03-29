var express = require('express');
const pool = require('../conexion/conexion');
var router = express.Router();
const fs = require('fs');



router.post('/', (request, response) => {
  const nombre = request.body.nombre;
  const nom_cuenta = request.body.nom_cuenta;
  const password = request.body.password;
  const email = request.body.email;
  const imagen = request.body.imagen;

  pool.query("SELECT * FROM usuarios WHERE nom_cuenta=? or email=?", [nom_cuenta, email], (error, result) => {
    if (error) throw error;

    //response.status(200).send((result[0].id).toString());
    if (result[0] != null) {

      /*response.redirect("http://localhost:3000/");*/
      response.send("Este nombre de usuario o email ya estan en uso");
    } else {
      pool.query("INSERT INTO usuarios (nombre, nom_cuenta, password, email) VALUES (?,?,?,?)", [nombre, nom_cuenta, password, email], (error, result) => {
        if (error) throw error;

        response.send("Agregado correctamente");

      });
    };
  });
});

module.exports = router;