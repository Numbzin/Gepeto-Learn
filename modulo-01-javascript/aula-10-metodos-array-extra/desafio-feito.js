// Desafio – Exército das Sombras:
// 1. Use .find() para encontrar a sombra com nome "Igris"
// 2. Use .some() para verificar se existe alguma com nível abaixo de 7
// 3. Use .every() para ver se todas têm nome com mais de 3 letras
// 4. Use .sort() para ordenar da mais forte para a mais fraca

const shadows = [
  { nome: "Beru", nivel: 10 },
  { nome: "Igris", nivel: 9 },
  { nome: "Iron", nivel: 7 },
  { nome: "Bellion", nivel: 15 },
];

const findShadow = shadows.find((s) => s.nome === "Igris");
console.log("Encontrado: ", findShadow);

const levelAbove = shadows.some((s) => s.nivel < 7);
console.log("Nivel abaixo de 7? ", levelAbove);

const namesOk = shadows.every((s) => s.nome.length > 3);
console.log("Todos os nomes são válidos?", namesOk);

const sorted = [...shadows].sort((a, b) => a.nivel - b.nivel);
console.log("Ordenadas por nível:", sorted);
