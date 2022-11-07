const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
var fs = require('fs');

morgan(':method :url :status :res[content-length] - :response-time ms');

//imprimimos en consola todo lo que sucede
app.use(function (req, res, next) {
    var data = {
        "httpVersion": req.httpVersion,
        "headers": req.headers,
        "url": req.url,
        "method": req.method,
        "query": req.query
    };
    console.log(JSON.stringify(data));
    next();
});

//var personas = [];

//ABM: ALTA BAJA Y MODIFICACION
//CRUD: CREATE / READ / UPDATED / DELETE


//listamos personas
app.get('/api/persona', function (req, res) {
    var personas = fs.readFileSync(__dirname + '/personas.json');
    res.send(personas);
});

//creamos persona
app.post('/api/persona', function (req, res) {
    var persona = {
        "nombre": req.body.nombre,
        "apellido": req.body.apellido,
        "dni": req.body.dni,
    };
    var personasString = fs.readFileSync(__dirname + '/personas.json');
    var personas = JSON.parse(personasString);
    
    for (var index in personas) {
        var personaExistente = personas[index];
        if (persona.dni == personaExistente.dni) {
            res.send(`Ya existe la persona ${personaExistente.nombre} ${personaExistente.apellido} ${personaExistente.dni}`);
            return;
        }
    }
    personas.push(persona);

    fs.writeFileSync(__dirname+'/personas.json', JSON.stringify(personas));
   
    res.send(`Se creó la persona ${persona.nombre} ${persona.apellido} ${persona.dni}`);
});

//modificamos persona
app.put('/api/persona', function (req, res) {
    var dni = req.body.dni;
    
    var personas = JSON.parse(fs.readFileSync(__dirname + '/personas.json'));

    for (var index in personas) {
        var persona = personas[index];
        if (persona.dni == dni) {
            persona.nombre = req.body.nombre;
            persona.apellido = req.body.apellido;
        }
    }

    fs.writeFileSync(__dirname+'/personas.json', JSON.stringify(personas));
    res.send(`Se modificó la persona ${req.body.nombre} ${req.body.apellido} ${req.body.dni}`);
});

//eliminamos persona
app.delete('/api/persona/:dni', function (req, res) {
    var dni = req.params.dni;
    var personas = JSON.parse(fs.readFileSync(__dirname + '/personas.json'));

    for (var index in personas) {
        var persona = personas[index];
        if (persona.dni == dni) {
            personas.splice(index,1);
            fs.writeFileSync(__dirname+'/personas.json', JSON.stringify(personas));
            res.send(`Se eliminó la persona ${req.params.dni}`);
            return;
        }
    }

   
    res.send(`No se encontró la persona ${req.params.dni}`);
});


app.get('/api/archivo', function (req, res) {
     res.attachment('archivo.txt')
    //res.append('Content-Disposition', 'attachment; filename="archivo.pdf"')
    res.end("Este es el contenido");
});


 app.get('/api/imagen', function (req, res) {
   //deben tener una imagen con dicho nombre en la carpeta del proyecto
   var imagen = fs.readFileSync(__dirname + '/imagen.jpeg');
   res.attachment('meme.jpeg')
   res.end(imagen);
});

app.get('/api/imagen/descarga', function (req, res) {
    res.download('./imagen.jpeg',"imagen2.jpeg")
 });
 

app.get('/api/video', function (req, res) {
    //deben tener una imagen con dicho nombre en la carpeta del proyecto
    var video = fs.readFileSync(__dirname + '/public/video.mp4');
     res.attachment('video.mp4')
    res.end(video);
 });

 app.use('/static', express.static('public'))
 


app.listen(8080, () => {
    console.debug('App escuchando puerto :8080');
});
