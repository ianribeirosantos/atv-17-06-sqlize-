const express = require("express");

const sequelize = require("./db");
const Produto = require("./models/Produto");

const app = express();

sequelize.sync();

app.get("/exercicio6", async (req, res) => {

    const produto = await Produto.findByPk(1);

    produto.preco = 9999;

    await produto.save();

    console.log("Produto atualizado!");

    res.send("Atualizado!");
});

app.listen(3000);