const readline = require("readline");
const sombras = require("./sombras");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Funções auxiliares
function validarSombra(sombra) {
  if (
    typeof sombra.nome !== "string" ||
    typeof sombra.tipo !== "string" ||
    typeof sombra.nivel !== "number" ||
    typeof sombra.atributos !== "object" ||
    sombra.atributos === null
  ) {
    return false;
  }

  // Verificar se todos os atributos são números
  for (const atributo in sombra.atributos) {
    if (typeof sombra.atributos[atributo] !== "number") {
      return false;
    }
  }

  return true;
}

function listarSombrasValidas() {
  console.log("\n=== SOMBRAS VÁLIDAS ===");
  const validas = sombras.filter(validarSombra);

  if (validas.length === 0) {
    console.log("Nenhuma sombra válida encontrada.");
    return;
  }

  validas.forEach((sombra, index) => {
    console.log(
      `${index + 1}. ${sombra.nome} (${sombra.tipo}) - Nível: ${sombra.nivel}`
    );
    console.log(`   Atributos: ${JSON.stringify(sombra.atributos)}`);
  });

  console.log(`\nTotal: ${validas.length} sombras válidas`);
}

function listarElite() {
  console.log("\n=== SOMBRAS DE ELITE (Nível >= 90) ===");
  const elite = sombras.filter(
    (sombra) => validarSombra(sombra) && sombra.nivel >= 90
  );

  if (elite.length === 0) {
    console.log("Nenhuma sombra de elite encontrada.");
    return;
  }

  elite.forEach((sombra, index) => {
    console.log(
      `${index + 1}. ${sombra.nome} (${sombra.tipo}) - Nível: ${sombra.nivel}`
    );
    console.log(`   Atributos: ${JSON.stringify(sombra.atributos)}`);
  });

  console.log(`\nTotal: ${elite.length} sombras de elite`);
}

function buscarPorNome() {
  rl.question("Digite o nome da sombra: ", (nome) => {
    console.log(`\n=== BUSCA POR: "${nome}" ===`);
    const sombra = sombras.find(
      (s) => s.nome && s.nome.toLowerCase() === nome.toLowerCase()
    );

    if (sombra) {
      console.log("Sombra encontrada:");
      console.log(`Nome: ${sombra.nome}`);
      console.log(`Tipo: ${sombra.tipo}`);
      console.log(`Nível: ${sombra.nivel}`);
      console.log(`Atributos: ${JSON.stringify(sombra.atributos)}`);
      console.log(`Status: ${validarSombra(sombra) ? "VÁLIDA" : "INVÁLIDA"}`);
    } else {
      console.log("Sombra não encontrada.");
    }

    setTimeout(() => iniciarSistema(), 1000);
  });
}

function gerarRelatorioPorClasse() {
  console.log("\n=== RELATÓRIO POR CLASSE ===");
  const relatorio = {};

  sombras.forEach((sombra) => {
    const tipo = sombra.tipo || "Tipo não definido";
    if (!relatorio[tipo]) {
      relatorio[tipo] = [];
    }
    relatorio[tipo].push(sombra);
  });

  for (const tipo in relatorio) {
    console.log(`\n📁 Classe: ${tipo}`);
    console.log(`   Total: ${relatorio[tipo].length} sombras`);

    relatorio[tipo].forEach((sombra, index) => {
      const nome = sombra.nome || "Nome não definido";
      const nivel = sombra.nivel || "N/A";
      const status = validarSombra(sombra) ? "✅" : "❌";
      console.log(`   ${index + 1}. ${nome} - Nível: ${nivel} ${status}`);
    });
  }
}

function listarInvalidas() {
  console.log("\n=== SOMBRAS INVÁLIDAS ===");
  const invalidas = sombras.filter((sombra) => !validarSombra(sombra));

  if (invalidas.length === 0) {
    console.log("Nenhuma sombra inválida encontrada.");
    return;
  }

  invalidas.forEach((sombra, index) => {
    console.log(`${index + 1}. Problemas encontrados:`);

    if (typeof sombra.nome !== "string") {
      console.log(`   ❌ Nome inválido: ${sombra.nome}`);
    }
    if (typeof sombra.tipo !== "string") {
      console.log(`   ❌ Tipo inválido: ${sombra.tipo}`);
    }
    if (typeof sombra.nivel !== "number") {
      console.log(`   ❌ Nível inválido: ${sombra.nivel}`);
    }
    if (typeof sombra.atributos !== "object" || sombra.atributos === null) {
      console.log(`   ❌ Atributos inválidos: ${sombra.atributos}`);
    } else {
      for (const atributo in sombra.atributos) {
        if (typeof sombra.atributos[atributo] !== "number") {
          console.log(
            `   ❌ Atributo "${atributo}" inválido: ${sombra.atributos[atributo]}`
          );
        }
      }
    }

    console.log(`   Dados: ${JSON.stringify(sombra)}\n`);
  });

  console.log(`Total: ${invalidas.length} sombras inválidas`);
}

function calcularMediaAtributos() {
  console.log("\n=== MÉDIA DOS ATRIBUTOS ===");
  const validas = sombras.filter(validarSombra);

  if (validas.length === 0) {
    console.log("Nenhuma sombra válida para calcular média.");
    return;
  }

  const somaAtributos = {};
  let totalAtributos = 0;
  let somaTotalGeral = 0;

  validas.forEach((sombra) => {
    for (const atributo in sombra.atributos) {
      const valor = sombra.atributos[atributo];

      if (!somaAtributos[atributo]) {
        somaAtributos[atributo] = { soma: 0, count: 0 };
      }

      somaAtributos[atributo].soma += valor;
      somaAtributos[atributo].count++;
      somaTotalGeral += valor;
      totalAtributos++;
    }
  });

  // Média por tipo de atributo
  console.log("Médias por atributo:");
  for (const atributo in somaAtributos) {
    const media = somaAtributos[atributo].soma / somaAtributos[atributo].count;
    console.log(`  ${atributo}: ${media.toFixed(2)}`);
  }

  // Média geral
  const mediaGeral = somaTotalGeral / totalAtributos;
  console.log(`\nMédia geral de todos os atributos: ${mediaGeral.toFixed(2)}`);
  console.log(`Baseado em ${validas.length} sombras válidas`);
}

function exibirMenu() {
  console.log("\n===== Sistema do Exército das Sombras =====");
  console.log("1. Listar todas as sombras válidas");
  console.log("2. Listar sombras de elite (nível >= 90)");
  console.log("3. Buscar sombra por nome");
  console.log("4. Gerar relatório por classe");
  console.log("5. Listar sombras inválidas");
  console.log("6. Calcular média dos atributos");
  console.log("7. Sair");
  console.log("==============================================");
}

function iniciarSistema() {
  exibirMenu();

  rl.question("Escolha uma opção (1-7): ", (resposta) => {
    console.clear();

    switch (resposta.trim()) {
      case "1":
        listarSombrasValidas();
        break;
      case "2":
        listarElite();
        break;
      case "3":
        buscarPorNome();
        return;
      case "4":
        gerarRelatorioPorClasse();
        break;
      case "5":
        listarInvalidas();
        break;
      case "6":
        calcularMediaAtributos();
        break;
      case "7":
        console.log("🌙 Saindo do sistema das sombras...");
        rl.close();
        return;
      default:
        console.log("❌ Opção inválida. Escolha entre 1-7.");
    }

    rl.question("\nPressione ENTER para continuar...", () => {
      console.clear();
      setTimeout(() => iniciarSistema(), 100);
    });
  });
}

console.log("🌙 Iniciando Sistema do Exército das Sombras...");
console.log(`📊 ${sombras.length} sombras carregadas do arquivo`);

// Iniciar o sistema
iniciarSistema();
