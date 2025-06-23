// TODO: importar shadowdb
const { lerShadows } = require("../shadowdb");

// TODO: Criar função buscarSombraPorId(req, res)
// Instruções:
// - Acessar o parâmetro de rota com req.params.id
// - Converter para número
// - Usar find() para buscar a sombra com mesmo id
// - Se encontrar, retornar com res.json
// - Se não encontrar, retornar 404 com mensagem de erro

function buscarSombraPorId(req, res) {
  const rotaId = Number(req.params.id);
  const sombra = lerShadows().find((sombra) => sombra.id === rotaId);
  if (sombra) {
    res.json(sombra);
  } else {
    res.status(404).json({ erro: "Sombra não encontrada" });
  }
}

module.exports = { buscarSombraPorId };
