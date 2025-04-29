// Desafio – Simulando API

const sombras = [
  { id: 1, nome: "Beru", nivel: 10, tipo: "assassino" },
  { id: 2, nome: "Igris", nivel: 9, tipo: "tanque" },
  { id: 3, nome: "Iron", nivel: 7, tipo: "tanque" },
  { id: 4, nome: "Bellion", nivel: 15, tipo: "general" },
  { id: 5, nome: "Kaisel", nivel: 5, tipo: "cavalaria" },
  { id: 6, nome: "Tank", nivel: 8, tipo: "tanque" },
];

const respostaAPI = sombras;

const tanques = respostaAPI.filter((sombra) => sombra.tipo === "tanque");
console.table(tanques);

const elite = respostaAPI
  .filter((sombra) => sombra.nivel >= 8)
  .map((sombra) => sombra.nome);
console.log("Elite:", elite);

const poderTotal = respostaAPI.reduce((acc, sombra) => acc + sombra.nivel, 0);
const mediaNivel = poderTotal / respostaAPI.length;
console.log("Média de nível:", mediaNivel);

const ordenados = [...sombras].sort((a, b) => a.nivel - b.nivel);
console.table(ordenados);

const temAssassino = respostaAPI.some((sombra) => sombra.tipo === "assassino");
console.log("Existe assassino?", temAssassino);

const sombraNivelMaisAlto = respostaAPI.reduce(
  (max, sombra) => (sombra.nivel > max.nivel ? sombra : max),
  respostaAPI[0]
);
console.log("Sombra mais forte:", sombraNivelMaisAlto);
