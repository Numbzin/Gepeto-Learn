// Resolva o desafio aqui
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
  } else if (url.startsWith("/shadows/tipo/")) {
    const tipo = url.split("/")[3];
    const sombrasTipo = lerShadows().filter(
      (s) => s.tipo && s.tipo.toLowerCase() === tipo.toLowerCase()
    );

    if (sombrasTipo.length > 0) {
      res.end(JSON.stringify(sombrasTipo));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ erro: "Sombra não encontrada" }));
    }
  } else if (url.startsWith("/shadows/nome/")) {
    const nome = url.split("/")[3];
    const sombraNome = lerShadows().find(
      (s) => s.nome && s.nome.toLowerCase().includes(nome.toLowerCase())
    );

    if (sombraNome) {
      res.end(JSON.stringify(sombraNome));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ erro: "Sombra não encontrada" }));
    }
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
