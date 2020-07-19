//建立http services
var http = require("http");

//建立http services On Request 
function onRequest(req, res) {
    console.log("Request [" + req.url + "] received.");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World");
    res.end();
}

//createServer and listen
http.createServer(onRequest).listen(5000);

//
console.log("建立http service 在 5000 port...");