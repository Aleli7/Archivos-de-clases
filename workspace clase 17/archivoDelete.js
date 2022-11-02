
var fs = require('fs');



fs.unlink(__dirname+'/texto3.js', (err) => {
    if (err) throw err;
    console.log('path/file.txt was deleted');
  });