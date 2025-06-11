// Resolva aqui os desafios da Aula 04 — Objetos
// Copie a constante "sombras" de desafio.js para fazer os testes com console.log
const sombras = [
  { nome: "Igris", tipo: "tank", nivel: 90 },
  { nome: "Tusk", tipo: "mago", nivel: 75 },
  { nome: "Iron", tipo: "tank", nivel: 40 },
  { nome: "Kaisel", tipo: "montaria", nivel: 85 },
  { nome: "Beru", tipo: "assassino", nivel: 100 },
];

// DESAFIO 1
// TODO: Crie uma função chamada `contarSombrasTipo(tipos)`
// Deve retornar quantas sombras possuem o tipo informado (ex: "tank")
function contarSombrasTipo(tipos) {
  let contador = 0;
  for (let i = 0; i < sombras.length; i++) {
    if (sombras[i].tipo === tipos) {
      contador++;
    }
  }
  return contador;
}

console.log(contarSombrasTipo("tank"));

// DESAFIO 2
// TODO: Crie uma função chamada `somarNivelTotal()`
// Deve somar o nível de todas as sombras

function somarNivelTotal() {
  let soma = 0;
  for (let i = 0; i < sombras.length; i++) {
    soma += sombras[i].nivel;
  }
  return soma;
}

console.log(somarNivelTotal());

// DESAFIO 3
// TODO: Crie uma função chamada `sombrasElite()`
// Deve retornar um novo array apenas com sombras de nível 80 ou mais

function sombrasElite() {
  const elite = sombras.filter((sombra) => sombra.nivel >= 80);
  console.log("Elite:", elite);
  return elite;
}

sombrasElite();

// DESAFIO 4
// TODO: Crie uma função chamada `nomesDasSombras()`
// Deve retornar um novo array com apenas os nomes das sombras (ex: ["Igris", "Tusk", ...])

function nomesDasSombras() {
  const nomes = sombras.map((sombra) => sombra.nome);
  console.log("Nomes:", nomes);
  return nomes;
}

nomesDasSombras();
