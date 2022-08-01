var conexion = require("../config/conexion");
var donaciones = require("../model/juguetesModel");
const { identificacion } = require("./usuariosController");

module.exports = {
    clienteMain: function (req, res) {
        res.render('dashboardClientes/dashboardClientes');
    },

    donar: function (req, res) {
        donaciones.obtUbicacion(conexion, function (err, datos) {
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