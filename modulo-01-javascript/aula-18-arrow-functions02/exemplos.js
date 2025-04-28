// Função normal
function dobrar(n) {
  return n * 2;
}

// Arrow function
const dobrarArrow = n => n * 2;

console.log("Dobro:", dobrar(5));
console.log("Dobro (arrow):", dobrarArrow(5));

// Arrow function com várias linhas
const criarMensagem = (nome, nivel) => {
  return `Sombra ${nome} foi convocada. Nível: ${nivel}`;
};

console.log(criarMensagem("Beru", 10));
