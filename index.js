// import the packages
const express = require("express");
const db  = require("./database");


// initialize server
const app = express();
const port = 4500;


//define our routes
app.get("/", (req, res) => {
    res.send("This is a web server using express js");
});

//launch the server
app.listen(port, () => {
    console.log(`server is  running on port  http://127.0.0.0:${port}`);
});



