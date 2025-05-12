// Resolva o desafio aqui

// Objetivo:
// 1. Instale o express com npm: npm install express
// 2. Crie um servidor usando express()
// 3. Crie as seguintes rotas:
//    - GET /                → Mensagem de boas-vindas
//    - GET /shadows         → Retorna todas as sombras
//    - GET /shadow/:id      → Retorna sombra por ID
//
// Use req.params.id para acessar o ID da rota dinâmica
// Use res.json() para retornar as respostas

// Importamos o Express e o módulo de dados shadowdb
const express = require("express");
const { lerShadows } = require("./shadowdb");

// Iniciamos nossa aplicação Express
const app = express();

// Configuramos o servidor para usar JSON
app.use(express.json());

// Rota principal - retorna mensagem de boas-vindas
app.get("/", (req, res) => {
  res.json({ mensagem: "Bem-vindo ao servidor de Sombras!" });
});

// Rota para listar todas as sombras
app.get("/shadows", (req, res) => {
  const sombras = lerShadows();
  res.json(sombras);
});

// Rota para buscar uma sombra específica por ID
app.get("/shadow/:id", (req, res) => {
  // Extrair o ID da URL e converter para número
  const id = Number(req.params.id);

  // Buscar a sombra no banco de dados
  const sombras = lerShadows();
  const sombra = sombras.find((s) => s.id === id);

  // Verificar se a sombra foi encontrada
  if (sombra) {
    res.json(sombra);
  } else {
    // Retornar erro 404 se não encontrar
    res.status(404).json({ erro: "Sombra não encontrada" });
  }
});

// Iniciamos o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor de Sombras rodando em http://localhost:${PORT}`);
});

//para testar usamos /shadow/numeroDoID
