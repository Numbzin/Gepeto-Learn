// Desenvolva aqui sua função

function formatarTitulo(texto) {
  // Passo 1: Remover espaços extras no início e fim
  let textoLimpo = texto.trim();

  // Passo 2: Substituir hífens por espaços
  textoLimpo = textoLimpo.replace(/-/g, " ");

  // Passo 3: Dividir o texto em palavras
  let palavras = textoLimpo.split(" ");

  // Passo 4: Transformar cada palavra (primeira letra maiúscula, resto minúscula)
  let palavrasFormatadas = palavras.map((palavra) => {
    if (palavra.length === 0) return ""; // Caso tenha espaços extras entre palavras

    // Primeira letra maiúscula + resto minúscula
    return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
  });

  // Passo 5: Juntar as palavras formatadas com espaço
  return palavrasFormatadas.join(" ");
}

const entrada = "   o ReI-dAs-sOmBrAs   ";
const resultado = formatarTitulo(entrada);
console.log(resultado); // Saída: "O Rei Das Sombras"

// Testes adicionais
console.log(formatarTitulo("TEXTO TODO em MAIÚSCULO")); // "Texto Todo Em Maiúsculo"
console.log(formatarTitulo("texto-com-varios-hifens")); // "Texto Com Varios Hifens"
console.log(formatarTitulo("   espaços  extras   entre  palavras   ")); // "Espaços Extras Entre Palavras"
