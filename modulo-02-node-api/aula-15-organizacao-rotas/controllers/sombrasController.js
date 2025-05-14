const { lerShadows } = require("../shadowdb");

function listarSombras(req, res) {
  const sombras = lerShadows();
  res.json(sombras);
}

module.exports = { listarSombras };
