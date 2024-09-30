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
//CRUD operations
app.get("/createTable", (req, res) => {
    const sql = `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(255),
     email VARCHAR(255))`;
    
    db.query(sql, (err) => {
        if (err) {
            console.log("error connection")
            return res.status(500).send("error connection")
        }
        res.send("table created")
        
        
    });
    });

//launch the server
app.listen(port, () => {
    console.log(`server is  running on port  http://127.0.0.0:${port}`);
});



