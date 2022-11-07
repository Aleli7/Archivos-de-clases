const express = require('express');
const app = express();
var fs = require('fs');
  
app.use('/static', express.static('public'))

app.listen(8080);
