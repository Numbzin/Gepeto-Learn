const aluno = {
  nome: "João",
  idade: 20,
  nota1: 7,
  nota2: 8
}

console.log("Nome:", aluno.nome)
console.log("Média:", (aluno.nota1 + aluno.nota2) / 2)

aluno.curso = "Desenvolvimento"
console.log(aluno)

delete aluno.idade
console.log("Após remover idade:", aluno)
