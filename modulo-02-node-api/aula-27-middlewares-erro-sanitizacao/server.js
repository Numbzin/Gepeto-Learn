const express = require("express");
const app = express();
const sombrasRoutes = require("./routes/sombras");
const { tratarErros } = require("./middlewares/tratamentoErros");

app.use(express.json());
app.use("/sombras", sombrasRoutes);

// Middleware de erro
app.use(tratarErros);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
