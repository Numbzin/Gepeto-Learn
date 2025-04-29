// Desafio:

// 1. Crie uma função chamada `combinarShadows` que usa SPREAD
//    e junta dois arrays de shadows em um só

// 2. Crie uma função chamada `somarPoder` que usa REST
//    e soma qualquer quantidade de níveis recebidos como argumento

// Teste as duas funções no final

const shadows1 = ["Igris", "Iron", "Beru"];
const shadows2 = ["Bellion"];

function combinarShadows(arr1, arr2) {
  return [...arr1, ...arr2];
}

function somarPoder(...niveis) {
  return niveis.reduce((acc, n) => acc + n, 0);
}

const combinado = combinarShadows(shadows1, shadows2);
console.log("Exército completo:", combinado);

const total = somarPoder(5, 10, 7, 15);
console.log("Total de poder:", total);
