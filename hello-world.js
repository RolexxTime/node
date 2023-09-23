console.log("HELLO WORLD")

var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    response.end('<h1>Hello Node!!!!</h1>\n');
 }).listen(3000);
 
 console.log('Server running at http://127.0.0.1:3000/');

var fs = require("fs");

fs.readFile('welcome.txt', function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
});

var fs = require("fs");

fs.readFile('hello.txt', function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
});
