var mysql = require('mysql');

// Agregue las credenciales para acceder a su base de datos
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'silicon'
});

// conectarse a mysql
connection.connect(function (err) {
    if (err) {
        console.log(`${err.code} ${err.fatal}`);
    } else {
        console.log("Conexion a DB exitosa");
    }
});

// $query = 'SELECT * from alumnos';

// connection.query($query, function(err, rows, fields) {
//    if(err){
//        console.log("An error ocurred performing the query.");
//        return;
//    }
//    console.log("Consulta ejecutada con éxito:", rows);
// });

var id = "7";
connection.query('DELETE from alumnos WHERE alumnoId='+id, function (err, rows, fields) {
   if (err) {
       console.log("An error ocurred performing the query."+ err);
       return;
   }
   console.log("Consulta ejecutada con éxito:", rows);
});



connection.end();