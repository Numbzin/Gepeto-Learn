// Exemplo – Listando array de dados via servidor Node.js

const http = require("http");

const sombras = [
  { nome: "Beru", nivel: 10, tipo: "assassino" },
  { nome: "Igris", nivel: 9, tipo: "cavaleiro" },
  { nome: "Iron", nivel: 7, tipo: "tanque" }
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(sombras));
});

server.listen(3000, () => {
  console.log("Servidor de sombras rodando em http://localhost:3000");
});
