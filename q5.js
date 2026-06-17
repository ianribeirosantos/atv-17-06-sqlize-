const express = require("express");

const sequelize = require("./db");
const Produto = require("./models/Produto");

const app = express();

sequelize.sync();

app.get("/exercicio5", async (req, res) => {

    const produto = await Produto.findByPk(1);

    console.log("Nome:", produto.nome);
    console.log("Preço:", produto.preco);

    res.send("Produto encontrado!");
});

app.listen(3000);