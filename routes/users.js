const { response } = require('express');
var express = require('express');
const pool = require('../config/conexion');
var router = express.Router();



router.get('/servicioObtenerUsuario/:nom_cuenta', (request, response) => {

  nom_cuenta = request.params.nom_cuenta;

  pool.query("SELECT * FROM usuarios WHERE nom_cuenta=?", nom_cuenta, (error, result) => {


    if (error) throw error;
    //response.status(200).send((result[0].id).toString());
    response.send({ nombre: result[0].nombre.toString(), user: result[0].nom_cuenta.toString(), pass: result[0].password.toString(), email: result[0].email.toString() });


  });

});

router.post('/servicioEditar', (request, response) => {
  const nombre = request.body.nombre;
  const nom_cuenta = request.body.nom_cuenta;
  const password = request.body.password;
  const email = request.body.email;


  pool.query("UPDATE usuarios SET nombre=?, nom_cuenta=?, password=?, email=? WHERE nom_cuenta=?", [nombre, nom_cuenta, password, email, nom_cuenta], (error, result) => {

    if (error) throw error;

    response.send('Se actualizo tu registro');


  });
});

router.post('/servicioRegistrar', (request, response) => {
  const nombre = request.body.nombre;
  const nom_cuenta = request.body.nom_cuenta;
  const password = request.body.password;
  const email = request.body.email;
  const imagen = request.body.imagen;

  pool.query("SELECT * FROM usuarios WHERE username=? or email=?", [nom_cuenta, email], (error, result) => {
    if (error) throw error;

    //response.status(200).send((result[0].id).toString());
    if (result[0] != null) {

      /*response.redirect("http://localhost:3000/");*/
      response.send("Este nombre de usuario o email ya estan en uso");
    } else {
      pool.query("INSERT INTO usuarios (nombre, username, password, email) VALUES (?,?,?,?)", [nombre, nom_cuenta, password, email], (error, result) => {
        if (error) throw error;

        response.send("Agregado correctamente");

      });
    };
  });
});

router.post('/servicioLogin', (request, response) => {
  const nom_cuenta = request.body.nom_cuenta;
  const password = request.body.password;

  pool.query("SELECT * FROM usuarios WHERE username=? and password=?", [nom_cuenta, password], (error, result) => {
    if (error) throw error;

    //response.status(200).send((result[0].id).toString());
    if (result[0] != null) {

      /*response.redirect("http://localhost:3000/");*/
      request.session.nombre = request.body.nom_cuenta;
      response.render('principal/mainUsuarios', { nombre: request.session.nombre });

    } else {
      response.send("Credenciales erroneas");

    }
  });
});

router.get('/tipousuario', (request, response) =>{
  const username = request.session.nombre;

  pool.query("SELECT id_tuser from usuarios WHERE username=?", [username], (error, result)=>{
    if(error) throw error;

    if(result[0].id_tuser==1){

      response.render('dashboardAdmin/dashboard', {nombre:request.session.nombre});
    }else{
      response.render('dashboardClientes/dashboardClientes', {nombre:request.session.nombre});
    }
    
  })
})



module.exports = router;