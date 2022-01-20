/* Require de frameworks principais */
const express = require('express');
const app = express(); // Instancia do express
const sequelize = require('./database/database');

/* Require de arquivos do projeto */
const routes = require('./routes/routes');

app.use(express.json());
app.use(routes);

sequelize.sync({force: false}).then( () => {
    const PORT = process.env.PORT || 3003;
    app.listen(PORT, () => console.log("Aplicação rodando em localhost:"+PORT) );
} )
