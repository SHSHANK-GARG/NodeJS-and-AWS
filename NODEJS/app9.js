var fs = require('fs');
var text = fs.readFileSync("John.txt", 'utf-8');
var textByLine = text.split(' ');
console.log(textByLine);