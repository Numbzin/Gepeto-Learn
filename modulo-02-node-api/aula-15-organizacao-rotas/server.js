const express = require("express");
const app = express();
const sombrasRoutes = require("./routes/sombras");

app.use(express.json());
app.use("/sombras", sombrasRoutes);

app.get("/", (req, res) => {
  res.json({ mensagem: "Servidor das Sombras ativo!" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
