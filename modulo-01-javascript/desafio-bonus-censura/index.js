// Desenvolva aqui sua função

function censurarTexto(texto, palavrasProibidas) {
  // Junta todas as palavras proibidas com o operador OR (|) para a regex
  const padrao = new RegExp(palavrasProibidas.join("|"), "gi");

  // Substitui todas as ocorrências pelo símbolo de censura
  return texto.replace(padrao, "***");
}

const texto = "Beru é forte, mas Bellion é ainda mais perigoso.";
const proibidas = ["beru", "bellion"];

const resultado = censurarTexto(texto, proibidas);
console.log(resultado);
