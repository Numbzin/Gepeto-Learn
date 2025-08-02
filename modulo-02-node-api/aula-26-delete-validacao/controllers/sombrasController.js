const { carregarSombras, salvarSombras } = require("../shadowdb");

// TODO 1: Obter o ID via req.params
// TODO 2: Verificar se a sombra com esse ID existe
// TODO 3: Se não existir, retornar 404 com mensagem: "Sombra não encontrada"
// TODO 4: Remover a sombra da lista
// TODO 5: Salvar a lista atualizada
// TODO 6: Retornar status 204 (sem conteúdo)

function deletarSombra(req, res) {
  const id = Number(req.params.id);
  const sombras = carregarSombras();

  const sombraExiste = sombras.some((s) => s.id === id);

  if (!sombraExiste) {
    return res
      .status(404)
      .json({ mensagem: "Sombra não encontrada, verifique o ID" });
  }

  const novaLista = sombras.filter((s) => s.id !== id);
  salvarSombras(novaLista);

  return res.status(204).send();
}
module.exports = {
  deletarSombra,
};
