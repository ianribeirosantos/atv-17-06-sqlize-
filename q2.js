const sequelize = require("./db");

require("./models/Produto");

sequelize.sync()
.then(() => {
    console.log("Tabela Produto criada!");
});