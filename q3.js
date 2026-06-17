const sequelize = require("./db");

require("./models/Produto");
require("./models/Usuario");

sequelize.sync()
.then(() => {
    console.log("Banco sincronizado!");
});