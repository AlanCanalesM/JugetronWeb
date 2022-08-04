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
    }


    
}