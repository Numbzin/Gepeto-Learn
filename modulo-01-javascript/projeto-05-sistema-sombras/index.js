// Desenvolva aqui o sistema do exercito das sombras!

const sombras = [
  { nome: "Beru", nivel: 10 },
  { nome: "Igris", nivel: 9 },
  { nome: "Iron", nivel: 7 },
  { nome: "Bellion", nivel: 15 },
];

// .map()
const descricoes = sombras.map((s) => `Sombra: ${s.nome} | Nível: ${s.nivel}`);
console.log("Lista do exército das sombras:");
console.log(descricoes.join("\n"));

// .filter()
const sombrasElite = sombras.filter((s) => s.nivel >= 10);
const nomesElite = sombrasElite.map((s) => s.nome);
console.log("Sombras de elite:", nomesElite.join(", "));

// .reduce()
const poderTotal = sombras.reduce((acc, s) => acc + s.nivel, 0);
console.log("Poder total do exército das sombras:", poderTotal);
