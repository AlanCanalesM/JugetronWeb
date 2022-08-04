var conexion = require("../config/conexion");
var usuarios = require("../model/usuariosModel");
var juguetes = require("../model/juguetesModel");

module.exports = {
    index: function (req, res) {
        res.render('dashboardAdmin/dashboard', { nombre: req.session.nombre });
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
        usuarios.insertar(conexion, req.body, function (err) {
            //res.send(req.params);
            res.redirect("dashboardAdmin/ctrlUsuarios");
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
        juguetes.obtContenedor(conexion, function (err, data) {
            res.render('dashboardAdmin/contenedores/contenedores', { juguetes: data });

        })
    },
    createContenedores: function (req, res) {
        juguetes.obtUbicacion(conexion, function (err, datos) {
            res.render('dashboardAdmin/contenedores/createContenedor', );
        });
    },
    registerContenedor: function (req, res) {

        res.send(req.body);
    },
    direcciones: function (req, res) {
        juguetes.obtUbicacion(conexion, function (err, datos) {
            res.render('dashboardAdmin/contenedores/direcciones', { juguetes: datos });
        })

    },
    createDireccion: function (req, res) {
        juguetes.obtUbicacion(conexion, function (err, datos) {
            res.render('dashboardAdmin/contenedores/createDireccion', { juguetes: datos });
        })
        
    },
    

    //############Juguetes###########
    color: function (req, res) {
        juguetes.obtColor(conexion, function (err, datos) {
            res.render('dashboardAdmin/juguetes/color', { juguetes: datos });
        })

    },
    identificacion: function (req, res) {
        juguetes.obtIdentificacion(conexion, function (err, datos) {
            res.render('dashboardAdmin/juguetes/identificacion', { juguetes: datos });
        })

    },
    clasificacion: function (req, res) {
        juguetes.obtClasificacion(conexion, function (err, datos) {
            res.render('dashboardAdmin/juguetes/clasificacion', { juguetes: datos });
        })

    },

    editarCont: function (req, res) {
        juguetes.retornarDatosIdCont(conexion, req.params.id, function (err, registros) {
            console.log(registros[0]);
            res.render('dashboardAdmin/editContenedor', { juguetes: registros[0] });
        });
    },
    actualizarCont: function (req, res) {
        console.log(req.body.nombre);
        console.log(req.body.id_ubi);
        if (req.body.nombre) {
            usuarios.actualizar(conexion, req.body, function (err) {

            });
        }
        res.redirect('/dashboardAdmin/ctrlUsuarios');

    },

    eliminarContenedor: function (req, res) {
        console.log("Recepción de datos");
        console.log(req.params.id_cont);
        usuarios.borrarCont(conexion, req.params.id_cont, function (err) {
            res.redirect('/dashboardAdmin/contenedores');
        })
    }

}
