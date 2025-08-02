const { carregarSombras, salvarSombras } = require("../shadowdb");

// TODO 1: Validar os campos nome, nivel e tipo
// TODO 2: Se algum campo estiver inválido, lançar erro com throw
// TODO 3: Adicionar a nova sombra com ID único
// TODO 4: Salvar no JSON
// TODO 5: Retornar a nova sombra com status 201

function criarSombra(req, res) {
  const { nome, nivel, tipo } = req.body;

  // TODO 1: Validar os campos nome, nivel e tipo
  if (!nome || !nivel || !tipo) {
    throw new Error("Todos os campos (nome, nivel, tipo) são obrigatórios.");
  }

  // TODO 2: Se algum campo estiver inválido, lançar erro com throw
  if (
    typeof nome !== "string" ||
    typeof nivel !== "number" ||
    typeof tipo !== "string"
  ) {
    throw new Error(
      "Campos inválidos: nome deve ser string, nivel deve ser number e tipo deve ser string."
    );
  }

  // TODO 3: Adicionar a nova sombra com ID único
  const sombras = carregarSombras();
  const novoId = sombras.length ? Math.max(...sombras.map((s) => s.id)) + 1 : 1;

  const novaSombra = {
    id: novoId,
    nome,
    nivel,
    tipo,
  };

  // TODO 4: Salvar no JSON
  sombras.push(novaSombra);
  salvarSombras(sombras);

  // TODO 5: Retornar a nova sombra com status 201
  return res.status(201).json(novaSombra);
}

module.exports = {
  criarSombra,
};
