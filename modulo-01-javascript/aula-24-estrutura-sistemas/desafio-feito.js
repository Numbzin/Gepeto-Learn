// Sistema de Gerenciamento de Sombras
// ------------------------------

// Base de dados
// ------------------------------
const sombras = [
  { id: 1, nome: "Beru", nivel: 10, tipo: "assassino" },
  { id: 2, nome: "Igris", nivel: 9, tipo: "tanque" },
  { id: 3, nome: "Iron", nivel: 7, tipo: "tanque" },
];

let proximoId = 4;

// Módulo de Cadastro
// ------------------------------

/**
 * Cadastra uma nova sombra no sistema
 * @param {string} nome - Nome da sombra
 * @param {number} nivel - Nível de poder da sombra
 * @param {string} tipo - Tipo/classe da sombra
 * @returns {object} A sombra cadastrada
 */
function cadastrarSombra(nome, nivel, tipo) {
  // Validação básica de entrada
  if (!nome || !nivel || !tipo) {
    console.error("Erro: Todos os campos são obrigatórios!");
    return null;
  }

  const novaSombra = {
    id: proximoId++,
    nome: nome,
    nivel: Number(nivel),
    tipo: tipo.toLowerCase(),
  };

  sombras.push(novaSombra);
  console.log(`Sombra "${nome}" cadastrada com sucesso!`);

  return novaSombra;
}

// Módulo de Listagem
// ------------------------------

/**
 * Lista todas as sombras cadastradas
 * @returns {Array} Array com todas as sombras
 */
function listarSombras() {
  console.log("\n===== LISTA DE TODAS AS SOMBRAS =====");

  if (sombras.length === 0) {
    console.log("Nenhuma sombra cadastrada.");
    return [];
  }

  sombras.forEach((sombra) => {
    console.log(
      `ID: ${sombra.id} | ${sombra.nome} - Nível ${sombra.nivel} (${sombra.tipo})`
    );
  });

  return sombras;
}

/**
 * Filtra sombras com nível acima do valor especificado
 * @param {number} nivelMinimo - Nível mínimo para filtro
 * @returns {Array} Sombras filtradas
 */
function filtrarSombrasPorNivel(nivelMinimo = 8) {
  const sombrasFiltradas = sombras.filter(
    (sombra) => sombra.nivel > nivelMinimo
  );

  console.log(`\n===== SOMBRAS COM NÍVEL ACIMA DE ${nivelMinimo} =====`);

  if (sombrasFiltradas.length === 0) {
    console.log(`Nenhuma sombra com nível acima de ${nivelMinimo}.`);
    return [];
  }

  sombrasFiltradas.forEach((sombra) => {
    console.log(`${sombra.nome} - Nível ${sombra.nivel} (${sombra.tipo})`);
  });

  return sombrasFiltradas;
}

// Módulo de Relatórios
// ------------------------------

/**
 * Calcula a média de nível das sombras
 * @returns {number} Média de nível
 */
function calcularMediaNivel() {
  if (sombras.length === 0) return 0;

  const somaTotal = sombras.reduce((acumulador, sombra) => {
    return acumulador + sombra.nivel;
  }, 0);

  return somaTotal / sombras.length;
}

/**
 * Conta a quantidade de sombras por tipo
 * @returns {object} Objeto com contagem por tipo
 */
function contarSombrasPorTipo() {
  return sombras.reduce((contador, sombra) => {
    // Se o tipo já existe no contador, incrementa, senão inicializa com 1
    contador[sombra.tipo] = (contador[sombra.tipo] || 0) + 1;
    return contador;
  }, {});
}

/**
 * Gera um relatório completo sobre as sombras
 * @returns {object} Objeto com dados do relatório
 */
function gerarRelatorio() {
  const totalSombras = sombras.length;
  const mediaNivel = calcularMediaNivel();
  const quantidadePorTipo = contarSombrasPorTipo();

  console.log("\n===== RELATÓRIO GERAL =====");
  console.log(`Total de sombras: ${totalSombras}`);
  console.log(`Média de nível: ${mediaNivel.toFixed(1)}`);

  console.log("\nQuantidade por tipo:");
  for (const tipo in quantidadePorTipo) {
    console.log(`- ${tipo}: ${quantidadePorTipo[tipo]}`);
  }

  return {
    totalSombras,
    mediaNivel,
    quantidadePorTipo,
  };
}

// Módulo de Utilidades
// ------------------------------

/**
 * Busca uma sombra pelo nome
 * @param {string} nome - Nome da sombra a ser buscada
 * @returns {object|null} A sombra encontrada ou null
 */
function buscarSombraPorNome(nome) {
  if (!nome) return null;

  const nomeBusca = nome.toLowerCase();
  return sombras.find((sombra) => sombra.nome.toLowerCase() === nomeBusca);
}

/**
 * Ordena sombras por nível (decrescente)
 * @returns {Array} Sombras ordenadas por nível
 */
function ordenarSombrasPorNivel() {
  const sombraOrdenadas = [...sombras].sort((a, b) => b.nivel - a.nivel);

  console.log("\n===== RANKING DE SOMBRAS POR NÍVEL =====");
  sombraOrdenadas.forEach((sombra, index) => {
    console.log(`${index + 1}º lugar: ${sombra.nome} - Nível ${sombra.nivel}`);
  });

  return sombraOrdenadas;
}

// Fluxo Principal de Execução
// ------------------------------
console.log("SISTEMA DE GERENCIAMENTO DE SOMBRAS\n");

cadastrarSombra("Bellion", 15, "general");
cadastrarSombra("Kaisel", 5, "cavalaria");
cadastrarSombra("Tank", 8, "tanque");

listarSombras();
filtrarSombrasPorNivel(8);
gerarRelatorio();
ordenarSombrasPorNivel();

const sombraEncontrada = buscarSombraPorNome("Igris");
if (sombraEncontrada) {
  console.log(`Sombra encontrada: ${sombraEncontrada.nome}`);
} else {
  console.log("Sombra não encontrada.");
}
