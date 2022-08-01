var conexion = require("../config/conexion");
var usuarios = require("../model/usuariosModel");
var contenedor = require("../model/juguetesModel");

module.exports = {
    index: function (req, res) {
        res.render('dashboardAdmin/dashboard');
    },

    control: function (req, res) {

        usuarios.obtener(conexion, function (err, datos) {
            res.render('dashboardAdmin/ctrlUsuarios', { usuarios: datos });

        });

    },
    create: function (req, res) {

        res.render('dashboardAdmin/createUsers');

    },
    register: function (req, res) {
        console.log(req.body);
        usuarios.insertar(conexion, req.body, function (err) {
            res.redirect('/dashboardAdmin/ctrlUsuarios');
        });
    },
    eliminar: function (req, res) {
        console.log("Recepción de Datos");
        console.log(req.params.id);
        usuarios.borrar(conexion, req.params.id, function (err) {
            res.redirect('/dashboardAdmin/ctrlUsuarios');
        });
    },
    editar: function (req, res) {
        usuarios.retornarDatosId(conexion, req.params.id, function (err, registros) {
            console.log(registros[0]);
            res.render('dashboardAdmin/editUsers', { usuario: registros[0] });
        });

    },
    actualizar: function (req, res) {
        console.log(req.body.nombre);
        console.log(req.body.username);
        console.log(req.body.password);
        console.log(req.body.email);
        if (req.body.nombre) {
            usuarios.actualizar(conexion, req.body, function (err) {

            });
        }
        res.redirect('/dashboardAdmin/ctrlUsuarios');

    },
    perfilAdmin: function (req, res) {
        res.render('dashboardAdmin/perfil');
    },

    //##############Logistica de Negocio#########################
    //############Contenedores###########
    contenedores: function (req, res) {
        contenedor.obtContenedor(conexion, function (err, data) {
            res.render('dashboardAdmin/contenedores/contenedores', { contenedor: data });

        })
    },
    direcciones: function (req, res) {
        contenedor.obtUbicacion(conexion, function (err, datos) {
            res.render('dashboardAdmin/contenedores/direcciones', { contenedor: datos });
        })

    },
    //############Juguetes###########
    color: function (req, res) {
        res.render('dashboardAdmin/juguetes/color');
    },
    identificacion: function (req, res) {
        res.render('dashboardAdmin/juguetes/identificacion');
    },
    clasificacion: function (req, res) {
        res.render('dashboardAdmin/juguetes/clasificacion');
    },

}
