
const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end('Hello World!');
}).listen(3000);


console.log('Hello world changed by me  ');
