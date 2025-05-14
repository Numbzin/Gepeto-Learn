const express = require("express");
const app = express();
const sombrasRoutes = require("./routes/sombras");
const logRequisicao = require("./middlewares/logRequisicao");

app.use(express.json());

// Aplicando o middleware de log globalmente (para todas as rotas)
app.use(logRequisicao);

app.use("/", sombrasRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
