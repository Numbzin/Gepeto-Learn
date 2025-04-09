// Exército das sombras
const shadows = [
  { nome: "Beru", nivel: 10 },
  { nome: "Igris", nivel: 9 },
  { nome: "Iron", nivel: 7 },
  { nome: "Bellion", nivel: 15 },
];

// .find() – encontrar a sombra "Iron"
const iron = shadows.find(s => s.nome === "Iron");
console.log("Encontrada:", iron);

// .some() – existe alguma com nível abaixo de 8?
const temFraca = shadows.some(s => s.nivel < 8);
console.log("Existe alguma fraca?", temFraca);

// .every() – todas têm nome com mais de 3 letras?
const nomesOk = shadows.every(s => s.nome.length > 3);
console.log("Todos os nomes são válidos?", nomesOk);

// .sort() – ordenar do mais fraco ao mais forte
const ordenadas = [...shadows].sort((a, b) => a.nivel - b.nivel);
console.log("Ordenadas por nível:", ordenadas);
