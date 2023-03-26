const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  let data;
  if (!fs.existsSync("message.txt")) {
    data = "no data";
  } else {
    data = fs.readFileSync("message.txt", "utf-8");
  }
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Messege</title></head>");
    res.write(
      `<body><h2>${data}</h2><form action="/message" method="POST"><input type="text" name="messege"><button type="submit">Send</form></body>`
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      //   we can also do using file sync basic diffrence between writefile sync and write file it works sync and another one works normally async
    //   which take thir paramter function in which we can pass data
      //   fs.writeFile("message.txt", message,(err)=>{
      //     res.statusCode = 302;
      //     res.setHeader("Location", "/");
      //     return res.end();
      //   });
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first Page</title></head>");
  res.write("<body><h1>Hello from node js!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
