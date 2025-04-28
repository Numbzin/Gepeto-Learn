// Sistema de Administração do Exército das Sombras VIP

const sombras = [
  { id: 1, nome: "Beru", nivel: 10, tipo: "assassino" },
  { id: 2, nome: "Igris", nivel: 9, tipo: "tanque" },
  { id: 3, nome: "Iron", nivel: 7, tipo: "tanque" },
  { id: 4, nome: "Bellion", nivel: 15, tipo: "general" },
  { id: 5, nome: "Kaisel", nivel: 5, tipo: "cavalaria" },
];

let ultimoId = 5;

/**
 * Cadastra uma nova sombra no exército
 * @param {string} nome - Nome da sombra
 * @param {number} nivel - Nível de poder
 * @param {string} tipo - Tipo/Classe da sombra
 * @param {boolean} vip - Indica se a sombra é VIP (opcional)
 * @returns {object} A sombra cadastrada
 */
function cadastrarSombra(nome, nivel, tipo, vip = false) {
  ultimoId++;

  // Bônus: Sombras VIP ganham +5 de nível
  const nivelFinal = vip ? nivel + 5 : nivel;

  const novaSombra = {
    id: ultimoId,
    nome,
    nivel: nivelFinal,
    tipo,
    vip,
  };

  sombras.push(novaSombra);
  console.log(`Sombra "${nome}" cadastrada com sucesso!`);
  return novaSombra;
}

/**
 * Lista todas as sombras do exército
 * @returns {Array} Array com todas as sombras
 */
function listarSombras() {
  console.log("\n==== LISTA DE SOMBRAS ====");
  sombras.forEach((sombra) => {
    const vipStatus = sombra.vip ? "[VIP]" : "";
    console.log(
      `${sombra.id}. ${sombra.nome} ${vipStatus} - Nível ${sombra.nivel} (${sombra.tipo})`
    );
  });
  return sombras;
}

/**
 * Filtra apenas as sombras de elite (nível > 10)
 * @returns {Array} Array com as sombras de elite
 */
function filtrarElite() {
  const elite = sombras.filter((sombra) => sombra.nivel > 10);

  console.log("\n==== SOMBRAS DE ELITE ====");
  elite.forEach((sombra) => {
    const vipStatus = sombra.vip ? "[VIP]" : "";
    console.log(
      `${sombra.nome} ${vipStatus} - Nível ${sombra.nivel} (${sombra.tipo})`
    );
  });

  return elite;
}

/**
 * Função bônus para filtrar sombras VIP de elite
 * @returns {Array} Array com as sombras VIP de elite
 */
function filtrarEliteVIP() {
  const eliteVIP = sombras.filter((sombra) => sombra.nivel > 10 && sombra.vip);

  console.log("\n==== SOMBRAS DE ELITE VIP ====");
  if (eliteVIP.length === 0) {
    console.log("Não há sombras VIP de elite.");
  } else {
    eliteVIP.forEach((sombra) => {
      console.log(
        `${sombra.nome} [VIP] - Nível ${sombra.nivel} (${sombra.tipo})`
      );
    });
  }

  return eliteVIP;
}

/**
 * Gera e exibe o ranking das sombras por nível
 * @returns {Array} Array com as sombras ordenadas por nível (decrescente)
 */
function gerarRanking() {
  const ranking = [...sombras].sort((a, b) => b.nivel - a.nivel);

  console.log("\n==== RANKING DAS SOMBRAS ====");
  ranking.forEach((sombra, index) => {
    const vipStatus = sombra.vip ? "[VIP]" : "";
    console.log(
      `${index + 1}º - ${sombra.nome} ${vipStatus} - Nível ${sombra.nivel} (${
        sombra.tipo
      })`
    );
  });

  return ranking;
}

/**
 * Gera e exibe um relatório geral sobre o exército de sombras
 * @returns {object} Objeto contendo o relatório
 */
function gerarRelatorio() {
  const totalSombras = sombras.length;

  const somaTotal = sombras.reduce((acc, sombra) => acc + sombra.nivel, 0);
  const mediaNivel = somaTotal / totalSombras;

  const sombraMaisPoderosa = sombras.reduce(
    (maisForte, atual) => (atual.nivel > maisForte.nivel ? atual : maisForte),
    sombras[0]
  );

  const totalPorTipo = sombras.reduce((acc, sombra) => {
    acc[sombra.tipo] = (acc[sombra.tipo] || 0) + 1;
    return acc;
  }, {});

  const totalVIP = sombras.filter((sombra) => sombra.vip).length;

  const relatorio = {
    totalSombras,
    mediaNivel,
    sombraMaisPoderosa,
    totalPorTipo,
    totalVIP,
  };

  console.log("\n====== RELATÓRIO GERAL ======");
  console.log(`Total de sombras: ${totalSombras}`);
  console.log(`Média de nível: ${mediaNivel.toFixed(1)}`);
  console.log(
    `Sombra mais poderosa: ${sombraMaisPoderosa.nome} (Nível ${sombraMaisPoderosa.nivel})`
  );

  console.log("\nQuantidade por tipo:");
  Object.entries(totalPorTipo).forEach(([tipo, quantidade]) => {
    console.log(`- ${tipo}: ${quantidade}`);
  });

  if (totalVIP > 0) {
    console.log(`\nTotal de sombras VIP: ${totalVIP}`);
  }

  return relatorio;
}

/**
 * Busca uma sombra pelo nome
 * @param {string} nome - Nome da sombra a ser buscada
 * @returns {object|null} A sombra encontrada ou null
 */
function buscarSombra(nome) {
  const nomeLowerCase = nome.toLowerCase();
  const sombraEncontrada = sombras.find(
    (sombra) => sombra.nome.toLowerCase() === nomeLowerCase
  );

  if (sombraEncontrada) {
    console.log("\n==== SOMBRA ENCONTRADA ====");
    const vipStatus = sombraEncontrada.vip ? "[VIP]" : "";
    console.log(
      `${sombraEncontrada.nome} ${vipStatus} - Nível ${sombraEncontrada.nivel} (${sombraEncontrada.tipo})`
    );
    return sombraEncontrada;
  } else {
    console.log(`\nSombra "${nome}" não encontrada.`);
    return null;
  }
}

// === Demonstração do sistema ===

// 1. Cadastrar novas sombras (incluindo VIPs)
console.log("=== DEMONSTRAÇÃO DO SISTEMA ===");
cadastrarSombra("Tank", 8, "tanque");
cadastrarSombra("Tusk", 12, "cavalaria", true); // VIP ganha +5 de nível = 17

// 2. Listar todas as sombras
listarSombras();

// 3. Filtrar elite
filtrarElite();

// 4. Mostrar ranking
gerarRanking();

// 5. Exibir relatório
gerarRelatorio();

// Bônus: Filtrar elite VIP
filtrarEliteVIP();

// Função extra: Buscar sombra
buscarSombra("Bellion");
buscarSombra("Shadow"); // Teste com sombra inexistente
