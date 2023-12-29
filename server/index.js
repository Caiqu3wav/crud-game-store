const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "gloryboy163",
    database: "crudgames",
});

app.get('/', (req, res) => {
    let sql = "INSERT INTO games (name, cost, category) VALUES ('Far Cry 5', '120', 'Ação')";
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Registro inserido com sucesso!");
        }
    });
});

app.listen(3003, () => {
    console.log("O servidor está rodando na porta 3003");
});