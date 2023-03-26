const fs = require('fs');

const requestHandler=(req,res)=>{
   const url=req.url;
   const method=req.method;
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
};
// method 1 to export 
module.exports = requestHandler;

// we can also pass object
// module.exports={
//     handler:requestHandler,
//     another:"some text",
// }
// we can also use 
// module.exports.handler=reqhandler
// module.exports.another=some text
// or we can use directly exports
// exports.handler=reqhandler