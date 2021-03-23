const http = require('http');

http.createServer(function(req,res){

    res.writeHead(200);
    res.write('<h1> hola mundo desde nodejs</h1>');
    res.end();

    
}).listen(3000);

console.log("Servidor Iniciado");