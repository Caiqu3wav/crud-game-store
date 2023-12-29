const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "gloryboy163",
    database: "crudgames",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) =>{
   const { name } = req.body;
   const { cost } = req.body;
   const { category } = req.body;

   let SQL = "INSERT INTO games ( name, cost, category ) VALUES ( ?,?,? )";

   db.query(SQL, [name, cost, category], (err, result) =>{
    console.log(err);
   });
});

app.listen(3003, () => {
    console.log("O servidor está rodando na porta 3003");
});