var express = require('express');
const pool = require('../config/conexion');
var router = express.Router();



router.post('/', (request, response) => {
  const nom_cuenta= request.body.nom_cuenta;
  const password= request.body.password;
  
      pool.query("SELECT * FROM usuarios WHERE nom_cuenta=? and password=?",[nom_cuenta,password], (error, result) => {
      if (error) throw error;

      //response.status(200).send((result[0].id).toString());
      if(result[0]!=null){
       
        /*response.redirect("http://localhost:3000/");*/
        request.session.nombre=request.body.nom_cuenta;
    
        response.render('index', { nombre: request.session.nombre });
     
      }else{
        response.send("Credenciales erroneas");
       
      }
  });
});



module.exports = router;