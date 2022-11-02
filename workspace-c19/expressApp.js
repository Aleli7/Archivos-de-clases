var express = require('express');
var app = express();

app.get('/', function(peticion, respuesta) {
    respuesta.send("Mi primer pagina con express");
});

app.get('/perfil', function(peticion, respuesta) {
    respuesta.send("Este es mi perfil");
});

app.get('/perfil/miguel', function(peticion, respuesta) {
    respuesta.send("Este el perfil de miguel");
});
 
 

app.listen(8080);