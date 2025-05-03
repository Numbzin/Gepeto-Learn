// Resolva o desafio aqui usando require e module.exports
const sombras = require("./sombras");
const { listarSombras, buscarPorNivel } = require("./sombraUtils");

console.log("Sombras: ");
listarSombras(sombras);
console.log("------------");
const elite = buscarPorNivel(sombras, 10);
console.log("Sombras por nivel: ", elite);
