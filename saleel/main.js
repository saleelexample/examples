const x = require("./module1");
const http = require("http");
const fs = require("fs");
const url = require('url');
const querystring = require('querystring');

http.createServer((request, response) => {
    response.writeHead(200, { "content-type": "text/html" });
    

    if (request.url.charAt(0) == "/") {
        response.writeHead(200, { "content-type": "text/html" });
        let param = url.parse(request.url, true).query;
        response.write(param.emp);
        let j = JSON.parse(param.emp);
        response.write(""+ j);
        //response.write(param.emp + "<br />");
        response.write('' + j[0].firstName+ "<br />");
        response.write('' + j[0].lastName+ "<br />");
        response.write('' + j[0].age+ "<br />");
        response.write("------------------------------------------<br />");
        response.write('' + j[1].firstName+ "<br />");
        response.write('' + j[1].lastName+ "<br />");
        response.write('' + j[1].age+ "<br />");
        response.end();
    }
    else if (request.url == "/saleel") {
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
});