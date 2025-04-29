// Desafio – Strings Avançadas

const texto = "  igris-ESTÁ-chAmando   ";

// 2. Limpe espaços com .trim()
const trim = texto.trim();

// 3. Coloque tudo em minúsculas
const minusculas = trim.toLowerCase();

// 4. Substitua "-" por " " (espaço)
const replace = minusculas.replace(/-/g, " ");

// 5. Verifique se contém a palavra "igris"
const contem = replace.includes("igris");

// 6. Quebre a frase em palavras (array)
const array = replace.split(" ");

// 7. Junte com "/" e imprima
const unida = array.join(" / ");

console.log("Texto sem espaço:", trim);
console.log("Minusculas:", minusculas);
console.log("Com replace:", replace);
console.log("Tem 'igris'?", contem);
console.log("Array final:", array);
console.log("Frase final:", unida);
