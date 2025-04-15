// Escopo
let nome = "Beru";

function mostrar() {
  let nome = "Igris"; // escopo local
  console.log("Dentro da função:", nome);
}

mostrar();
console.log("Fora da função:", nome);

// Callback
function executarAcao(acao) {
  console.log("Preparando ação...");
  acao(); // chama a função recebida
}

executarAcao(() => {
  console.log("Sombra convocada com sucesso!");
});
