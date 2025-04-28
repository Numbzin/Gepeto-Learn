const respostaAPI = [
  { id: 1, nome: "Beru", nivel: 10, tipo: "assassino" },
  { id: 2, nome: "Igris", nivel: 9, tipo: "tanque" },
  { id: 3, nome: "Iron", nivel: 7, tipo: "tanque" },
  { id: 4, nome: "Bellion", nivel: 15, tipo: "general" },
  { id: 5, nome: "Kaisel", nivel: 5, tipo: "cavalaria" },
];

// Filtrar apenas tanques
const tanques = respostaAPI.filter(s => s.tipo === "tanque");
console.log("Tanques:", tanques);

// Criar lista de nomes de sombras acima de nível 8
const elite = respostaAPI
  .filter(s => s.nivel >= 8)
  .map(s => s.nome);
console.log("Elite:", elite);

// Somar todos os níveis
const poderTotal = respostaAPI.reduce((acc, s) => acc + s.nivel, 0);
console.log("Poder total:", poderTotal);
