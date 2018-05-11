const http = require("http");

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(`Hello from Node.js! ${process.version}`);
});

server.listen(process.env.PORT || 8080);
