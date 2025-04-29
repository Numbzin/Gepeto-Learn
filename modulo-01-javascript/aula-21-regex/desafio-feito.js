// Desafio – Regex Básica

const frase =
  "Igris, Beru e Bellion são parte do exército. Beru é o mais rápido.";

// 1. Encontre todas as ocorrências de "beru" (independente de maiúscula/minúscula)
const resultado = frase.match(/beru/gi) || [];

// 2. Conte quantas vezes "beru" aparece
console.log(`Beru aparece: ${resultado.length} vezes`);

// 3. Substitua todas as ocorrências de "beru" por "REI SOMBRA"
const trocado = frase.replace(/beru/gi, "REI SOMBRA");
console.log(`Frase trocada: ${trocado}`);

// 4. Encontre todas as palavras com mais de 6 letras
const mais_de_seis = frase.match(/\b\w{6,}\b/g);
console.log(`Palavras com mais de 6 letras: ${mais_de_seis}`);
