var conexion = require("../config/conexion");
var donaciones = require("../model/juguetesModel");
const { identificacion } = require("./usuariosController");

//dfsdf

module.exports = {
    clienteMain: function (req, res) {
        res.render('dashboardClientes/dashboardClientes', {nombre:req.session.nombre});
    },

    donar: function (req, res) {
        /*
        donaciones.obtCaracteristicas(conexion, function (err, datos) {
            res.render('dashboardClientes/clientesDonar', { donaciones: datos });
        })
        */
        donaciones.obtCaracteristicas(conexion, function (err, datos) {
            res.render('dashboardClientes/clientesDonar', { donaciones: datos });
        })

    },

    misDonaciones: function (req, res) {
        res.render('dashboardClientes/misDonaciones');
    },

    perfilCliente: function (req, res) {
        res.render('dashboardClientes/perfil');
    },
}