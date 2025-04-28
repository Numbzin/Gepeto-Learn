// Sistema de Missões do Exército das Sombras
// ---------------------------------------

// Base de dados
// ---------------------------------------
const missoes = [
  {
    id: 1,
    nome: "Defender Beru",
    descricao: "Proteger o assassino lendário durante patrulha.",
    prioridade: "alta",
    status: "pendente",
    dataCriacao: new Date(2025, 3, 25), // 25/04/2025
  },
  {
    id: 2,
    nome: "Fortificar bases",
    descricao: "Aumentar defesas nas bases do exército.",
    prioridade: "media",
    status: "pendente",
    dataCriacao: new Date(2025, 3, 26), // 26/04/2025
  },
];

let proximoId = 3;

// Módulo de Cadastro
// ---------------------------------------

/**
 * Cadastra uma nova missão no sistema
 * @param {string} nome - Nome da missão
 * @param {string} descricao - Descrição da missão
 * @param {string} prioridade - Prioridade da missão (alta, media, baixa)
 * @param {boolean} vip - Se é uma missão VIP ou não
 * @returns {object} A missão cadastrada
 */
function cadastrarMissao(nome, descricao, prioridade = "media", vip = false) {
  // Validação básica
  if (!nome || !descricao) {
    console.error("Erro: Nome e descrição são obrigatórios!");
    return null;
  }

  // Normalização de dados
  const prioridadeNormalizada = prioridade.toLowerCase();

  // Validação de prioridade
  if (!["alta", "media", "baixa"].includes(prioridadeNormalizada) && !vip) {
    console.error("Erro: Prioridade deve ser 'alta', 'media' ou 'baixa'!");
    return null;
  }

  // Se for VIP, prioridade é 'altíssima'
  const prioridadeFinal = vip ? "altissima" : prioridadeNormalizada;

  const novaMissao = {
    id: proximoId++,
    nome,
    descricao,
    prioridade: prioridadeFinal,
    status: "pendente",
    dataCriacao: new Date(),
    vip,
  };

  missoes.push(novaMissao);
  console.log(`Missão "${nome}" cadastrada com sucesso!`);
  return novaMissao;
}

/**
 * Cadastra uma missão VIP com prioridade altíssima
 * @param {string} nome - Nome da missão
 * @param {string} descricao - Descrição da missão
 * @returns {object} A missão VIP cadastrada
 */
function cadastrarMissaoVIP(nome, descricao) {
  return cadastrarMissao(nome, descricao, "alta", true);
}

// Módulo de Listagem
// ---------------------------------------

/**
 * Lista todas as missões cadastradas
 * @returns {Array} Array com todas as missões
 */
function listarMissoes() {
  console.log("\n===== LISTA DE TODAS AS MISSÕES =====");

  if (missoes.length === 0) {
    console.log("Nenhuma missão cadastrada.");
    return [];
  }

  missoes.forEach(exibirMissao);
  return missoes;
}

/**
 * Exibe os detalhes de uma missão específica
 * @param {object} missao - Objeto da missão a ser exibida
 */
function exibirMissao(missao) {
  const vipStatus = missao.vip ? "[VIP] " : "";
  const dataFormatada = formatarData(missao.dataCriacao);

  console.log(`\nID: ${missao.id} - ${vipStatus}${missao.nome}`);
  console.log(`Descrição: ${missao.descricao}`);
  console.log(`Prioridade: ${missao.prioridade.toUpperCase()}`);
  console.log(`Status: ${missao.status.toUpperCase()}`);
  console.log(`Data de criação: ${dataFormatada}`);
}

// Módulo de Filtro
// ---------------------------------------

/**
 * Filtra missões pelo status
 * @param {string} status - Status para filtrar (pendente ou concluida)
 * @returns {Array} Missões filtradas pelo status
 */
function filtrarPorStatus(status) {
  const statusNormalizado = status.toLowerCase();

  if (!["pendente", "concluida", "concluída"].includes(statusNormalizado)) {
    console.error("Erro: Status deve ser 'pendente' ou 'concluida'!");
    return [];
  }

  // Normaliza "concluída" para "concluida" (sem acento)
  const statusBusca =
    statusNormalizado === "concluída" ? "concluida" : statusNormalizado;

  const missoesFiltradas = missoes.filter(
    (missao) => missao.status === statusBusca
  );

  console.log(`\n===== MISSÕES COM STATUS: ${statusBusca.toUpperCase()} =====`);

  if (missoesFiltradas.length === 0) {
    console.log(`Nenhuma missão com status "${statusBusca}".`);
    return [];
  }

  missoesFiltradas.forEach(exibirMissao);
  return missoesFiltradas;
}

/**
 * Filtra missões pela prioridade
 * @param {string} prioridade - Prioridade para filtrar (alta, media, baixa, altissima)
 * @returns {Array} Missões filtradas pela prioridade
 */
function filtrarPorPrioridade(prioridade) {
  const prioridadeNormalizada = prioridade.toLowerCase();

  if (
    !["alta", "media", "baixa", "altissima"].includes(prioridadeNormalizada)
  ) {
    console.error(
      "Erro: Prioridade deve ser 'alta', 'media', 'baixa' ou 'altissima'!"
    );
    return [];
  }

  const missoesFiltradas = missoes.filter(
    (missao) => missao.prioridade === prioridadeNormalizada
  );

  console.log(
    `\n===== MISSÕES COM PRIORIDADE: ${prioridadeNormalizada.toUpperCase()} =====`
  );

  if (missoesFiltradas.length === 0) {
    console.log(`Nenhuma missão com prioridade "${prioridadeNormalizada}".`);
    return [];
  }

  missoesFiltradas.forEach(exibirMissao);
  return missoesFiltradas;
}

// Módulo de Atualização de Status
// ---------------------------------------

/**
 * Marca uma missão como concluída
 * @param {number} id - ID da missão a ser concluída
 * @returns {object|null} A missão atualizada ou null se não encontrada
 */
function marcarComoConcluida(id) {
  const missao = missoes.find((m) => m.id === id);

  if (!missao) {
    console.error(`Erro: Missão com ID ${id} não encontrada!`);
    return null;
  }

  if (missao.status === "concluida") {
    console.log(`Missão "${missao.nome}" já está concluída.`);
    return missao;
  }

  missao.status = "concluida";
  missao.dataConclusao = new Date();

  console.log(`\n✅ Missão "${missao.nome}" marcada como concluída!`);
  exibirMissao(missao);

  return missao;
}

// Módulo de Relatórios
// ---------------------------------------

/**
 * Gera um relatório completo sobre as missões
 * @returns {object} Objeto com dados do relatório
 */
function gerarRelatorio() {
  const totalMissoes = missoes.length;
  const missoesPendentes = missoes.filter(
    (m) => m.status === "pendente"
  ).length;
  const missoesConcluidas = missoes.filter(
    (m) => m.status === "concluida"
  ).length;

  // Contagem por prioridade
  const contagemPorPrioridade = missoes.reduce((contador, missao) => {
    contador[missao.prioridade] = (contador[missao.prioridade] || 0) + 1;
    return contador;
  }, {});

  // VIPs
  const missoesVIP = missoes.filter((m) => m.vip).length;

  console.log("\n===== RELATÓRIO GERAL DE MISSÕES =====");
  console.log(`Total de missões: ${totalMissoes}`);
  console.log(`Missões pendentes: ${missoesPendentes}`);
  console.log(`Missões concluídas: ${missoesConcluidas}`);

  console.log("\nDistribuição por prioridade:");
  for (const prioridade in contagemPorPrioridade) {
    const percentual = (
      (contagemPorPrioridade[prioridade] / totalMissoes) *
      100
    ).toFixed(1);
    console.log(
      `- ${prioridade.toUpperCase()}: ${
        contagemPorPrioridade[prioridade]
      } (${percentual}%)`
    );
  }

  if (missoesVIP > 0) {
    const percentualVIP = ((missoesVIP / totalMissoes) * 100).toFixed(1);
    console.log(`\nMissões VIP: ${missoesVIP} (${percentualVIP}%)`);
  }

  return {
    totalMissoes,
    missoesPendentes,
    missoesConcluidas,
    contagemPorPrioridade,
    missoesVIP,
  };
}

// Utilidades Gerais
// ---------------------------------------

/**
 * Busca uma missão pelo nome (total ou parcial)
 * @param {string} termo - Termo para busca
 * @returns {Array} Missões encontradas
 */
function buscarMissaoPorNome(termo) {
  if (!termo) {
    console.error("Erro: Termo de busca é obrigatório!");
    return [];
  }

  const termoBusca = termo.toLowerCase();
  const missoesEncontradas = missoes.filter((missao) =>
    missao.nome.toLowerCase().includes(termoBusca)
  );

  console.log(`\n===== BUSCA POR: "${termo}" =====`);

  if (missoesEncontradas.length === 0) {
    console.log("Nenhuma missão encontrada com esse termo.");
    return [];
  }

  missoesEncontradas.forEach(exibirMissao);
  return missoesEncontradas;
}

/**
 * Ordena missões por prioridade (da mais alta para a mais baixa)
 * @returns {Array} Missões ordenadas por prioridade
 */
function ordenarPorPrioridade() {
  // Mapa de valores para ordenação
  const valorPrioridade = {
    altissima: 4,
    alta: 3,
    media: 2,
    baixa: 1,
  };

  const missoesOrdenadas = [...missoes].sort((a, b) => {
    return valorPrioridade[b.prioridade] - valorPrioridade[a.prioridade];
  });

  console.log("\n===== MISSÕES ORDENADAS POR PRIORIDADE =====");
  missoesOrdenadas.forEach(exibirMissao);

  return missoesOrdenadas;
}

/**
 * Formata um objeto Date para o formato DD/MM/YYYY
 * @param {Date} data - Objeto de data
 * @returns {string} Data formatada
 */
function formatarData(data) {
  if (!data) return "N/A";
  return `${data.getDate().toString().padStart(2, "0")}/${(data.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${data.getFullYear()}`;
}

// Demonstração do Sistema
// ---------------------------------------
console.log("===== SISTEMA DE MISSÕES DO EXÉRCITO DAS SOMBRAS =====");

// 1. Cadastrar novas missões
console.log("\n> Cadastrando novas missões...");
cadastrarMissao("Reconhecimento", "Explorar território inimigo", "baixa");
cadastrarMissao("Treinar recrutas", "Treinar novas sombras invocadas", "media");
cadastrarMissaoVIP(
  "Proteger o Monarca",
  "Garantir a segurança do Sung Jin-Woo"
);

// 2. Listar todas as missões
listarMissoes();

// 3. Filtrar por status
filtrarPorStatus("pendente");

// 4. Filtrar por prioridade
filtrarPorPrioridade("alta");
filtrarPorPrioridade("altissima");

// 5. Marcar missões como concluídas
marcarComoConcluida(2);
marcarComoConcluida(1);

// 6. Demonstrar filtro de concluídas
filtrarPorStatus("concluida");

// 7. Buscar missão por nome
buscarMissaoPorNome("Proteger");

// 8. Ordenar por prioridade
ordenarPorPrioridade();

// 9. Gerar relatório final
gerarRelatorio();
