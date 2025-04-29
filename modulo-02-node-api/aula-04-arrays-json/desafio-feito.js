// Desafio Feito – Trabalhar com rotas no Node.js
//
// Missão:
// 1. Criar rota / → Texto "Página inicial da API de sombras"
// 2. Criar rota /shadows → Array com todas as sombras
// 3. Criar rota /elite → Sombras com nível >= 9
// 4. Respostas em formato JSON
// 5. Corrigir acentuação (charset utf-8)
//
// Resolva seu desafio abaixo:

const http = require("http");
const shadows = [
  {
    id: 1,
    nome: "Igris",
    nivel: 9,
    tipo: "cavaleiro",
    habilidade: "Espadachim",
  },
  {
    id: 2,
    nome: "Beru",
    nivel: 10,
    tipo: "assassino",
    habilidade: "Controle Mental",
  },
  {
    id: 3,
    nome: "Tank",
    nivel: 8,
    tipo: "tanque",
    habilidade: "Defesa Elevada",
  },
  {
    id: 4,
    nome: "Iron",
    nivel: 7,
    tipo: "tanque",
    habilidade: "Defesa Elevada",
  },
  {
    id: 5,
    nome: "Tusk",
    nivel: 9,
    tipo: "mago",
    habilidade: "Magia Elemental",
  },
  {
    id: 6,
    nome: "Kaisel",
    nivel: 9,
    tipo: "cavalaria",
    habilidade: "Transporte Aéreo",
  },
];

// Criação do servidor com rotas
const server = http.createServer((req, res) => {
  // Configuração dos headers para UTF-8 e JSON
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  const url = req.url;

  // Roteamento
  if (url === "/") {
    // Rota principal
    res.end(JSON.stringify({ mensagem: "Página inicial da API de sombras" }));
  } else if (url === "/shadows") {
    // Rota que retorna todas as sombras
    res.end(JSON.stringify(shadows));
  } else if (url === "/elite") {
    // Rota que retorna apenas sombras de elite (nível >= 9)
    const eliteShadows = shadows.filter((shadow) => shadow.nivel >= 9);
    res.end(JSON.stringify(eliteShadows));
  } else {
    // Rota não encontrada
    res.statusCode = 404;
    res.end(JSON.stringify({ erro: "Rota não encontrada" }));
  }
});

// Inicialização do servidor na porta 3000
server.listen(3000, () => {
  console.log("Servidor da API de sombras rodando em http://localhost:3000");
});
