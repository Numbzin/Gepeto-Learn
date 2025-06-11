// Resolva aqui os desafios da Aula 05 — Composição de lógica e múltiplos filtros
// Copie o array "sombras" do desafio.js para fazer os testes com console.log
const sombras = [
  { nome: "Igris", tipo: "tank", nivel: 90 },
  { nome: "Tusk", tipo: "mago", nivel: 75 },
  { nome: "Iron", tipo: "tank", nivel: 40 },
  { nome: "Kaisel", tipo: "montaria", nivel: 85 },
  { nome: "Beru", tipo: "assassino", nivel: 100 },
];

// DESAFIO 1
// TODO: Crie uma função `sombrasDoTipoComNivelMinimo(tipo, nivelMin)`
// Deve retornar as sombras do tipo especificado e com nível maior ou igual ao mínimo

function sombrasDoTipoComNivelMinimo(tipo, nivelMin) {
  const sombrasDoTipo = sombras.filter((sombra) => sombra.tipo === tipo);
  const sombrasComNivelMinimo = sombrasDoTipo.filter(
    (sombra) => sombra.nivel >= nivelMin
  );
  return sombrasComNivelMinimo;
}

console.log(sombrasDoTipoComNivelMinimo("tank", 50));

// DESAFIO 2
// TODO: Crie uma função `listarNomesElitePorTipo(tipo)`
// Deve retornar um array com os nomes das sombras do tipo informado e nível >= 80
function listarNomesElitePorTipo(tipo) {
  const nivelmin = 80;
  const sombrasTipo = sombras.filter((sombra) => sombra.tipo === tipo);
  const nomesElite = sombrasTipo
    .filter((sombra) => sombra.nivel >= nivelmin)
    .map((sombra) => sombra.nome);
  return nomesElite;
}

console.log(listarNomesElitePorTipo("tank"));

// DESAFIO 3
// TODO: Crie uma função `ehSombraElite(sombra)`
// Deve retornar true se a sombra tem nível >= 80
// Dica: reaproveite essa função em outros desafios
function ehSombraElite(sombra) {
  const nivelmin = 80;
  return sombra.nivel >= nivelmin;
}

console.log(ehSombraElite({ nome: "Kaisel", tipo: "montaria", nivel: 85 }));

// DESAFIO 4
// TODO: Crie uma função `somarNivelPorTipo(tipo)`
// Deve retornar a soma dos níveis de todas as sombras do tipo fornecido
function somarNivelPorTipo(tipo) {
  let soma = 0;
  const sombrasTipo = sombras.filter((sombra) => sombra.tipo === tipo);
  for (let sombra of sombrasTipo) {
    soma += sombra.nivel;
  }
  return soma;
}

console.log(somarNivelPorTipo("mago"));
