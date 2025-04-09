// Solo Leveling - Exemplo com caçadores
const cacadores = [
  { nome: "Sung Jin-Woo", rank: "S", poder: 9999 },
  { nome: "Baek Yoon-Ho", rank: "A", poder: 8500 },
  { nome: "Go Gun-Hee", rank: "S", poder: 9500 },
  { nome: "Kim Chul", rank: "B", poder: 5000 },
];

// .map() - pegando só os nomes
const nomes = cacadores.map(c => c.nome);
console.log("Nomes:", nomes);

// .filter() - apenas rank S
const rankS = cacadores.filter(c => c.rank === "S");
console.log("Rank S:", rankS);

// .reduce() - somando poder total
const poderTotal = cacadores.reduce((acc, c) => acc + c.poder, 0);
console.log("Poder total dos caçadores:", poderTotal);
