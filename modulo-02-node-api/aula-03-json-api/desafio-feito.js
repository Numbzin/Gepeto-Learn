// Desafio – Criar servidor HTTP que retorna JSON

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  const url = req.url;

  const sombra = {
    nome: "Igris",
    nivel: 9,
    tipo: "cavaleiro",
  };

  if (url === "/") {
    res.end(
      JSON.stringify({ mensagem: "Página inicial do exército das sombras" })
    );
  } else if (url === "/shadows") {
    res.end(JSON.stringify(sombra));
  } else {
    // Geralmente é boa prática adicionar um tratamento para rotas não encontradas
    res.statusCode = 404;
    res.end(JSON.stringify({ erro: "Rota não encontrada" }));
  }
});

server.listen(3000, () => {
  console.log("Servidor JSON rodando em http://localhost:3000");
});
