const http = require('http');
const port = 8080;
const fs = require('fs');
const url = require('url');

const server = http.createServer(function (req, res) {
    const path = url.parse(req.url).pathname;
    switch (path) {
        case '/':
            fs.readFile('index.html', function (error, data) {
                if (error) {
                    res.writeHead(404);
                    res.write('Error');
                    res.end();
                } else {
                    res.writeHead(200, {'Content-Type' : 'text/html'});
                    res.write(data);
                    res.end();
                }
            })
            break;

        case '/about':
            fs.readFile('about.html', function (error, data) {
                if (error) {
                    res.writeHead(404);
                    res.write('Error');
                    res.end();
                } else {
                    res.writeHead(200, {'Content-Type' : 'text/html'});
                    res.write(data);
                    res.end();
                }
            })
            break;

        case '/contact-me':
            fs.readFile('contact-me.html', function (error, data) {
                if (error) {
                    res.writeHead(404);
                    res.write('Error');
                    res.end();
                } else {
                    res.writeHead(200, {'Content-Type' : 'text/html'});
                    res.write(data);
                    res.end();
                }
            })
            break;
        
        default:
            fs.readFile('404.html', function (error, data) {
                res.writeHead(404);
                res.write(data);
                res.end();
            })
            break;
    }
})

server.listen(port);