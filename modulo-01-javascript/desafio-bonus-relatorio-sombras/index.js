// Desafio Bônus – Relatório das Sombras

const sombras = [
  { nome: "Beru", nivel: 10 },
  { nome: "Igris", nivel: 9 },
  { nome: "Iron", nivel: 7 },
  { nome: "Bellion", nivel: 15 },
  { nome: "Kaisel", nivel: 5 },
];

// 1. Filtre sombras com nível >= 8
const sombrasFortissimas = sombras.filter((sombra) => sombra.nivel >= 8);

// 2. Extraia os nomes dessas sombras
const nomes = sombrasFortissimas.map((sombra) => sombra.nome);

// 3. Calcule o poder total (soma dos níveis)
const poderTotal = sombrasFortissimas.reduce(
  (soma, sombra) => soma + sombra.nivel,
  0
);

// Exiba os dois resultados no console
console.log(`Sombras de elite: [${nomes.join(", ")}]`);
console.log(`Poder total: ${poderTotal}`);
