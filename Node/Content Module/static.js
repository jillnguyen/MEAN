const http = require('http');
const   fs = require('fs');

module.exports = function (request, response){
    if(request.url === '/'){
    fs.readFile('index.html', 'utf8', function (errors, contents) {
        response.write(contents); 
        response.end();
    });
    } else if(request.url === '/dojo'){
    fs.readFile('dojos.html', 'utf8', function (errors, contents) {
        response.write(contents);
        response.end();
    });
    } else if(request.url === '/stylesheet/style.css'){
    fs.readFile('stylesheet/style.css', 'utf8', function (errors, contents) {
        response.write(contents);
        response.end();
    });
    } else {
        response.end('File not found!!!');
    }
}
