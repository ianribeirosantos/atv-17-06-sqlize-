const express = require("express");

const sequelize = require("./db");
const Produto = require("./models/Produto");

const app = express();

sequelize.sync();

app.get("/exercicio4", async (req, res) => {

    await Produto.create({
        nome: "Notebook",
        preco: 3000
    });

    await Produto.create({
        nome: "Mouse",
        preco: 80
    });

    await Produto.create({
        nome: "Teclado",
        preco: 120
    });

    const produtos = await Produto.findAll();

    console.log(produtos);

    res.send("Produtos criados!");
});

app.listen(3000, () => {
    console.log("Servidor rodando");
});