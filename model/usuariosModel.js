module.exports = {
    obtener: function (conexion, funcion) {
        conexion.query("SELECT * FROM usuarios", funcion);
    },
    insertar: function (conexion, datos, funcion) {
        conexion.query("INSERT INTO usuarios (nombre, username, password, email) VALUES (?,?,?,?)", [datos.nombre, datos.username, datos.password, datos.email], funcion);
    },
    borrar: function (conexion, id, funcion) {
        conexion.query("DELETE FROM usuarios WHERE id=?", [id], funcion);
    },
    retornarDatosId: function (conexion, id, funcion) {
        conexion.query("SELECT * FROM usuarios WHERE id=?", [id], funcion);
    },
    actualizar: function (conexion, datos, funcion) {
        conexion.query("UPDATE usuarios SET nombre =?, username=?, password=?, email=? WHERE id=?", [datos.nombre, datos.username, datos.password, datos.email, datos.id], funcion);
    },
    /*
    retornarDatosIdCont: function (conexion, id_cont, funcion) {
        conexion.query("SELECT * FROM contenedor WHERE id_cont=?", [id_cont], funcion);
    },
*/
    borrarCont: function (conexion, id_cont, funcion) {
        conexion.query("DELETE FROM contenedor WHERE id_cont=?", [id_cont], funcion);
    },

    obtDonaciones: function (conexion, funcion) {
        conexion.query("SELECT d.id_donacion, us.nombre AS Usuario, cont.nombre AS Contenedor, d.descripcion, c.descripcion AS Color, iden.descripcionIden AS Tipo, clas.descripcionClas AS Clasificacion, d.cantidad, d.fecha FROM donacion AS d INNER JOIN usuarios AS us ON d.id_usuario = us.id INNER JOIN contenedor AS cont ON d.id_cont = cont.id_cont INNER JOIN color AS c ON d.id_color = c.id_color INNER JOIN identificacion AS iden ON d.id_iden = iden.id_iden INNER JOIN clasificacion AS clas ON d.id_clas = clas.id_clas", funcion);
    }


    
}