// Desenvolva seu código aqui conforme as instruções do README
let alunos = [
  { nome: "Fernando", nota1: 8, nota2: 10 },
  { nome: "Leticia", nota1: 10, nota2: 10 },
  { nome: "NMB", nota1: 5, nota2: 2 },
  { nome: "AB", nota1: 3, nota2: 3 },
];

for (const aluno of alunos) {
  const media = (aluno.nota1 + aluno.nota2) / 2;

  const situacao =
    media >= 7 ? "Aprovado" : media >= 6 ? "Recuperação" : "Reprovado";

  console.log(`Aluno: ${aluno.nome}`);
  console.log(`Média: ${media}`);
  console.log(`Situação: ${situacao}`);
  console.log("---------------------");
}
