// 📌 Desafio – Modularização no Node.js
//
// Missão:
// 1. Crie um arquivo chamado sombraUtils.js
// 2. Nesse arquivo, exporte:
//    - Uma função chamada `listarSombras` que imprime as sombras
//    - Uma função chamada `buscarPorNivel` que recebe um nível e filtra as sombras
//
// 3. No arquivo index.js (este), importe essas funções usando require
// 4. Chame as duas funções no final, passando o array base
//
// 💡 Dica: use `module.exports = {}` no sombraUtils.js para exportar múltiplas funções

const sombras = [
  { nome: "Beru", nivel: 10 },
  { nome: "Igris", nivel: 9 },
  { nome: "Iron", nivel: 7 },
  { nome: "Bellion", nivel: 15 },
];
