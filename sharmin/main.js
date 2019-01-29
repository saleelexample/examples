const http = require("http");
const url = require("url");

http.createServer((request, response)=>{
    response.writeHead(200, {"content-type":"text/html"});
    const  h = url.parse(request.url);
    let q="";
    if (h.pathname ==  "/Employee") {
        response.write("<h1> Employee details </h1>");
        q = h.query;
        response.write(q+ "<br />");
        response.write(""+q.firstName);
        response.end();
    } 
}).listen(8080, ()=>{
    console.log("http server started on http://localhost:8080");
});



// else if(h.pathname ==  "/Person") {
//     response.write("<h1> Person details </h1>");
//     response.end();
// } else {
//     response.write("Page not found...");
//     response.end();
// }