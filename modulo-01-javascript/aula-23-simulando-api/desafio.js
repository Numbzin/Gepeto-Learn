const sombras = [
  { id: 1, nome: "Beru", nivel: 10, tipo: "assassino" },
  { id: 2, nome: "Igris", nivel: 9, tipo: "tanque" },
  { id: 3, nome: "Iron", nivel: 7, tipo: "tanque" },
  { id: 4, nome: "Bellion", nivel: 15, tipo: "general" },
  { id: 5, nome: "Kaisel", nivel: 5, tipo: "cavalaria" },
  { id: 6, nome: "Tank", nivel: 8, tipo: "tanque" },
];

const respostaAPI = sombras;

// 1. Filtrar sombras tipo "tanque"
const tanques = respostaAPI.filter((sombra) => sombra.tipo === "tanque");
console.log("1. Sombras do tipo tanque:");
console.table(tanques);

// 2. Listar nomes das sombras de nível 8 ou mais
const elite = respostaAPI
  .filter((sombra) => sombra.nivel >= 8)
  .map((sombra) => sombra.nome);
console.log("\n2. Nomes das sombras de elite (nível ≥ 8):");
console.log(elite.join(", "));

// 3. Calcular média de nível geral
const poderTotal = respostaAPI.reduce((acc, sombra) => acc + sombra.nivel, 0);
const mediaNivel = poderTotal / respostaAPI.length;
console.log("\n3. Estatísticas de poder:");
console.log(`Poder total: ${poderTotal}`);
console.log(`Nível médio: ${mediaNivel.toFixed(2)}`);

// 4. Ordenar todas as sombras por nível (crescente)
const ordenados = [...sombras].sort((a, b) => a.nivel - b.nivel);
console.log("\n4. Sombras ordenadas por nível (crescente):");
console.table(ordenados);

// 5. Verificar se existe alguma sombra do tipo "assassino"
const temAssassino = respostaAPI.some((sombra) => sombra.tipo === "assassino");
const assassino = respostaAPI.find((sombra) => sombra.tipo === "assassino");
console.log("\n5. Verificação de assassino:");
console.log(`Existe sombra do tipo assassino? ${temAssassino ? "Sim" : "Não"}`);
if (assassino) {
  console.log("Detalhes do assassino encontrado:");
  console.log(assassino);
}

// 6. Encontrar a sombra com nível mais alto
const sombraNivelMaisAlto = respostaAPI.reduce(
  (max, sombra) => (sombra.nivel > max.nivel ? sombra : max),
  respostaAPI[0]
);
console.log("\n6. Sombra com o nível mais alto:");
console.log(
  `Nome: ${sombraNivelMaisAlto.nome}, Nível: ${sombraNivelMaisAlto.nivel}, Tipo: ${sombraNivelMaisAlto.tipo}`
);
