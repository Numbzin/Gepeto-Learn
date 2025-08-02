const express = require("express");
const app = express();
const sombrasRoutes = require("./routes/sombras");

app.use(express.json());
app.use("/sombras", sombrasRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
