const sombras = [
  { nome: "Beru", nivel: 10 },
  { nome: "Igris", nivel: 9 },
  { nome: "Iron", nivel: 7 },
  { nome: "Bellion", nivel: 15 },
];

// map
const nomes = sombras.map(s => s.nome);
console.log("Nomes:", nomes);

// filter
const elite = sombras.filter(s => s.nivel >= 10);
console.log("Sombras de elite:", elite);

// reduce
const poderTotal = sombras.reduce((acc, s) => acc + s.nivel, 0);
console.log("Poder total:", poderTotal);

// find
const busca = sombras.find(s => s.nome === "Iron");
console.log("Busca por Iron:", busca);

// some
const temFraco = sombras.some(s => s.nivel < 5);
console.log("Tem sombra fraca?", temFraco);

// every
const todasValidas = sombras.every(s => s.nivel >= 1);
console.log("Todas são válidas?", todasValidas);

// sort (decrescente)
const ordenadas = [...sombras].sort((a, b) => b.nivel - a.nivel);
console.log("Ordenadas:", ordenadas);
