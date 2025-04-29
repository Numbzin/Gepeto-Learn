// Desafio – Arrow Functions

// 1. Reescreva as funções abaixo como arrow functions:

// a)
function somar(a, b) {
  return a + b;
}

// b)
function mensagem(nome) {
  return `Olá, ${nome}`;
}

// c)
function criarSombra(nome, nivel) {
  return {
    nome,
    nivel,
    data: new Date().toLocaleDateString("pt-BR"),
  };
}
