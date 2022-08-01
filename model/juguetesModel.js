module.exports ={

    obtContenedor:function (conexion, funcion) {
        conexion.query("SELECT a.id_cont, b.descripcion FROM contenedor a INNER JOIN ubicacion b ON a.id_ubi = b.id_ubi", funcion);
    },

    obtUbicacion:function (conexion, funcion) {
        conexion.query("SELECT * FROM ubicacion", funcion);
    }

}