// Desafio – Controle de Fluxo

// 1. Crie uma função chamada `classificarRank` que recebe um rank ("S", "A", "B", etc)
//    e usa switch para imprimir a classificação

// 2. Crie uma função `invocarShadow(nome)` que:
//    - Se o nome for vazio, lance um erro com throw
//    - Use try/catch para capturar o erro e imprimir mensagem amigável

const rank = "S";

function classificarRank(rank) {
  switch (rank) {
    case "S":
      console.log("Rank S!");
      break;
    case "A":
      console.log("Rank A!");
      break;
    case "B":
      console.log("Rank B");
      break;
    default:
      console.log("Rank E");
  }
}

classificarRank("S");

// throw
function invocarShadow(nome) {
  if (!nome) throw new Error("Nome da sombra é obrigatório!");
  console.log(`${nome} foi convocado!`);
}

try {
  invocarShadow("Igris");
  invocarShadow(""); // Lança erro
} catch (e) {
  console.log("Erro:", e.message);
}
