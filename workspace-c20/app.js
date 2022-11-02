const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'));
morgan(':method :url :status :res[content-length] - :response-time ms');


app.param('id', function(req, res, next, id) {
    if(!isNaN(id) && !isNaN(parseInt(id))){
        next();
    }else{
        res.send("ID debe ser un numero entero")
    } 
});


app.get('/api/users/:id', function(req, res) {
 res.send('Hello id: ' + req.params.id + '!');
});

app.listen(8080, () => {
console.debug('App escuchando puerto :8080');
});
