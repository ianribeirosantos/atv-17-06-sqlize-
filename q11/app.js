const express = require("express");
const exphbs = require("express-handlebars");

const sequelize = require("./db");
const Usuario = require("./models/Usuario");

const app = express();

app.engine("handlebars", exphbs.engine());

app.set("view engine","handlebars");

sequelize.sync();

app.get("/usuarios", async(req,res)=>{

    const usuarios = await Usuario.findAll({raw:true});

    res.render("usuarios",{
        usuarios
    });

});

app.listen(3000);