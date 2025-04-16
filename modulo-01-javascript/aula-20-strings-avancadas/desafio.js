// Desafio – Strings Avançadas

// 1. Crie uma string com espaços, letras maiúsculas e símbolo entre palavras, ex:
//    "  igris-ESTÁ-chAmando   "

// 2. Limpe espaços com .trim()
// 3. Coloque tudo em minúsculas
// 4. Substitua "-" por " " (espaço)
// 5. Verifique se contém a palavra "igris"
// 6. Quebre a frase em palavras (array)
// 7. Junte com "/" e imprima
const texto = "  igris-ESTÁ-chAmando   ";

const trim = texto.trim();
const minusculas = trim.toLowerCase();
const replace = minusculas.replace(/-/g, " ");
const contem = replace.includes("igris");
const array = replace.split(" ");
const unida = array.join(" / ");

console.log("Texto sem espaço:", trim);
console.log("Minusculas:", minusculas);
console.log("Com replace:", replace);
console.log("Tem 'igris'?", contem);
console.log("Array final:", array);
console.log("Frase final:", unida);
