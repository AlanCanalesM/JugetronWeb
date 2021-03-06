module.exports={
    obtener:function (conexion, funcion) {
        conexion.query("SELECT * FROM usuarios", funcion);
    },
    insertar:function (conexion, datos, funcion) {
        conexion.query("INSERT INTO usuarios (nombre, nom_cuenta, password, email) VALUES (?,?,?,?)",[datos.nombre, datos.nom_cuenta, datos.password, datos.email], funcion);
    },
    borrar:function (conexion, id, funcion ) {
        conexion.query("DELETE FROM usuarios WHERE id=?", [id], funcion);
    },
    retornarDatosId:function (conexion,id,funcion) {
        conexion.query("SELECT * FROM usuarios WHERE id=?", [id], funcion);
    },
    actualizar:function (conexion, datos, funcion) {
        conexion.query("UPDATE usuarios SET nombre =?, nom_cuenta=?, password=?, email=? WHERE id=?",[datos.nombre, datos.nom_cuenta, datos.password, datos.email, datos.id], funcion);
    },
}