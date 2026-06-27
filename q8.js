const express = require("express");

const sequelize = require("./db");
const Produto = require("./models/Produto");

const app = express();

sequelize.sync();

app.get("/produtos", async (req, res) => {

    const produtos = await Produto.findAll();

    res.json(produtos);

});

app.listen(3000, () => {
    console.log("Servidor rodando");
});