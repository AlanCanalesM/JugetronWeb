var mysql = require('mysql');
var connection = mysql.createConnection({
    multipleStatements: true,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'juguetronweb'
});

connection.connect(
    (err) => {
        if (!err) {
            console.log("Conexion exitosa");
        } else {
            console.log("Fallo la conexion");
        }
    }

);
/*
connection.query("SELECT * FROM usuarios", function (err, resultados) {
    console.log(resultados);
});
connection.end();
*/
module.exports = connection;

