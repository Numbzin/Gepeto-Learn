// Desenvolva aqui o sistema de fusão de shadows!

const exercito1 = ["Igris", "Iron", "Beru"];
const exercito2 = ["Bellion", "Kaisel"];

function juntarExercitos(arr1, arr2) {
  return [...arr1, ...arr2];
}

function calcularPoderTotal(...niveis) {
  return niveis.reduce((acc, n) => acc + n, 0);
}

// Testes:
// const exercitoFinal = juntarExercitos(...);
// const totalPoder = calcularPoderTotal(...);

const exercitoFinal = juntarExercitos(exercito1, exercito2);
console.log("Exército completo:", exercitoFinal);

const totalPoder = calcularPoderTotal(5, 10, 7, 15);
console.log("Total de poder:", totalPoder);
