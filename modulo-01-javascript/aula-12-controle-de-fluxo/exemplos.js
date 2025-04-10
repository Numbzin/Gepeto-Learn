// switch
const rank = "S";

switch (rank) {
  case "S":
    console.log("Caçador Rank S!");
    break;
  case "A":
    console.log("Caçador Rank A!");
    break;
  default:
    console.log("Rank desconhecido...");
}

// try/catch
try {
  const sombra = undefined;
  console.log(sombra.nome);
} catch (erro) {
  console.log("Erro capturado:", erro.message);
}

// throw
function invocarShadow(nome) {
  if (!nome) throw new Error("Nome da shadow é obrigatório!");
  console.log(`${nome} foi convocado!`);
}

try {
  invocarShadow("Igris");
  invocarShadow(""); // Lança erro
} catch (e) {
  console.log("Erro:", e.message);
}
