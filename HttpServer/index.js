const http = require('http');

const server = http.createServer(function(req, res) {
    /**
     * request(req) -> contains the details of the incoming
     * request.
     */
    if(req.url == '/home') {
        //We check if 'url' is '/home' then we 
        // will serve a special response
        res.end("<h1>Welcome Home Buddy!</h1>");
    }
    console.log("Request Received");
});

server.listen(3006, function listener() {
    console.log("Server is setup locally...");
})

