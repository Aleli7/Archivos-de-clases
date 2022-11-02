const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('donde tu vives ? ', function (data) {
    console.log(`Vive en ${data}`);
    rl.close();
});


rl.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});
