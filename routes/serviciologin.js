var express = require('express');
const pool = require('../conexion/conexion');
var router = express.Router();



router.post('/', (request, response) => {
  const nombre= request.body.nombre;
  const password= request.body.password;
  
      pool.query("SELECT * FROM usuarios WHERE nombre=? and password=?",[nombre,password], (error, result) => {
      if (error) throw error;

      //response.status(200).send((result[0].id).toString());
      if(result[0]!=null){
       
        /*response.redirect("http://localhost:3000/");*/
        request.session.nombre=request.body.nombre;
    
        response.render('index', { nombre: request.session.nombre });
     
      }else{
        response.send("Credenciales erroneas");
       
      }
  });
});




module.exports = router;