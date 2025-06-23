// TODO: importar shadowdb
const { lerShadows } = require("../shadowdb");

// TODO: criar função listarSombrasOrdenadas(req, res)
// Regras:
// - Se vier ?ordenar=nome → ordenar alfabeticamente (A-Z)
// - Se vier ?ordenar=nivel → ordenar por nível (descendente)
// - Se o valor de ordenar for inválido, retornar erro 400

function listarSombrasOrdenadas(req, res) {
  // 1. Acessar o parâmetro de consulta 'ordenar'
  const { ordenar } = req.query;

  // 2. Criar uma cópia do array para não modificar o original (boa prática)
  const sombras = [...lerShadows()];

  // 3. Verificar se o parâmetro 'ordenar' foi fornecido
  if (ordenar) {
    const criterio = ordenar.toLowerCase();

    if (criterio === "nome") {
      // Ordena alfabeticamente por nome
      sombras.sort((a, b) => a.nome.localeCompare(b.nome));
    } else if (criterio === "nivel") {
      // Ordena por nível, do maior para o menor (descendente)
      sombras.sort((a, b) => b.nivel - a.nivel);
    } else {
      // 4. Se o valor do parâmetro for inválido, retorna erro 400
      return res.status(400).json({
        erro: "Parâmetro de ordenação inválido. Use 'nome' ou 'nivel'.",
      });
    }
  }

  res.json(sombras);
}

module.exports = { listarSombrasOrdenadas };
