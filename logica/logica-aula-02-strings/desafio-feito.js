// Resolva aqui os desafios da Aula 02 — Strings
// Teste com console.log para ver se sua lógica está correta

// DESAFIO 1
// TODO: Crie uma função chamada `contarVogais(palavra)`
// Deve retornar quantas vogais existem na string recebida
// Dica: use .toLowerCase() e verifique se cada letra é 'a', 'e', 'i', 'o' ou 'u'
function contarVogais(palavra) {
  palavra = palavra.toLowerCase();
  let total = 0;
  for (let letra of palavra) {
    // verifique se a letra é vogal
    if ("aeiou".includes(letra)) {
      total++;
    }
  }

  return total;
}

console.log(contarVogais("banana"));

// DESAFIO 2
// TODO: Crie uma função chamada `inverterPalavra(palavra)`
// Deve retornar a palavra ao contrário
// Exemplo: inverterPalavra("code") → "edoc"

function inverterPalavra(palavra) {
  palavra = palavra.toLowerCase();
  let letras = palavra.split(""); // transforma em array
  let invertido = letras.reverse(); // inverte o array
  let resultado = invertido.join(""); // junta em uma string
  return resultado;
}

console.log(inverterPalavra("code")); // "edoc"

// DESAFIO 3
// TODO: Crie uma função chamada `ehPalindromo(palavra)`
// Um palíndromo é uma palavra que lida ao contrário é igual à original
// Exemplo: "ovo", "radar", "ana" → true | "casa" → false
function ehPalindromo(palavra) {
  palavra = palavra.toLowerCase();
  let original = palavra;
  let invertido = palavra.split("").reverse().join("");
  return original === invertido;
}

console.log(ehPalindromo("ovo")); // true

// DESAFIO 4
// TODO: Crie uma função chamada `removerEspacos(texto)`
// Deve retornar a string sem nenhum espaço
// Exemplo: "a b c" → "abc"
function removerEspacos(texto) {
  texto = texto.toLowerCase();
  return texto.replace(/\s/g, "");
}

console.log(removerEspacos("A B C")); // "abc"
