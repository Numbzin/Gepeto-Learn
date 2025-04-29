// Desafio:
// Crie um programa que imprima todos os números pares de 1 a 20 usando:
// a) for
// b) while
//
// Depois, crie uma lista com nomes e use for...of para imprimir todos

// a) Usando for
console.log("Números pares (for):");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

// b) Usando while
console.log("\nNúmeros pares (while):");
let j = 1;
while (j <= 20) {
  if (j % 2 === 0) console.log(j);
  j++;
}

// Lista de nomes
const nomes = ["Beru", "Igris", "Bellion"];
console.log("\nLista de nomes:");
for (const nome of nomes) {
  console.log(nome);
}
