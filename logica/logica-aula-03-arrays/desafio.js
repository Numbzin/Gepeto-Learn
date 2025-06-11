// Aula 03 — Desafios com Arrays

// DESAFIO 1
// TODO: Crie uma função chamada `contarMaioresQue10(lista)`
// Deve retornar quantos números da lista são maiores que 10
function contarMaioresQue10(lista) {
  // variavel para contar
  let count = 0;
  // loop para percorrer a lista
  for (let i = 0; i < lista.length; i++) {
    // condição para verificar se o número é maior que 10
    if (lista[i] > 10) {
      // incrementar
      count++;
    }
  }
  return count;
}

// DESAFIO 2
// TODO: Crie uma função chamada `somarPares(lista)`
// Deve somar todos os números pares da lista

function somarPares(lista) {
  // variavel para soma
  let soma = 0;
  // loop para percorrer a lista
  for (let i = 0; i < lista.length; i++) {
    // condição para verificar se o número é par
    if (lista[i] % 2 === 0) {
      // somar
      soma += lista[i];
    }
  }
  return soma;
}

// DESAFIO 3
// TODO: Crie uma função chamada `maiorValor(lista)`
// Deve retornar o maior número da lista
// Dica: use Math.max ou lógica com if
function maiorValor(lista) {
  // variavel para armazenar o maior número
  let maiorNumeroEncontrado = lista[0];
  // loop para percorrer a lista
  for (let i = 0; i < lista.length; i++) {
    // condição para verificar se o número é maior que o maior número encontrado
    if (lista[i] > maiorNumeroEncontrado) {
      // maiorNumeroEncontrado recebe lista
      maiorNumeroEncontrado = lista[i];
    }
  }
  return maiorNumeroEncontrado;
}

// DESAFIO 4
// TODO: Crie uma função chamada `filtrarPalavrasGrandes(lista)`
// Deve retornar um novo array com palavras que tenham mais de 5 letras
function filtrarPalavrasGrandes(lista) {
  // variavel para armazenar as palavras grandes
  let palavrasGrandes = [];
  // loop para percorrer a lista
  for (let i = 0; i < lista.length; i++) {
    // condição para verificar se a palavra tem mais de 5 letras
    if (lista[i].length > 5) {
      palavrasGrandes.push(lista[i]);
    }
  }
  return palavrasGrandes;
}
