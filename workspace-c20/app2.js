const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('tiny'));
morgan(':method :url :status :res[content-length] - :response-time ms');

app.listen(8080, () => {
   console.debug('App listening on :8080');
});

app.get("/",(req,res)=>{
   res.send("Prueba log");
});
