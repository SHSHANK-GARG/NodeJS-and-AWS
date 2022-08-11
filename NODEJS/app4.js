var fs = require('fs');

fs.writeFileSync('q4.txt', 'hey ho!! lets go!');
console.log( fs.readFileSync('q4.txt', 'utf8'));