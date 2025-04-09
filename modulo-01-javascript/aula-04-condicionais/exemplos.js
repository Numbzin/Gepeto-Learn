// Exemplo de if/else
const idade = 18
if (idade >= 18) {
  console.log("É maior de idade")
} else {
  console.log("É menor de idade")
}

// else if
const nota = 7
if (nota >= 9) {
  console.log("Excelente")
} else if (nota >= 6) {
  console.log("Aprovado")
} else {
  console.log("Reprovado")
}

// Operadores lógicos
const temCarteira = true
if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir")
}

// Ternário
const status = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log(status)
