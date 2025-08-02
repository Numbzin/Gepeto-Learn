const { carregarSombras, salvarSombras } = require("../shadowdb");

// TODO: Implementar cada função abaixo

function listarSombras(req, res) {
  // GET /sombras
  const sombras = carregarSombras();
  return res.status(200).json(sombras);
}

function obterSombra(req, res) {
  // GET /sombras/:id
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ mensagem: "ID inválido" });
  }
  const sombras = carregarSombras();
  const sombra = sombras.find((s) => s.id === id);
  if (!sombra) {
    return res.status(404).json({ mensagem: "Sombra não encontrada" });
  }
  return res.status(200).json(sombra);
}

function criarSombra(req, res) {
  // POST /sombras
  const { nome, nivel, tipo } = req.body;

  // 1. Validações primeiro para "falhar rápido"
  if (typeof nome !== "string" || nome.trim() === "") {
    return res.status(400).json({
      mensagem:
        "Nome inválido. O nome é obrigatório e deve ser uma string não vazia.",
    });
  }
  const tiposValidos = ["guerreiro", "mago", "arqueiro"];
  if (!tiposValidos.includes(tipo)) {
    return res.status(400).json({
      mensagem: `Tipo inválido. O tipo é obrigatório e deve ser um dos seguintes: ${tiposValidos.join(
        ", "
      )}`,
    });
  }
  if (
    typeof nivel !== "number" ||
    !Number.isInteger(nivel) ||
    nivel < 1 ||
    nivel > 10
  ) {
    return res.status(400).json({
      mensagem:
        "Nível inválido. O nível é obrigatório e deve ser um número inteiro entre 1 e 10.",
    });
  }

  // 2. Lógica de criação somente após todas as validações passarem
  const sombras = carregarSombras();
  // 3. Geração de ID mais robusta
  const novoId =
    sombras.length > 0 ? Math.max(...sombras.map((s) => s.id)) + 1 : 1;
  const novaSombra = { id: novoId, nome, nivel, tipo };

  sombras.push(novaSombra);
  salvarSombras(sombras);
  return res.status(201).json(novaSombra);
}

function atualizarParcialmente(req, res) {
  // PATCH /sombras/:id
  const id = Number(req.params.id);
  const { nome, nivel, tipo } = req.body;

  // 1. Validações
  if ("nome" in req.body) {
    if (typeof nome !== "string" || nome.trim() === "") {
      return res.status(400).json({
        mensagem: "Nome inválido. O nome deve ser uma string não vazia.",
      });
    }
  }
  if ("nivel" in req.body) {
    if (
      typeof nivel !== "number" ||
      !Number.isInteger(nivel) ||
      nivel < 1 ||
      nivel > 10
    ) {
      return res.status(400).json({
        mensagem: "Nível inválido. Deve ser um número inteiro entre 1 e 10.",
      });
    }
  }
  const tiposValidos = ["guerreiro", "mago", "arqueiro"];
  if (tipo && !tiposValidos.includes(tipo)) {
    return res.status(400).json({
      mensagem: `Tipo inválido. O tipo deve ser um dos seguintes: ${tiposValidos.join(
        ", "
      )}`,
    });
  }

  // 2. Lógica de atualização
  const sombras = carregarSombras();
  const sombra = sombras.find((s) => s.id === id);
  if (!sombra) {
    return res.status(404).json({ mensagem: "Sombra não encontrada" });
  }
  // Atualiza somente os campos fornecidos
  if ("nome" in req.body) sombra.nome = nome;
  if ("nivel" in req.body) sombra.nivel = nivel;
  if ("tipo" in req.body) sombra.tipo = tipo;
  salvarSombras(sombras);
  return res.status(200).json(sombra);
}

function deletarSombra(req, res) {
  // DELETE /sombras/:id
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ mensagem: "ID inválido" });
  }
  const sombras = carregarSombras();
  const index = sombras.findIndex((s) => s.id === id);
  if (index === -1) {
    return res.status(404).json({ mensagem: "Sombra não encontrada" });
  }
  sombras.splice(index, 1);
  salvarSombras(sombras);
  return res.status(204).send(); // No Content
  // Retorna 204 No Content para indicar sucesso sem corpo de resposta
}

module.exports = {
  listarSombras,
  obterSombra,
  criarSombra,
  atualizarParcialmente,
  deletarSombra,
};
