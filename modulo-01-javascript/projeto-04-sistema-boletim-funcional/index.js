// Comece seu projeto aqui!

// Exemplo de estrutura de aluno:
// const alunos = [
//   { nome: "João", nota1: 7, nota2: 10 },
//   ...
// ]

// Suas funções:
// - calcularMedia
// - verificarSituacao
const alunos = [
  { nome: "AB", nota1: 7, nota2: 10 },
  { nome: "Fernando", nota1: 4, nota2: 8 },
  { nome: "Leticia", nota1: 9, nota2: 10 },
  { nome: "NMB", nota1: 5, nota2: 9 },
];

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

function verificarSituacao(media) {
  return media >= 7 ? "Aprovado" : media >= 6 ? "Recuperação" : "Reprovado";
}

for (const aluno of alunos) {
  const media = calcularMedia(aluno.nota1, aluno.nota2);
  const situacao = verificarSituacao(media);

  console.log(`Aluno: ${aluno.nome}`);
  console.log(`Média: ${media}`);
  console.log(`Situação: ${situacao}`);
  console.log("---------------------");
}
