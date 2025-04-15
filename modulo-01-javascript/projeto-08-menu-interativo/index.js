// Desenvolva aqui o sistema interativo

// Dica: use while(true) ou do...while e simule input com prompt() se estiver no navegador
// ou substitua entrada manual para testes locais (ex: hardcoded)
import { question } from "readline-sync";
const sombras = [];

function registrarSombra(nome, nivel) {
  if (!nome || isNaN(nivel)) {
    console.log("Nome e nível válidos são obrigatórios.");
    return;
  }
  const sombra = {
    nome,
    nivel,
    data: new Date().toLocaleDateString("pt-BR"),
  };
  sombras.push(sombra);
}

function listarSombras() {
  console.log("\n📜 Sombras convocadas:");
  if (sombras.length === 0) {
    console.log("Nenhuma sombra foi convocada ainda.");
    return;
  }

  for (const { nome, nivel, data } of sombras) {
    console.log(`- ${nome} foi convocada em ${data} (Nível: ${nivel})`);
  }
}

// loop interativo
// enquanto não escolher [0], mostrar menu e executar a ação escolhida

let opcao;
do {
  console.log("\n=== Sistema de Invocação ===");
  console.log("[1] Registrar sombra");
  console.log("[2] Ver exército convocado");
  console.log("[0] Sair");

  opcao = question("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      const nome = question("Nome da sombra: ");
      const nivel = parseInt(question("Nível da sombra: "));
      registrarSombra(nome, nivel);
      break;

    case "2":
      listarSombras();
      break;

    case "0":
      console.log("Encerrando sistema.");
      break;

    default:
      console.log("Opção inválida.");
  }
} while (opcao !== "0");
