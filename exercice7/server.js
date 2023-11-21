var http=require("http");

http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/plain'});
    response.end('hello wolrd\n');
}).listen(8081);

// Affichage d’un message sur la console pour indiquer le lancement du serveur
console.log('Server running at http://127.0.0.1:8081/');