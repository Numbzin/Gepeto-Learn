// Resolva o desafio aqui
// (Você pode importar o fs e path se necessário)
const { lerShadows } = require("./shadowDb");

const sombras = lerShadows();
sombras.forEach((s) => {
  console.log(`${s.nome} - Nível ${s.nivel}`);
});
