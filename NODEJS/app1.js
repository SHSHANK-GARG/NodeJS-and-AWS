var http = require('http');
var server =http.createServer(function(req,res){
    console.log('Request was made' + req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('connected to server')
});
server.listen(3000,'127.0.0.1');
console.log('Success ! Now listening from port 3000');