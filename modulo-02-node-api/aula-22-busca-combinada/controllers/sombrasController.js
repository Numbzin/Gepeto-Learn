// TODO: importar o shadowdb
const { lerShadows } = require("../shadowdb");

// TODO: criar a função buscarSombrasComFiltros(req, res)
// Regras:
// - Se vier query ?nome=igris → filtra por nome (parcial, lowercase)
// - Se vier query ?tipo=tank → filtra por tipo (exato, lowercase)
// - Se vier os dois juntos, aplicar os dois filtros
// - Se nenhum filtro vier, retornar todas as sombras

function buscarSombrasComFiltros(req, res) {
  const nameFilter = req.query.nome?.toLowerCase();
  const typeFilter = req.query.tipo?.toLowerCase();

  let filterShadow = lerShadows();

  if (nameFilter) {
    filterShadow = filterShadow.filter((sombra) =>
      sombra.nome.toLowerCase().includes(nameFilter)
    );
  }
  if (typeFilter) {
    filterShadow = filterShadow.filter(
      (sombra) => sombra.tipo.toLowerCase() === typeFilter
    );
  }
  res.json(filterShadow);
}

module.exports = { buscarSombrasComFiltros };
