var http = require('http');
var fs = require("fs");
var server = http.createServer(function(request, response){
    console.log("client request URL: ", request.url);
    if (request.url === '/'){
        fs.readFile("index.html", "utf-8", function(errors, contents){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end()
        });
    }
    else if (request.url === "/pokemons"){
        fs.readFile("pokemons.html", "utf-8", function(errors, contents){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end()
        });    
    }
    else if (request.url === "/dojos/new"){
        fs.readFile("dojos.html", "utf-8", function(errors, contents){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end()
        });
    }
    else if (request.url === "/style.css"){
        fs.readFile("style.css", function(errors, contents){
            response.writeHead(200, {"Content-Type": "text/css"});
            response.write(contents);
            response.end()
        });
    }
    else {
        response.end("File Not Found!")
    }
});

server.listen(6789);
console.log("Running in localhost at port 6789");