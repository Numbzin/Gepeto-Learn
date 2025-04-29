// Desafio Solo Leveling:
// 1. Crie um array de 'sombreados' com nome e nível (nível de sombra de 1 a 10)
// 2. Use .map() para criar uma nova lista com as descrições assim:
//    "Sombra: Igris | Nível: 9"
// 3. Use .filter() para pegar apenas as sombras com nível 7 ou mais
// 4. Use .reduce() para somar o nível total das sombras

const shadows = [
  { nome: "Beru", nivel: 10 },
  { nome: "Igris", nivel: 9 },
  { nome: "Iron", nivel: 7 },
  { nome: "Bellion", nivel: 15 },
];

// .map()
const descricoes = shadows.map((s) => `Sombra: ${s.nome} | Nível: ${s.nivel}`);
console.log("Descrições das sombras:");
console.log(descricoes);

// .filter()
const shadowsLevel = shadows.filter((n) => n.nivel >= 10);
console.log("Sombras de nível 10 ou mais:", shadowsLevel);

// .reduce()
const nivelTotal = shadows.reduce((acc, n) => acc + n.nivel, 0);
console.log("Nível total das sombras:", nivelTotal);
