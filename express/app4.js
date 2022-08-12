var express = require('express');
var date = new Date();

var app = express();

app.get('/', function(req, res){
    res.send('<h1>Hello World!<h1>')
})

app.get('/time', function(req, res){
    res.send(`${date.toISOString()}`);
})
if (process.argv[2]!=null)
 {app.listen(process.argv[2]);}
 else {
app.listen(8080);}