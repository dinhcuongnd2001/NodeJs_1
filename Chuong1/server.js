const http = require("http");
const fs = require("fs");
const url = require("url");

const moduleOne = require("./module");

const showHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("file not found");
    }
    res.write(data);
    res.end();
  });
};

const onRequest = (req, res) => {
  const path = url.parse(req.url).pathname;
  if (path == "/") {
    showHTML("./view/home.html", res);
  } else if (path == "/about") {
    showHTML("./view/about.html", res);
  }
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "text/html");
  // res.end("<h1>Hello this is the Heading</h1>");
};

http.createServer(onRequest).listen(moduleOne.port);
