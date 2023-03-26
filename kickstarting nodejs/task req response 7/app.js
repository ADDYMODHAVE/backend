const http = require("http");

const server = http.createServer((req, res) => {
const url=req.url;
if(url === '/home'){
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Welcome home</h1></body>');
    res.write('</html>');
    return res.end();
}
if(url === '/about'){
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>About us page</h1></body>');
    res.write('</html>');
    return res.end();
}
 res.setHeader("Content-Type","text/html");
 res.write('<html>');
 res.write('<head><title>My first Page</title></head>');
 res.write('<body><h1>Hello from node js!</h1></body>');
 res.write('</html>');
 res.end();
});

server.listen(3000);
