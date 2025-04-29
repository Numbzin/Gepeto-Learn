// Exemplo – Enviar JSON como resposta

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  const sombra = {
    nome: "Igris",
    nivel: 9,
    tipo: "tanque"
  };

  res.end(JSON.stringify(sombra));
});

server.listen(3000, () => {
  console.log("Servidor JSON rodando em http://localhost:3000");
});
