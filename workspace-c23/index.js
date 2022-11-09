require("rootpath")();
const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');
const config = require("config.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
morgan(':method :url :status :res[content-length] - :response-time ms');

//conectarnos a nuestra DB
var connection = mysql.createConnection(config.database);

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("DB Conectada correctamente");
    }
});
//fin de conexion db

app.get("/", function (req, res) {
    res.send("Mi primer ABM con NODE y MYSQL");
});

app.get('/api/persona/', function (req, res) {
    connection.query("SELECT * FROM personas", function (err, result, fields) {
        if (err) {
            res.status(500).send({
                message: "Surgio un problema, contactese con un administrador. Gracias",
                detail: err
            });
            console.error(err);
        } else {
            res.json(result);
        }
    });
});

app.post('/api/persona/', function (req, res) {
    var query = 'INSERT INTO personas (dni,nombre,apellido) VALUES (?,?,?)'
    var dbParams = [req.body.dni, req.body.nombre, req.body.apellido];
    connection.query(query, dbParams, function (err, result, fields) {
        if (err) {
            res.status(500).send({
                message: "Surgio un problema, contactese con un administrador. Gracias",
                detail: err
            });
            console.error(err);
        } else {
            res.json({
                message: `Se creo la persona ${req.body.apellido} ${req.body.nombre}`,
                detail: result
            });
        }
    });
});

app.put('/api/persona/:dni', function (req, res) {
    var query = 'UPDATE personas SET dni = ? , nombre = ?, apellido = ? WHERE dni = ?'
    var dbParams = [req.body.dni, req.body.nombre, req.body.apellido,req.params.dni];
    connection.query(query, dbParams, function (err, result, fields) {
        if (err) {
            res.status(500).send({
                message: "Surgio un problema, contactese con un administrador. Gracias",
                detail: err
            });
            console.error(err);
        } else {
            if(result.affectedRows == 0){
                res.status(404).json({
                    message: `No se encontro la persona ${req.params.dni}`,
                    detail: result
                });
            }else{
                res.json({
                    message: `Se modifico la persona ${req.body.apellido} ${req.body.nombre}`,
                    detail: result
                });
            }
        }
    });
});

app.delete('/api/persona/:dni', function (req, res) {
    var query = 'DELETE FROM personas WHERE dni = ?'
    connection.query(query, req.params.dni, function (err, result, fields) {
        if (err) {
            res.status(500).send({
                message: "Surgio un problema, contactese con un administrador. Gracias",
                detail: err
            });
            console.error(err);
        } else {
            if(result.affectedRows == 0){
                res.status(404).json({
                    message: `No se encontro la persona ${req.params.dni}`,
                    detail: result
                });
            }else{
                res.json({
                    message: `Se elimino la persona ${req.params.dni}`,
                    detail: result
                });
            }
        }
    });
});





app.listen(config.server.port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server iniciado en puerto:${config.server.port}`);
    }
});