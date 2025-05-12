// Resolva o desafio aqui

const http = require("http");
const { adicionarShadow, lerShadows } = require("./shadowdb");
const url = require("url");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (path === "/shadows") {
    const sombras = lerShadows();
    res.end(JSON.stringify(sombras));
  } else if (path === "/") {
    res.end(JSON.stringify({ mensagem: "Bem-vindo ao servidor de sombras!" }));
  } else if (path === "/shadows/elite") {
    const eliteShadows = lerShadows().filter((s) => s.nivel >= 9);
    res.end(JSON.stringify(eliteShadows));
  } else if (path.startsWith("/shadows/")) {
    const id = path.split("/")[2];
    const sombra = lerShadows().find((s) => s.id === Number(id));
    if (sombra) {
      res.end(JSON.stringify(sombra));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ erro: "Sombra não encontrada" }));
    }
  } else if (path === "/nova-sombra") {
    // Nova rota para adicionar uma sombra
    const { nome, nivel, tipo } = query;

    // Verificar se todos os parâmetros necessários foram fornecidos
    if (!nome || !nivel || !tipo) {
      res.statusCode = 400;
      res.end(
        JSON.stringify({
          erro: "Parâmetros incompletos",
          mensagem: "É necessário fornecer nome, nivel e tipo",
        })
      );
      return;
    }

    // Criar o objeto da nova sombra
    const novaSombra = {
      nome,
      nivel: Number(nivel),
      tipo,
    };

    // Salvar a nova sombra
    adicionarShadow(novaSombra);

    // Retornar confirmação
    res.statusCode = 201; // Created
    res.end(
      JSON.stringify({
        mensagem: "Sombra adicionada com sucesso",
        sombra: novaSombra,
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
