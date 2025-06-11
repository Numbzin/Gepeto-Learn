// TODO: importar os personagens
const personagens = require("./personagens");

// TODO: Separar válidos e inválidos (use typeof, hasOwnProperty)
function separarValidosEinvalidos(personagens) {
  const validos = [];
  const invalidos = [];

  for (const personagem of personagens) {
    if (
      typeof personagem.nome === "string" &&
      typeof personagem.classe === "string" &&
      typeof personagem.nivel === "number" &&
      typeof personagem.atributos === "object"
    ) {
      validos.push(personagem);
    } else {
      invalidos.push(personagem);
    }
  }

  return { validos, invalidos };
}

const { validos, invalidos } = separarValidosEinvalidos(personagens);

// TODO: Contar total de válidos e inválidos
function contagemDePersonagens(validos, invalidos) {
  const contagem = {
    validos: validos.length,
    invalidos: invalidos.length,
  };
  return contagem;
}

const contagem = contagemDePersonagens(validos, invalidos);

// TODO: Agrupar por classe
function agruparPorClasse(validos) {
  const agrupados = {};
  for (const personagem of validos) {
    if (!agrupados[personagem.classe]) {
      agrupados[personagem.classe] = [];
    }
    agrupados[personagem.classe].push(personagem);
  }
  return agrupados;
}

// TODO: Filtrar elite (nível >= 90)
function filtrarElite(validos) {
  return validos.filter((personagem) => personagem.nivel >= 90);
}

// TODO: Calcular média dos atributos de todos os válidos
function calcularMediaDosAtributos(validos) {
  // Se não houver personagens válidos, a média é 0 para evitar divisão por zero.
  if (validos.length === 0) {
    return 0;
  }

  let somaTotalAtributos = 0;
  for (const personagem of validos) {
    for (const atributo in personagem.atributos) {
      if (typeof personagem.atributos[atributo] === "number") {
        somaTotalAtributos += personagem.atributos[atributo];
      }
    }
  }
  // Calcula a "soma média de atributos por personagem válido".
  return somaTotalAtributos / validos.length;
}
// TODO 6: Calcular percentual por classe
function calcularPercentualPorClasse(agrupados) {
  const percentuais = {};
  for (const classe in agrupados) {
    percentuais[classe] = (agrupados[classe].length / validos.length) * 100;
  }
  return percentuais;
}

// TODO 7: Imprimir um relatório final formatado
const agrupados = agruparPorClasse(validos);
const elite = filtrarElite(validos);
const mediaAtributos = calcularMediaDosAtributos(validos);
const percentuaisPorClasse = calcularPercentualPorClasse(agrupados);

imprimirRelatorioFinal(contagem, agrupados, elite, percentuaisPorClasse);

function imprimirRelatorioFinal(
  contagem,
  agrupados,
  elite,
  percentuaisPorClasse
) {
  console.log("\n--- Relatório de Sombras ---");

  console.log("\n1. Contagem:");
  console.log("   Válidos:", contagem.validos);
  console.log("   Inválidos:", contagem.invalidos);

  console.log("\n2. Agrupamento por Classe:");
  for (const classe in agrupados) {
    console.log(`   ${classe}:`);
    agrupados[classe].forEach((personagem) => {
      console.log(`      - ${personagem.nome} (Nível ${personagem.nivel})`);
    });
  }

  console.log("\n3. Elite (Nível >= 90):");
  elite.forEach((personagem) => {
    console.log(`   - ${personagem.nome} (Nível ${personagem.nivel})`);
  });

  console.log("\n4. Média dos Atributos (Válidos):");
  console.log(`Média: ${mediaAtributos.toFixed(2)}`);

  console.log("\n5. Percentual por Classe:");
  for (const classe in percentuaisPorClasse) {
    console.log(`   ${classe}: ${percentuaisPorClasse[classe].toFixed(2)}%`);
  }

  console.log("\n--- Fim do Relatório ---");
}
