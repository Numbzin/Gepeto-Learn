// Desafio:
// Reescreva as duas funções abaixo como arrow functions:

// 1. calcularMedia
function calcularMedia(n1, n2) {
  return (n1 + n2) / 2;
}

// 2. verificarSituacao
function verificarSituacao(media) {
  if (media >= 7) return "Aprovado";
  else if (media >= 6) return "Recuperação";
  else return "Reprovado";
}

// 1. calcularMedia (arrow)
const calcularMedia = (n1, n2) => (n1 + n2) / 2;

// 2. verificarSituacao (arrow)
const verificarSituacao = (media) => {
  if (media >= 7) return "Aprovado";
  else if (media >= 6) return "Recuperação";
  else return "Reprovado";
};

// Teste
const media = calcularMedia(5, 9);
console.log("Média de 5 e 9:", media);
console.log("Situação:", verificarSituacao(media));
