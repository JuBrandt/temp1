const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to my page")
    }
    if (req.url === "/about") {
        res.end("It our history")
    }

})

server.listen(5000);
