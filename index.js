const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { json } = require('express');

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'matrix',
    database: 'crud-catastro',
});

app.post("/create", (req, res) => {
    console.log(req.body);
    const Numero = req.body.name;
    const Terreno = req.body.name;
    const Residencial = req.body.name;
    const Propetario = req.body.name;
    const Direccion = req.body.name;

    db.query(
        db.query('INSERT INTO catastro_2021 (Numero,Terreno,Residencial,Propetario,Direccion) VALUES')('?,?,?,?,?,?,'), [Numero, Terreno, Residencial, Propetario, Direccion],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send('Values Inserted successfully')
            }
        }
    );
});

app.get('/predios', (req, res) => {
    db.query('SELECT * FROM predios', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.put('/update', (req, res) => {
    const id = req.body.id;
    const Propietario;
    req.body.propietario;
    db.query("UPDATE SET predios = ? WHERE id = ?",
        (propietario, id), (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        })
})

app.listen(3001, () => {
    console.log("running on port 3001");
});