app.use(express.urlencoded({extended:true}));
app.get("/cadastrarUsuario",(req,res)=>{

    res.render("cadastrarUsuario");

});
app.post("/cadastrarUsuario", async(req,res)=>{

    await Usuario.create({

        nome:req.body.nome,
        email:req.body.email,
        idade:req.body.idade

    });

    res.redirect("/usuarios");

});