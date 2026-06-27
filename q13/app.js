app.post("/usuarios/remover/:id", async(req,res)=>{

    const usuario = await Usuario.findByPk(req.params.id);

    if(usuario){

        await usuario.destroy();

    }

    res.redirect("/usuarios");

});