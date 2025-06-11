// Resolva aqui os desafios da Aula 01
// Use console.log para testar suas funções

// Aula 01 — Desafios com números

// DESAFIO 1
// TODO: crie uma função chamada `somarMultiplosDe3ou5(limite)`
// Ela deve somar todos os números de 1 até "limite" que sejam múltiplos de 3 ou 5
// Exemplo: somarMultiplosDe3ou5(10) → 3 + 5 + 6 + 9 + 10 = 33

function somarMultiplosDe3ou5(limite) {
  let soma = 0; // Inicializa a soma com zero

  for (let i = 1; i <= limite; i++) {
    // Loop de 1 até o limite
    if (i % 3 === 0 || i % 5 === 0) {
      // Se é múltiplo de 3 OU 5
      soma += i; // Adiciona o número à soma (equivale a: soma = soma + i)
    }
  }

  return soma; // Retorna o total acumulado
}

// Teste da função
console.log(somarMultiplosDe3ou5(10));
console.log(somarMultiplosDe3ou5(15));

// DESAFIO 2
// TODO: crie uma função chamada `contarPares(inicio, fim)`
// Ela deve contar quantos números pares existem entre inicio e fim (inclusive)
function contarPares(inicio, fim) {
  if (inicio > fim) [inicio, fim] = [fim, inicio];
  let pares = 0;
  for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
      pares += 1;
    }
  }

  return pares;
}
console.log("tem " + contarPares(2, 4) + " pares");

// DESAFIO 3
// TODO: crie uma função chamada `ehPrimo(numero)`
// Ela deve retornar true se o número for primo, e false se não for
// Números primos só são divisíveis por 1 e por ele mesmo
function ehPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}
console.log("é primo?: " + ehPrimo(2));

// DESAFIO 4
// TODO: crie uma função chamada `contarDivisores(numero)`
// Ela deve retornar quantos divisores o número possui (ex: 6 → 1,2,3,6 → 4 divisores)

function contarDivisores(numero) {
  let total = 0;
  if (numero <= 0) return 0;
  for (let i = 1; i <= numero; i++) {
    // se numero % i === 0, então i é um divisor
    if (numero % i === 0) {
      total++;
    }
  }

  return total;
}

console.log(contarDivisores(6));
