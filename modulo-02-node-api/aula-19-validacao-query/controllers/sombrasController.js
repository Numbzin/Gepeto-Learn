// TODO: criar função listarSombrasDoUsuario para /usuarios/:id/sombras
// deve filtrar sombras pelo usuarioId usando req.params.id

const { lerSombras } = require("../shadowdb");

function listarSombrasDoUsuario(req, res) {
  const id = req.params.id;
  const sombras = lerSombras();
  const filtradas = sombras.filter((s) => s.usuarioId == id);
  res.json(filtradas);
}

module.exports = { listarSombrasDoUsuario };
