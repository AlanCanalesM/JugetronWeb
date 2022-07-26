var conexion = require("../config/conexion");
var usuarios = require("../model/usuariosModel");

module.exports = {
    index: function (req, res) {
<<<<<<< HEAD
        res.render('dashboardAdmin/dashboard');
    },

    control: function (req, res) {

        usuarios.obtener(conexion, function (err, datos) {
            console.log(datos);
            res.render('dashboardAdmin/ctrlUsuarios', { usuarios: datos });
=======

        usuarios.obtener(conexion, function (err, datos) {
            console.log(datos);
            res.render('ctrlUsuarios/ctrlUsuarios', { usuarios: datos });
>>>>>>> 8abb40be1b70be16c8d0afcd98ef839f7c2ec6b1
        });

    },

    create: function (req, res) {

<<<<<<< HEAD
        res.render('dashboardAdmin/createUsers');
=======
        res.render('ctrlUsuarios/createUsers');
>>>>>>> 8abb40be1b70be16c8d0afcd98ef839f7c2ec6b1

    },
    register: function (req, res) {
        console.log(req.body);
        usuarios.insertar(conexion, req.body, function (err) {
<<<<<<< HEAD
            res.redirect('dashboardAdmin/ctrlUsuarios');
=======
            res.redirect('/ctrlUsuarios');
>>>>>>> 8abb40be1b70be16c8d0afcd98ef839f7c2ec6b1
        });
    },
    eliminar: function (req, res) {
        console.log("Recepción de Datos");
        console.log(req.params.id);
        usuarios.borrar(conexion, req.params.id, function (err) {
<<<<<<< HEAD
            res.redirect('dashboardAdmin/ctrlUsuarios');
=======
            res.redirect('/ctrlUsuarios');
>>>>>>> 8abb40be1b70be16c8d0afcd98ef839f7c2ec6b1
        });
    },
    editar: function (req, res) {
        usuarios.retornarDatosId(conexion, req.params.id, function (err, registros) {
            console.log(registros[0]);
<<<<<<< HEAD
            res.render('dashboardAdmin/editUsers', { usuario: registros[0] });
=======
            res.render('ctrlUsuarios/editUsers', { usuario: registros[0] });
>>>>>>> 8abb40be1b70be16c8d0afcd98ef839f7c2ec6b1
        });

    },

    actualizar: function (req, res) {
        console.log(req.body.nombre);
        console.log(req.body.nom_cuenta);
        console.log(req.body.password);
        console.log(req.body.email);
        if (req.body.nombre) {
            usuarios.actualizar(conexion, req.body, function (err) {

            });
        }
<<<<<<< HEAD
        res.redirect('/dashboardAdmin/ctrlUsuarios');

    },
    perfilAdmin: function (req, res) {
        res.render('dashboardAdmin/perfil');
=======
        res.redirect('/ctrlUsuarios');

>>>>>>> 8abb40be1b70be16c8d0afcd98ef839f7c2ec6b1
    }
}