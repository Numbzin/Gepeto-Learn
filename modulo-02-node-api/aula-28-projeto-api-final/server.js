const express = require("express");
const app = express();
const sombrasRoutes = require("./routes/sombras");
const { tratarErros } = require("./middlewares/tratamentoErros");

app.use(express.json());
app.use("/sombras", sombrasRoutes);
app.use(tratarErros);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
