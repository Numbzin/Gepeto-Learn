const { carregarSombras, salvarSombras } = require("../shadowdb");

// TODO 1: Buscar a sombra pelo ID informado (req.params.id)
// TODO 2: Se não existir, retornar 404 com mensagem: "Sombra não encontrada"
// TODO 3: Obter o corpo da requisição (req.body)
// TODO 4: Validar campos individualmente:
//    - nome: deve ser string não vazia
//    - nivel: inteiro entre 1 e 10
//    - tipo: "guerreiro", "mago" ou "arqueiro"
// TODO 5: Se algum campo for inválido, retornar 400 com uma mensagem clara
// TODO 6: Atualizar somente os campos válidos
// TODO 7: Salvar as alterações no arquivo JSON
// TODO 8: Retornar a sombra atualizada com status 200

function atualizarParcialmente(req, res) {
  const id = Number(req.params.id);
  const sombras = carregarSombras();

  const sombraAlvo = sombras.find((s) => s.id === id);

  if (!sombraAlvo) {
    return res.status(404).json({ erro: "Sombra não encontrada" });
  }

  const atualizacoes = req.body;

  if (
    "nome" in atualizacoes &&
    (typeof atualizacoes.nome !== "string" || atualizacoes.nome.trim() === "")
  ) {
    return res.status(400).json({
      mensagem: "Nome inválido. O nome deve ser uma string não vazia.",
    });
  }

  const tiposValidos = ["guerreiro", "mago", "arqueiro"];

  if ("tipo" in atualizacoes && !tiposValidos.includes(atualizacoes.tipo)) {
    return res.status(400).json({
      mensagem: `Tipo inválido. Deve ser um dos seguintes: ${tiposValidos.join(
        ", "
      )}`,
    });
  }

  if (
    "nivel" in atualizacoes &&
    (typeof atualizacoes.nivel !== "number" ||
      !Number.isInteger(atualizacoes.nivel) ||
      atualizacoes.nivel < 1 ||
      atualizacoes.nivel > 10)
  ) {
    return res.status(400).json({
      mensagem: "Nível inválido. Deve ser um número inteiro entre 1 e 10.",
    });
  }

  Object.assign(sombraAlvo, atualizacoes);

  salvarSombras(sombras);

  return res.status(200).json(sombraAlvo);
}

module.exports = {
  atualizarParcialmente,
};
