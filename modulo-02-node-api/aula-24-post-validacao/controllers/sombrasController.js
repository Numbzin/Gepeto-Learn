// TODO: importar o banco (shadowdb)
const { lerShadows, salvarShadows } = require("../shadowdb");

// TODO: Criar função criarSombra(req, res)
// Deve:
// - Validar se nome, tipo e nivel existem
// - Validar se tipo é string, nome é string e nivel é número
// - Se inválido, responder 400 com { erro: "mensagem" }
// - Se válido:
//    - Gerar novo id automaticamente (id + 1)
//    - Salvar no arquivo JSON
//    - Retornar 201 com a nova sombra

function criarSombra(req, res) {
  const { nome, tipo, nivel } = req.body;

  if (!nome || !tipo || nivel === undefined) {
    return res.status(400).json({
      erro: "Dados inválidos. 'nome', 'tipo' e 'nivel' são obrigatórios",
    });
  }

  if (
    typeof nome !== "string" ||
    typeof tipo !== "string" ||
    typeof nivel !== "number"
  ) {
    return res.status(400).json({
      erro: "Tipos de dados inválidos. 'nome' e 'tipo' devem ser strings, e 'nivel' deve ser um número",
    });
  }

  const shadows = lerShadows();
  const novoId =
    shadows.length > 0 ? Math.max(...shadows.map((s) => s.id)) + 1 : 1;

  const novaSombra = {
    id: novoId,
    nome,
    tipo,
    nivel,
  };

  shadows.push(novaSombra);
  salvarShadows(shadows);

  return res.status(201).json(novaSombra);
}

module.exports = { criarSombra };
