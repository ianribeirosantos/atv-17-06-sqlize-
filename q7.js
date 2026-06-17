const express = require("express");

const sequelize = require("./db");
const Produto = require("./models/Produto");

const app = express();

sequelize.sync();

app.get("/exercicio7", async (req, res) => {

    const produto = await Produto.findByPk(1);

    await produto.destroy();

    const produtos = await Produto.findAll();

    console.log(produtos);

    res.send("Produto removido!");
});

app.listen(3000);