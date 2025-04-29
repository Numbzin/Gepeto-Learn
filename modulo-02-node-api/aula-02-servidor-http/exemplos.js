// Exemplo básico – Servidor HTTP no Node.js

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.write("Olá do servidor Node.js puro!");
  res.end();
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
