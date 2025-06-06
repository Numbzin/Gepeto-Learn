// Desafio:
// Crie um programa que recebe uma nota (0 a 10)
// e imprime:
// - "Reprovado" se for menor que 6
// - "Recuperação" se for entre 6 e 7.5
// - "Aprovado" se for maior ou igual a 7.5

// Código resolvido:
let ask = prompt("Digite a nota do aluno: ");
ask = parseFloat(ask); // Converte a entrada para um número decimal

// Verifica se a entrada é válida
if (isNaN(ask)) {
  console.log("Nota inválida");
  ask = prompt("Digite a nota do aluno: ");
  ask = parseFloat(ask);
}

const note = ask;

// Avalia a nota e imprime o resultado
if (note < 6) {
  console.log("Reprovado");
} else if (note >= 6 && note < 7.5) {
  console.log("Recuperação");
} else if (note >= 7.5) {
  console.log("Aprovado");
} else {
  console.log("Nota inválida");
}
