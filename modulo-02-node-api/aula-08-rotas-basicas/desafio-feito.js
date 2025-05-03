// Resolva o desafio aqui utilizando o módulo shadowdb.js
// Crie as rotas mencionadas e retorne os dados corretamente

const http = require("http");
const { lerShadows } = require("./shadowdb");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  const url = req.url;

  if (url === "/shadows") {
    const sombras = lerShadows();
    res.end(JSON.stringify(sombras));
  } else if (url === "/") {
    res.end(JSON.stringify({ mensagem: "Bem-vindo ao servidor de sombras!" }));
  } else if (url === "/shadows/elite") {
    const eliteShadows = lerShadows().filter((s) => s.nivel >= 9);
    res.end(JSON.stringify(eliteShadows));
  } else if (url.startsWith("/shadows/")) {
    const id = url.split("/")[2];
    const sombra = lerShadows().find((s) => s.id === Number(id));
    if (sombra) {
      res.end(JSON.stringify(sombra));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ erro: "Sombra não encontrada" }));
    }
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ erro: "Rota não encontrada" }));
  }
});

server.listen(3000, () => {
  console.log("Servidor de sombras rodando em http://localhost:3000");
});
