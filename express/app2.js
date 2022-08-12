var express = require('express');
var fs = require('fs');

var app = express();

app.listen(3000);

app.get('/year/:id', function(req,res)
{
    
    var currentYear = new Date().getFullYear();
    var year = currentYear-(req.params.id);
    res.send("You were born in " + year);
});
