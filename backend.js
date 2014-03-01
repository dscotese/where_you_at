// Load the http module to create an http server.
var http = require('http');
// Load the filesystem module.
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  if (request.url == '/frontend.js') {
    fs.readFile('frontend.js', function(err, page) {
        response.writeHead(200, {'Content-Type': 'text/javascript'});
        response.write(page);
        response.end();
    });
  } else {
    fs.readFile('index.html', function(err, page) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(page);
        response.end();
    });
  }
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
