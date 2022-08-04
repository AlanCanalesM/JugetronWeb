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
            res.render('dashboardClientes/clientesDonar', { donaciones: datos });
        })

    },

    registerDon: function (req, res) {
        // res.send(req.body);
        console.log(req.body);
        donar.insertarDon(conexion, req.body, function (err) {

            res.redirect("/dashboardClientes/misDonaciones");
        });

    },

    misDonaciones: function (req, res) {
        
        donar.obtDonaciones(conexion, function (err, datos) {
            console.log(datos);
            res.render('dashboardClientes/misDonaciones', { donar: datos });
        });

    },

    perfilCliente: function (req, res) {
        res.render('dashboardClientes/perfil');
    },
}