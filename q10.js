const express = require("express");

const sequelize = require("./db");
const Produto = require("./models/Produto");

const app = express();

sequelize.sync();

app.delete("/produtos/:id", async (req, res) => {

    const produto = await Produto.findByPk(req.params.id);

    if (produto) {

        await produto.destroy();

        res.send("Produto removido!");

    } else {

        res.send("Produto não encontrado.");

    }

});

app.listen(3000);