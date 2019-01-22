var http = require('http');
var modulel1 = require("./main1");
let fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  fs.readFile('./index.html', null, function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write('Whoops! File not found!');
    } else {
      res.write(data);
    }
    res.end();
  });

}).listen(8080, function () { 
  console.log("NODE serverstarted at port 8080");
})
