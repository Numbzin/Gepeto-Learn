// Desafio – Arrow Functions

// a)
const somarArrow = (a, b) => a + b;

// b)
const mensagemArrow = (nome) => `Salve, ${nome}`;

// c)
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
