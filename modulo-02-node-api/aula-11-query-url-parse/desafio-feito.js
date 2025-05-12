// Resolva o desafio aqui

//
// Objetivo:
// - Crie uma rota /verifica?nome=Beru&nivel=10
// - Extraia os parâmetros com url.parse()
// - Se algum parâmetro estiver ausente, retorne erro 400 com mensagem
// - Caso tudo esteja correto, exiba { mensagem: "Tudo certo, Beru nível 10!" }
//
// Use url.parse(req.url, true) e query.nome / query.nivel

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (path === "/") {
    res.end(JSON.stringify({ mensagem: "Bem-vindo ao servidor de sombras!" }));
  } else if (path === "/verifica") {
    if (!query.nome || !query.nivel) {
      res.statusCode = 400;
      res.end(
        JSON.stringify({
          erro: "Parâmetros ausentes",
          mensagem: "É necessário fornecer nome e nível",
        })
      );
    } else {
      res.end(
        JSON.stringify({
          mensagem: `Tudo certo, ${query.nome} nível ${query.nivel}!`,
        })
      );
    }
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ erro: "Rota não encontrada" }));
  }
});

server.listen(3000, () => {
  console.log("Servidor de sombras rodando em http://localhost:3000");
});
