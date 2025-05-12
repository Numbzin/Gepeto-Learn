// Resolva o desafio aqui

// Missão:
// - Crie uma rota /relatorio-lealdade
// - Essa rota deve retornar:
//   - Quantidade total de sombras
//   - Quantas são leais (leal === true)
//   - Quantas são traidoras (leal === false)
//   - Porcentagem de traidores com 1 casa decimal
//
// Use shadowdb.js para carregar os dados

const http = require("http");
const url = require("url");
const { lerShadows } = require("./shadowdb");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  if (path === "/") {
    res.end(JSON.stringify({ mensagem: "Bem-vindo ao servidor de sombras!" }));
  } else if (path === "/relatorio-lealdade") {
    const sombras = lerShadows();
    const totalSombras = sombras.length;
    const sombrasLeais = sombras.filter((s) => s.leal === true).length;
    const sombrasTraidoras = sombras.filter((s) => s.leal === false).length;
    const porcentagemTraidores =
      ((sombrasTraidoras / totalSombras) * 100).toFixed(1) + "%";

    res.end(
      JSON.stringify({
        Total: totalSombras,
        Leais: sombrasLeais,
        Traidoras: sombrasTraidoras,
        PorcentagemTraidores: porcentagemTraidores,
      })
    );
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ erro: "Rota não encontrada" }));
  }
});

server.listen(3000, () => {
  console.log("Servidor de sombras rodando em http://localhost:3000");
});
