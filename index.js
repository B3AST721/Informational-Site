const http = require('http');
const port = 8080;
const fs = require('fs');

//Run index.html on port 8080
http.createServer(function (req, res) {
    fs.readFile('index.html', function (error, data){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(port);