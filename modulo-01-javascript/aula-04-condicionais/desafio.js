// Desafio:
// Crie um programa que recebe uma nota (0 a 10)
// Imprima:
// - "Reprovado" se for menor que 6
// - "Recuperação" se for entre 6 e 7.5
// - "Aprovado" se for maior ou igual a 7.5

let ask = prompt("Digite a nota do aluno: ");
ask = parseFloat(ask); // Converte a entrada para um número decimal
if (isNaN(ask)) {
  console.log("Nota inválida");
  ask = prompt("Digite a nota do aluno: ");
  ask = parseFloat(ask);
}
const note = ask;

if (note < 6) {
  console.log("Reprovado");
} else if (note >= 6 && note < 7.5) {
  console.log("Recuperação");
} else if (note >= 7.5) {
  console.log("Aprovado");
} else {
  console.log("Nota inválida");
}
