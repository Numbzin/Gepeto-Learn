// Desafio:
// Crie um programa que imprima todos os números pares de 1 a 20 usando:
// a) for
// b) while
//
// Depois, crie uma lista com nomes e use for...of para imprimir todos

let pares = [];
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  }
}

console.log("Números pares de 1 a 20 usando for:");
for (let i = 0; i < pares.length; i++) {
  console.log(pares[i]);
}

console.log("----------------");

let names = ["Alice", "Bob", "Charlie", "David"];
console.log("Nomes da lista usando for...of:");
for (let name of names) {
  console.log(name);
}
