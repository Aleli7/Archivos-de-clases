var http = require('http');
var uc = require('upper-case');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(uc.upperCase("Mi primera web node!"));
    response.end();
});

server.listen(8080);