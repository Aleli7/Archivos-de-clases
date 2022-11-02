var http = require('http');

var miServidor = http.createServer((peticion, respuesta) => {
   respuesta.writeHead(200, { 'Content-Type' : 'text/plain' });
   respuesta.end('Hola alumnos curso Silicon! v5');
});

miServidor.listen(3000,'127.0.0.1');