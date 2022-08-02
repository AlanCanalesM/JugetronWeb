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
    obtCaracteristicas: function (conexion, funcion) {
        conexion.query("SELECT DISTINCT clas.id_clas, clas.descripcionClas, iden.id_iden, iden.descripcionIden, col.id_color, col.descripcion, u.id_ubi, u.descripcion FROM clasificacion as clas, identificacion as iden, color as col, ubicacion as u", funcion);
    }

}