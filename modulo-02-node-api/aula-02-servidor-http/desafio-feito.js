// Desafio – Criar servidor HTTP com rotas no Node.js

const http = require("http");

// Crie aqui o seu servidor e configure as rotas conforme o README!

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  const url = req.url;

  if (url === "/") {
    res.write("Página inicial do exército das sombras");
  } else if (url === "/sombra") {
    res.write("Beru foi convocado!");
  } else if (url === "/status") {
    res.write("Sistema operacional do exército ativo");
  } else {
    res.write("Rota não encontrada");
  }

  res.end();
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
