// Aqui você criará suas funções utilitárias e exportará com module.exports
function listarSombras(sombras) {
  sombras.forEach((s) => console.log(s.nome));
}

function buscarPorNivel(sombras, nivelMinimo) {
  return sombras.filter((s) => s.nivel >= nivelMinimo);
}

module.exports = { listarSombras, buscarPorNivel };
