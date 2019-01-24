const x = require("./module1");
const http = require("http");
const fs = require("fs");
const url = require('url');

http.createServer((request, response) => { 
     response.writeHead(200, { "content-type": "text/html" });
    
    if (request.url.charAt(0) == "/") {
        response.writeHead(200, { "content-type": "text/html" });
        let param = url.parse(request.url, true).query;
        response.write(param.d + "<br />");
        response.write(" " + param.d.firstName);
        // response.write(' ' + param.ename);
        
        response.end();
       
    }
    else  if (request.url == "/saleel") {
        response.writeHead(200, { "content-type": "text/html" });
        response.write("Saleel.html");
        response.end();
    }
        
    else {
        response.writeHead(404, { "content-type": "text/html" });
        response.write("<h1> Page not found... </h1>");
        response.end();
    }
    

}).listen(8080, () => {
    console.log("http server started on localhost:8080");
})


console.log();