
const { query } = require("express");
var conexion = require("../config/conexion");
module.exports={

    insertarDon: function (conexion, datos, funcion) {
        conexion.query("INSERT INTO donacion(id_cont, descripcion, id_color, id_iden, id_clas, cantidad) VALUES (?,?,?,?,?,?)",[datos.id_cont, datos.descripcion,datos.id_color, datos.id_iden, datos.id_clas, datos.cantidad], funcion);
    },

    obtDonaciones: function (conexion, funcion) {
        conexion.query("SELECT d.id_donacion, us.nombre AS Usuario, cont.nombre AS Contenedor, d.descripcion, c.descripcion AS Color, iden.descripcionIden AS Tipo, clas.descripcionClas AS Clasificacion, d.cantidad, d.fecha FROM donacion AS d INNER JOIN usuarios AS us ON d.id_usuario = us.id INNER JOIN contenedor AS cont ON d.id_cont = cont.id_cont INNER JOIN color AS c ON d.id_color = c.id_color INNER JOIN identificacion AS iden ON d.id_iden = iden.id_iden INNER JOIN clasificacion AS clas ON d.id_clas = clas.id_clas WHERE id_usuario = 10", funcion);
    }
}