// Desafio – Arrow Functions

// 1. Reescreva as funções abaixo como arrow functions:

// a)
function somar(a, b) {
  return a + b;
}

const somarArrow = (a, b) => a + b;

// b)
function mensagem(nome) {
  return `Olá, ${nome}`;
}

const mensagemArrow = (nome) => `Salve, ${nome}`;

// c)
function criarSombra(nome, nivel) {
  return {
    nome,
    nivel,
    data: new Date().toLocaleDateString("pt-BR"),
  };
}

const criarSombraArrow = (nome, nivel) => ({
  nome,
  nivel,
  data: new Date().toLocaleDateString("pt-BR"),
});

// Testando a soma
console.log("Resultado da soma:", somarArrow(5, 7));

// Testando mensagem
console.log(mensagemArrow("Jin-Woo"));

// Testando criação de sombra
const sombra = criarSombraArrow("Beru", 10);
console.log("Objeto da sombra criada:", sombra);
