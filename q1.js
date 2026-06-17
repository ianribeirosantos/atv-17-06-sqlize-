const sequelize = require("./db");

sequelize.authenticate()
.then(() => {
    console.log("Conectado com sucesso!");
})
.catch((err) => {
    console.log("Erro:", err);
});