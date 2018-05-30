var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request, response){
        console.log("Client request URL: ", request.url);
        if (request.url === "/cars"){
            fs.readFile("./views/cars.html", "utf8", function(errors, contents){
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(contents);
                response.end();
            });
        }
        else if (request.url === "/cats"){
            fs.readFile("./views/cats.html", "utf8", function(errors, contents){
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(contents);
                response.end();
            })
        }
        else if (request.url === "/cars/new"){
            fs.readFile("./views/carform.html", "utf8", function(errors, contents){
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(contents);
                response.end();
            });
        }
        else if (request.url === "/stylesheets/style.css"){
            fs.readFile("./stylesheets/style.css", "utf8", function(errors, contents){
                response.writeHead(200, {"Content-Type": "text/css"});
                response.write(contents);
                response.end();
            });
        }
        else if (request.url === "/images/Toyota1.jpg"){
            fs.readFile("./images/Toyota1.jpg", function(errors, contents){
                response.writeHead(200, {"Content-Type": "image/jpg"});
                response.write(contents);
                response.end();
            });
        }
        else if (request.url === "/images/Toyota2.jpg"){
            fs.readFile("./images/Toyota2.jpg", function(errors, contents){
                response.writeHead(200, {"Content-Type": "image/jpg"});
                response.write(contents);
                response.end();
            });
        }
        else if (request.url === "/images/Tesla1.jpg"){
            fs.readFile("./images/Tesla1.jpg", function(errors, contents){
                response.writeHead(200, {"Content-Type": "image/jpg"});
                response.write(contents);
                response.end();
            });
        }
        else if (request.url === "/images/Tesla2.jpg"){
            fs.readFile("./images/Tesla2.jpg", function(errors, contents){
                response.writeHead(200, {"Content-Type": "image/jpg"});
                response.write(contents);
                response.end();
            });
        }
        else if (request.url === "/images/Mercedez1.jpg"){
            fs.readFile("./images/Mercedez1.jpg", function(errors, contents){
                response.writeHead(200, {"Content-Type": "image/jpg"});
                response.write(contents);
                response.end();
            });
        }
        else if (request.url === "/images/Mercedez2.jpg"){
            fs.readFile("./images/Mercedez2.jpg", function(errors, contents){
                response.writeHead(200, {"Content-Type": "image/jpg"});
                response.write(contents);
                response.end();
            });
        }
       
        else if (request.url === "/images/Cat1.png"){
            fs.readFile("./images/Cat1.png", function(errors, contents){
                response.writeHead(200, {"Content-Type": "image/jpg"});
                response.write(contents);
                response.end();
            });
        }
        else if (request.url === "/images/Cat2.jpg"){
            fs.readFile("./images/Cat2.jpg", function(errors, contents){
                response.writeHead(200, {"Content-Type": "image/jpg"});
                response.write(contents);
                response.end();
            });
        }
        else if (request.url === "/images/Cat3.jpg"){
            fs.readFile("./images/Cat3.jpg", function(errors, contents){
                response.writeHead(200, {"Content-Type": "image/jpg"});
                response.write(contents);
                response.end();
            });
        }
        else if (request.url === "/images/Cat4.jpg"){
            fs.readFile("./images/Cat4.jpg", function(errors, contents){
                response.writeHead(200, {"Content-Type": "image/jpg"});
                response.write(contents);
                response.end();
            });
        }
        else if (request.url === "/images/Cat5.jpg"){
            fs.readFile("./images/Cat5.jpg", function(errors, contents){
                response.writeHead(200, {"Content-Type": "image/jpg"});
                response.write(contents);
                response.end();
            });
        }
        else if (request.url === "/images/Cat6.jpg"){
            fs.readFile("./images/Cat6.jpg", function(errors, contents){
                response.writeHead(200, {"Content-Type": "image/jpg"});
                response.write(contents);
                response.end();
            });
        }
        else {
            response.writeHead("404");
            response.end("File Not Found!!");
        }
});

server.listen(7007);
console.log("Running at localhost port 7007")