const http= require('http');

const handleServer= function( req,res){
    res.writeHead(404, {'content-type': 'text/plain'});
    res.write('Esto es un simple texto');
    res.end();
}

const server= http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Server on port 3000');
});