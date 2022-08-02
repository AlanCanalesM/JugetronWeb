var express = require('express');
const pool = require('../config/conexion');
var router = express.Router();



router.get('/servicioObtenerUsuario/:username', (request, response) => {

  username = request.params.username;

  pool.query("SELECT * FROM usuarios WHERE nom_cuenta=?", username, (error, result) => {


    if (error) throw error;
    //response.status(200).send((result[0].id).toString());
    response.send({ nombre: result[0].nombre.toString(), user: result[0].username.toString(), pass: result[0].password.toString(), email: result[0].email.toString() });


  });

});

router.post('/servicioEditar', (request, response) => {
  const nombre = request.body.nombre;
  const username = request.body.username;
  const password = request.body.password;
  const email = request.body.email;


  pool.query("UPDATE usuarios SET nombre=?, username=?, password=?, email=? WHERE username=?", [nombre, username, password, email, nom_cuenta], (error, result) => {

    if (error) throw error;

    response.send('Se actualizo tu registro');


  });
});

router.post('/servicioRegistrar', (request, response) => {
  const nombre = request.body.nombre;
  const username = request.body.username;
  const password = request.body.password;
  const email = request.body.email;
  const imagen = request.body.imagen;

  pool.query("SELECT * FROM usuarios WHERE username=? or email=?", [username, email], (error, result) => {
    if (error) throw error;

    //response.status(200).send((result[0].id).toString());
    if (result[0] != null) {

      /*response.redirect("http://localhost:3000/");*/
      response.send("Este nombre de usuario o email ya estan en uso");
    } else {
      pool.query("INSERT INTO usuarios (nombre, username, password, email) VALUES (?,?,?,?)", [nombre, username, password, email], (error, result) => {
        if (error) throw error;

        response.send("Agregado correctamente");

      });
    };
  });
});

router.post('/servicioLogin', (request, response) => {
  const username = request.body.username;
  const password = request.body.password;

  pool.query("SELECT * FROM usuarios WHERE username=? and password=?", [username, password], (error, result) => {
    if (error) throw error;

    //response.status(200).send((result[0].id).toString());
    if (result[0] != null) {

      /*response.redirect("http://localhost:3000/");*/
      request.session.nombre = request.body.username;
      response.render('principal', { nombre: request.session.nombre });

    } else {
      response.send("Credenciales erroneas");

    }
  });
});



module.exports = router;