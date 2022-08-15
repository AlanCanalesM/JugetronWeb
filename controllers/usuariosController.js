var conexion = require("../config/conexion");
var usuarios = require("../model/usuariosModel");
var juguetes = require("../model/juguetesModel");
const usuariosModel = require("../model/usuariosModel");

module.exports = {

    index: function (req, res) {
        //res.render('dashboardAdmin/dashboard', { nombre: req.session.nombre });
        var queries = [
            "SELECT COUNT(*) AS total FROM donacion",
            "SELECT COUNT(*) AS total FROM usuarios",
            "SELECT COUNT(*) AS total FROM contenedor",
            "SELECT COUNT(*) AS total FROM ubicacion"
        ];
        conexion.query(queries.join(';'), function (err, results) {
            if (err) throw err;
           // console.log(results);
           res.render('dashboardAdmin/dashboard', {
                donaciones: results[0],
                usuarios: results[1],
                contenedores: results[2],
                ubicaciones: results[3],
                nombre:req.session.nombre
            });
        })
    },
    donaciones: function (req, res) {
        usuariosModel.obtDonaciones(conexion, function (err, datos) {
            res.render('dashboardAdmin/donaciones', { donacion: datos });
        })
        
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
            res.render('dashboardAdmin/contenedores/createContenedor', { juguetes: datos });
        });
    },
    registerContenedor: function (req, res) {

        res.send(req.body);
    },

    //########################Direcciones##################################
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
    registerDireccion: function (req, res) {
        // res.send(req.body);

        console.log(req.body);
        juguetes.inertartDireccion(conexion, req.body, function (err) {
            res.redirect('/dashboardAdmin/direcciones');
        })

    },
    eliminarDireccion: function (req, res) {
        console.log("Recepción de Datos");
        console.log(req.params.id_ubi);

        juguetes.borrarDireccion(conexion, req.params.id_ubi, function (err) {
            res.redirect('/dashboardAdmin/direcciones');
        })

    },
    editarDireccion: function (req, res) {
        juguetes.retornarDatosDireccion(conexion, req.params.id_ubi, function (err, datos) {
            console.log(datos[0]);
            res.render('dashboardAdmin/contenedores/editarDireccion', { juguetes: datos[0] });
        })

    },
    actualizarDireccion: function (req, res) {
        console.log(req.body.descripcion);
        if (req.body.descripcion) {

            juguetes.actualizarDireccion(conexion, req.body, function (err) {

            })
        }
        res.redirect('/dashboardAdmin/direcciones');
    },


    //############Juguetes###########
    //########################Direcciones##################################
    color: function (req, res) {
        juguetes.obtColor(conexion, function (err, datos) {
            res.render('dashboardAdmin/juguetes/color', { juguetes: datos });
        })

    },
    createColor: function (req, res) {

        res.render('dashboardAdmin/juguetes/createColor');

    },
    registerColor: function (req, res) {
        //res.send(req.body);
        juguetes.insertarColor(conexion, req.body, function (err) {
            res.redirect('/dashboardAdmin/color');
        })
    },
    eliminarColor: function (req, res) {
        console.log("Recepción de Datos");
        console.log(req.params.id_color);

        juguetes.borrarColor(conexion, req.params.id_color, function (err) {
            res.redirect('/dashboardAdmin/color');
        })

    },
    editarColor: function (req, res) {
        juguetes.retornarDatosColor(conexion, req.params.id_color, function (err, datos) {
            console.log(datos[0]);
            res.render('dashboardAdmin/juguetes/editarColor', { juguetes: datos[0] });
        })

    },
    actualizarColor: function (req, res) {
        console.log(req.body.descripcion);
        if (req.body.descripcion) {

            juguetes.actualizarColor(conexion, req.body, function (err) {

            })
        }
        res.redirect('/dashboardAdmin/color');
    },

    //########################Identificacion##################################
    identificacion: function (req, res) {
        juguetes.obtIdentificacion(conexion, function (err, datos) {
            res.render('dashboardAdmin/juguetes/identificacion', { juguetes: datos });
        })

    },
    createIdentificacion: function (req, res) {
        res.render('dashboardAdmin/juguetes/createIdentificacion');
    },
    registerIdentificacion: function (req, res) {
        //res.send(req.body);
        juguetes.insertarIdentificacion(conexion, req.body, function (err) {
            res.redirect('/dashboardAdmin/identificacion');
        })
    },
    eliminarIdentificacion: function (req, res) {
        console.log("Recepción de Datos");
        console.log(req.params.id_iden);

        juguetes.borrarIdentificacion(conexion, req.params.id_iden, function (err) {
            res.redirect('/dashboardAdmin/identificacion');
        })

    },
    editarIdentificacion: function (req, res) {
        juguetes.retornarDatosIden(conexion, req.params.id_iden, function (err, datos) {
            console.log(datos[0]);
            res.render('dashboardAdmin/juguetes/editarIdentificacion', { juguetes: datos[0] });
        })

    },
    actualizarIdentificacion: function (req, res) {
        console.log(req.body.descripcionIden);
        if (req.body.descripcionIden) {

            juguetes.actualizarIdentificacion(conexion, req.body, function (err) {

            })
        }
        res.redirect('/dashboardAdmin/identificacion');
    },

    //########################Clasificacion##################################
    clasificacion: function (req, res) {
        juguetes.obtClasificacion(conexion, function (err, datos) {
            res.render('dashboardAdmin/juguetes/clasificacion', { juguetes: datos });
        })

    },
    createClasificacion: function (req, res) {
        res.render('dashboardAdmin/juguetes/createClasificacion');
    },
    registerClasificacion: function (req, res) {
        //res.send(req.body);
        juguetes.insertarClasificacion(conexion, req.body, function (err) {
            res.redirect('/dashboardAdmin/clasificacion');
        })
    },
    eliminarClasificacion: function (req, res) {
        console.log("Recepción de Datos");
        console.log(req.params.id_clas);

        juguetes.borrarClasificacion(conexion, req.params.id_clas, function (err) {
            res.redirect('/dashboardAdmin/clasificacion');
        })

    },
    editarClasificacion: function (req, res) {
        juguetes.retornarDatosClas(conexion, req.params.id_clas, function (err, datos) {
            console.log(datos[0]);
            res.render('dashboardAdmin/juguetes/editarClasificacion', { juguetes: datos[0] });
        })

    },
    actualizarClasificacion: function (req, res) {
        console.log(req.body.descripcionClas);
        if (req.body.descripcionClas) {

            juguetes.actualizarClasificacion(conexion, req.body, function (err) {

            })
        }
        res.redirect('/dashboardAdmin/clasificacion');
    },

    //########################Contenedores#################

    editarContenedor: function (req, res) {
        juguetes.retornarDatosContenedor(conexion, req.params.id_cont, function (err, datos) {
            console.log(datos[0]);
            res.render('dashboardAdmin/contenedores/editarContenedor', { juguetes: datos[0] });
        })

    },
    actualizarContenedor: function (req, res) {
        console.log(req.body.nombre);
        console.log(req.body.id_ubi);
        if (req.body.nombre) {

            juguetes.actualizarContenedor(conexion, req.body, function (err) {

            })
        }
        res.redirect('/dashboardAdmin/contenedores');
    },

    eliminarContenedor: function (req, res) {
        console.log("Recepción de datos");
        console.log(req.params.id_cont);
        usuarios.borrarCont(conexion, req.params.id_cont, function (err) {
            res.redirect('/dashboardAdmin/contenedores');
        })
    }

}
