var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    var param = url.parse(req.url, true).query;
    var num1 = param.number1;
    var num2 = param.number2;

    var n1 = new Number(num1);
    var n2 = new Number(num2);

    var sum = new Number(n1 + n2);
    res.write("addition is = "+sum);
    res.end("Program ended");
}).listen(2000, function () { console.log("Server started at port 2000"); });