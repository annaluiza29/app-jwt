const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");

const result = dotenv.config();

console.log("SECRET_KEY:", process.env.SECRET_KEY); // Adicione este log

const app = express();

app.use(express.json());

app.use(routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
