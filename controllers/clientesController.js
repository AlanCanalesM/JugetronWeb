var conexion = require("../config/conexion");
var donaciones = require("../model/juguetesModel");
var donar = require("../model/clientesModel");
const { identificacion } = require("./usuariosController");

//dfsdf

module.exports = {
    
    clienteMain: function (req, res) {
        res.render('dashboardClientes/dashboardClientes', { nombre: req.session.nombre });
    },

    donar: function (req, res) {
        donaciones.obtCaracteristicas(conexion, function (err, datos) {
            res.render('dashboardClientes/clientesDonar', { donaciones: datos, nombre:req.session.nombre });
        })

    },

    registerDon: function (req, res) {
        //res.send(req.body);
        //res.send(req.body);
       

        donar.insertarDon(conexion,req.body, req.session.idusu, function (err, result) {

            
            res.redirect("/dashboardClientes/misDonaciones");
            //res.send(result);
        });
    },

    misDonaciones: function (req, res) {

        donar.obtDonaciones(conexion, req.session.idusu,function (err, datos) {
            console.log(datos);
            res.render('dashboardClientes/misDonaciones', { donar: datos, nombre:req.session.nombre });
        });

    },

    perfilCliente: function (request, res) {
        res.render('dashboardClientes/perfil', {nombre: request.session.nombre, username:request.session.username, pass:request.session.pass, email:request.session.email , tipo:request.session.tipo});
    },
}