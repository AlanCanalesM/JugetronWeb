var conexion = require("../config/conexion");
module.exports = {

    obtContenedor: function (conexion, funcion) {
        conexion.query("SELECT a.id_cont, a.nombre, b.descripcion FROM contenedor a INNER JOIN ubicacion b ON a.id_ubi = b.id_ubi", funcion);
    },

    obtUbicacion: function (conexion, funcion) {
        conexion.query("SELECT * FROM ubicacion", funcion);
    },

    obtColor: function (conexion, funcion) {
        conexion.query("SELECT * FROM color", funcion);
    },

    obtIdentificacion: function (conexion, funcion) {
        conexion.query("SELECT * FROM identificacion", funcion);
    },

    obtClasificacion: function (conexion, funcion) {
        conexion.query("SELECT * FROM clasificacion", funcion);
    },
    insertarContenedor: function (conexion, datos, funcion) {
        conexion.query("INSERT INTO contenedor (id_cont, nombre, id_ubi) VALUES (?,?,?)", [datos.id_cont, datos.nombre, datos.id_ubi], funcion);
    },
    obtCar: function (conexion, funcion) {
        conexion.query("SELECT DISTINCT clas.descripcionClas, iden.descripcionIden, col.descripcion, u.descripcion FROM clasificacion as clas, identificacion as iden, color as col, ubicacion as u", funcion);
    },
    obtCaracteristicas: function (consulta1, consulta2, consulta3, consulta4, funcion) {
        consulta1 = conexion.query("SELECT * FROM ubicacion", funcion);
        consulta2 = conexion.query("SELECT * FROM identificacion", funcion);
    },

}