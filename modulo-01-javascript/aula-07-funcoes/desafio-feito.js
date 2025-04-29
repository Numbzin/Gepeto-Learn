// Desafio:
// Crie uma função chamada `calcularMedia` que recebe duas notas como parâmetros
// Retorne a média
//
// Depois, crie outra função chamada `verificarSituacao`
// que recebe a média e retorna "Aprovado", "Recuperação" ou "Reprovado"
// com base nas regras anteriores
//
// Teste com diferentes valores de nota

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

function verificarSituacao(media) {
  const situacao =
    media >= 7 ? "Aprovado" : media >= 6 ? "Recuperação" : "Reprovado";

  console.log(`Média: ${media}`);
  console.log(`Situação: ${situacao}`);
}

// Testando:
const media1 = calcularMedia(8, 7);
verificarSituacao(media1);

const media2 = calcularMedia(5, 7);
verificarSituacao(media2);

const media3 = calcularMedia(3, 4);
verificarSituacao(media3);
