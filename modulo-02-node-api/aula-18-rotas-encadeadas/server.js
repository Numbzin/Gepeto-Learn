const express = require("express");
const app = express();
const rotas = require("./routes");

app.use(express.json());
app.use("/", rotas);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
