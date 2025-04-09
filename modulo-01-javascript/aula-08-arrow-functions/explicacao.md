# Aula 08 – Arrow Functions (Funções de seta)

## O que são?
Uma forma mais curta e moderna de declarar funções.

## Sintaxe:

// Função tradicional
function somar(a, b) {
  return a + b;
}

// Arrow Function
const somar = (a, b) => a + b;

## Regras:
- Se tiver só 1 linha de código, não precisa de chaves nem return
- Se tiver mais de 1 linha, use chaves e return

## Exemplos:

const saudacao = () => console.log("Olá!");

const dobro = (n) => n * 2;

const media = (n1, n2) => (n1 + n2) / 2;

const mensagem = (nome) => {
  const frase = "Bem-vindo, " + nome;
  return frase;
};
