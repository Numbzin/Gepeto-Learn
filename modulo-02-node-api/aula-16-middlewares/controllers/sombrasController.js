const { lerShadows } = require("../shadowdb");

function listarSombras(req, res) {
  const sombras = lerShadows();
  res.json({ mensagem: "Dados protegidos das sombras:", sombras });
}

module.exports = { listarSombras };
