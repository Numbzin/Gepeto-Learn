const { lerShadows } = require("../shadowdb");

function listarSombrasElite(req, res) {
  const sombras = lerShadows();
  const elite = sombras.filter((s) => s.nivel >= 80);
  res.json({
    mensagem: "Bem-vindo, sombra de elite!",
    sombras: elite,
  });
}

module.exports = { listarSombrasElite };
