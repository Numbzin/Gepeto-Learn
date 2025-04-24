// Desafio – Regex Básica

const frase =
  "Igris, Beru e Bellion são parte do exército. Beru é o mais rápido.";

// 1. Encontre todas as ocorrências de "beru" (independente de maiúscula/minúscula)
// 2. Conte quantas vezes "beru" aparece
// 3. Substitua todas as ocorrências de "beru" por "REI SOMBRA"
// 4. Encontre todas as palavras com mais de 6 letras

const resultado = frase.match(/beru/gi) || [];
const trocado = frase.replace(/beru/gi, "REI SOMBRA");
const mais_de_seis = frase.match(/\b\w{6,}\b/g);
console.log(`Beru aparece: ${resultado.length} vezes`);
console.log(`Frase trocada: ${trocado}`);
console.log(`Palavras com mais de 6 letras: ${mais_de_seis}`);
