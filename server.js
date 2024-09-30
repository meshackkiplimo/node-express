//import package(s)
//http package
const http = require("http");

//create server
const web = http.createServer((req, res) => {
  //update to handle different routes
  //default - homepage
  //about
  //contact us
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the landing page");
  } else if (req.url === "/registration") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Successfully registered");
  } else if (req.url === "/login") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Successfully logged in");
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Page Not Found!");
  }
});

//launch the server
web.listen(3002, () => {
  console.log("Server is running on port: 3002");
});
