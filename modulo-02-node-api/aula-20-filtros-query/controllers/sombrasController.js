// TODO: Criar função filtrarSombras
// Instruções:
// - pegar req.query.tipo e req.query.nivelMin (opcionais)
// - filtrar os dados conforme os critérios
// - retornar com res.json(listaFiltrada)

const { lerSombras } = require("../shadowdb");

function filtrarSombras(req, res) {
  try {
    // Obter os parâmetros de query
    const tipo = req.query.tipo;
    const nivelMin = req.query.nivelMin;

    // Ler todas as sombras do banco de dados
    const todasSombras = lerSombras();

    // Aplicar filtros
    let listaFiltrada = todasSombras;

    // Filtrar por tipo se fornecido
    if (tipo) {
      listaFiltrada = listaFiltrada.filter(
        (sombra) =>
          sombra.tipo && sombra.tipo.toLowerCase() === tipo.toLowerCase()
      );
    }

    // Filtrar por nível mínimo se fornecido
    if (nivelMin) {
      const nivelMinimo = parseInt(nivelMin);
      if (!isNaN(nivelMinimo)) {
        listaFiltrada = listaFiltrada.filter(
          (sombra) => sombra.nivel && sombra.nivel >= nivelMinimo
        );
      }
    }

    // Retornar a lista filtrada
    res.json(listaFiltrada);
  } catch (error) {
    console.error("Erro ao filtrar sombras:", error);
    res.status(500).json({
      erro: "Erro interno do servidor ao filtrar sombras",
    });
  }
}

module.exports = { filtrarSombras };
