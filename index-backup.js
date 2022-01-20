import express from express;
import bodyParser from 'body-parser';

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json())

app.use("/users", usersRoutes)

app.get("/", (req, res) => {
    console.log("Teste");
    res.send("Olá página inicial");
});

app.listen(PORT, () => {
    
});