const express = require("express");

const sequelize = require("./db");
const Produto = require("./models/Produto");

const app = express();

app.use(express.json());

sequelize.sync();

app.post("/produtos", async (req, res) => {

    await Produto.create({

        nome: req.body.nome,
        preco: req.body.preco

    });

    res.send("Produto cadastrado!");

});

app.listen(3000);