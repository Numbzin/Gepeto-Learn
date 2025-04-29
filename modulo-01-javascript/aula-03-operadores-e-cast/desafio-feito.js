// Crie duas variáveis com números em string, converta para number e some os valores.
// Depois, imprima o resultado com uma mensagem usando template string.

let num1 = "22";
let num2 = "17";
let num1Converted = Number(num1);
let num2Converted = Number(num2);
let sum = num1Converted + num2Converted;

console.log(`A soma de ${num1} e ${num2} é ${sum}`);
