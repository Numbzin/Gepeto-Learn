// TODO: Criar função listarSombrasDoUsuario que usa req.params.id
// Dica: filtrar as sombras com usuarioId igual ao id passado

const { lerSombras } = require("../shadowdb");

function listarSombrasDoUsuario(req, res) {
  const id = req.params.id;
  const sombras = lerSombras();
  const filtradas = sombras.filter((s) => s.usuarioId == id);
  res.json(filtradas);
}

module.exports = { listarSombrasDoUsuario };
