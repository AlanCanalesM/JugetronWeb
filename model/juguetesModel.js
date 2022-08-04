var conexion = require("../config/conexion");
module.exports = {

    obtContenedor: function (conexion, funcion) {
        conexion.query("SELECT a.id_cont, a.nombre, b.descripcion FROM contenedor a INNER JOIN ubicacion b ON a.id_ubi = b.id_ubi", funcion);
    },

    obtUbicacion: function (conexion, funcion) {
        conexion.query("SELECT * FROM ubicacion", funcion);
    },
    retornarDatosDireccion: function (conexion, id_ubi, funcion) {
        conexion.query("SELECT * FROM ubicacion WHERE id_ubi=?",[id_ubi], funcion)
    },
    actualizarDireccion: function (conexion, datos, funcion) {
        conexion.query("UPDATE ubicacion SET descripcion=? WHERE id_ubi = ?", [datos.descripcion, datos.id_ubi], funcion);
    },
    obtColor: function (conexion, funcion) {
        conexion.query("SELECT * FROM color", funcion);
    },
    retornarDatosColor: function (conexion, id_color, funcion) {
        conexion.query("SELECT * FROM color WHERE id_color=?",[id_color], funcion)
    },
    actualizarColor: function (conexion, datos, funcion) {
        conexion.query("UPDATE color SET descripcion=? WHERE id_color = ?", [datos.descripcion, datos.id_color], funcion);
    },
    obtIdentificacion: function (conexion, funcion) {
        conexion.query("SELECT * FROM identificacion", funcion);
    },
    retornarDatosIden: function (conexion, id_iden, funcion) {
        conexion.query("SELECT * FROM identificacion WHERE id_iden=?", [id_iden], funcion);
    },
    actualizarIdentificacion: function (conexion, datos, funcion) {
        conexion.query("UPDATE identificacion SET descripcionIden=? WHERE id_iden = ?", [datos.descripcionIden, datos.id_iden], funcion);
    },
    obtClasificacion: function (conexion, funcion) {
        conexion.query("SELECT * FROM clasificacion", funcion);
    },
    retornarDatosClas: function (conexion, id_clas, funcion) {
        conexion.query("SELECT * FROM clasificacion WHERE id_clas=?", [id_clas], funcion);
    },
    actualizarClasificacion: function (conexion, datos, funcion) {
        conexion.query("UPDATE clasificacion SET descripcionClas=? WHERE id_clas = ?", [datos.descripcionClas, datos.id_clas], funcion);
    },
    insertarContenedor: function (conexion, datos, funcion) {
        conexion.query("INSERT INTO contenedor (id_cont, nombre, id_ubi) VALUES (?,?,?)", [datos.id_cont, datos.nombre, datos.id_ubi], funcion);
    },
    obtCar: function (conexion, funcion) {
        conexion.query("SELECT DISTINCT clas.descripcionClas, iden.descripcionIden, col.descripcion, u.descripcion FROM clasificacion as clas, identificacion as iden, color as col, ubicacion as u", funcion);
    },
    
    //Direcciones
    inertartDireccion: function (conexion, datos, funcion) {
        conexion.query("INSERT INTO ubicacion (descripcion) VALUES (?)", [datos.descripcion], funcion);
    },

    insertarColor: function (conexion, datos, funcion) {
        conexion.query("INSERT INTO color (descripcion) VALUES (?)", [datos.descripcion], funcion);
    },
    insertarIdentificacion: function (conexion, datos, funcion) {
        conexion.query("INSERT INTO identificacion (descripcionIden) VALUES (?)", [datos.descripcionIden], funcion);
    },
    insertarClasificacion: function (conexion, datos, funcion) {
        conexion.query("INSERT INTO clasificacion (descripcionClas) VALUES (?)", [datos.descripcionClas], funcion);
    },
    borrarClasificacion: function (conexion, id_clas, funcion) {
        conexion.query("DELETE FROM clasificacion WHERE id_clas=?", [id_clas], funcion);
    },
    borrarIdentificacion: function (conexion, id_iden, funcion) {
        conexion.query("DELETE FROM identificacion WHERE id_iden=?", [id_iden], funcion);
    },
    borrarColor: function (conexion, id_color, funcion) {
        conexion.query("DELETE FROM color WHERE id_color=?", [id_color], funcion);
    },
    borrarDireccion: function (conexion, id_ubi, funcion) {
        conexion.query("DELETE FROM ubicacion WHERE id_ubi=?", [id_ubi], funcion);
    },

}