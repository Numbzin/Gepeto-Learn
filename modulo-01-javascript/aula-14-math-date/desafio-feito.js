// Desafio – Math e Date

// 1. Crie um array de shadows
// 2. Sorteie um shadow aleatoriamente usando Math.random()
// 3. Pegue a data atual com Date()
// 4. Mostre a mensagem:
//    "Sombra SORTEADA foi convocada em DATA"

const shadows = ["Beru", "Igris", "Iron", "Bellion"];
const aleatorio = shadows[Math.floor(shadows.length * Math.random())];

const agora = new Date();
console.log("Aleatorio: ", aleatorio);
console.log("Data atual: ", agora.toLocaleDateString());

console.log(
  `Sombra ${aleatorio} foi convocada em ${agora.toLocaleDateString()}`
);
