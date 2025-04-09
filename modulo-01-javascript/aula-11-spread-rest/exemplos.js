// SPREAD – clonar array
const shadows = ["Igris", "Iron", "Beru"];
const copia = [...shadows];
console.log("Cópia:", copia);

// SPREAD – clonar objeto
const beru = { nome: "Beru", nivel: 10 };
const beruBuffado = { ...beru, nivel: 9999 };
console.log("Beru buffado:", beruBuffado);

// REST – função com argumentos infinitos
function somarNiveis(...niveis) {
  return niveis.reduce((acc, n) => acc + n, 0);
}
console.log("Total de níveis:", somarNiveis(5, 10, 7, 15));
