// Resolva o desafio aqui

// Objetivo:
// - Criar rota POST /sombra
// - Receber os dados: nome, nivel, tipo (via req.body)
// - Validar se os campos foram enviados
// - Adicionar a nova sombra ao JSON com adicionarShadow()
// - Retornar a sombra criada com status 201
//
// Lembre-se de usar express.json() para habilitar o body parser
// Importamos o Express e o módulo de dados shadowdb
const express = require("express");
const { lerShadows, adicionarShadow } = require("./shadowdb");

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

// Rota para criar uma nova sombra

app.post("/sombra", (req, res) => {
  // Extrair os dados do corpo da requisição
  // O Express já faz o parse do JSON para nós

  const { nome, nivel, tipo } = req.body;

  // Validar se todos os campos foram enviados
  if (!nome || !nivel || !tipo) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
  }

  // Adicionar a nova sombra ao banco de dados
  const novaSombra = { nome, nivel, tipo };
  const sombraCriada = adicionarShadow(novaSombra);

  // Retornar a sombra criada com status 201
  res
    .status(201)
    .json({ mensagem: "Sombra criada com sucesso", sombra: sombraCriada });
});

// Iniciamos o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor de Sombras rodando em http://localhost:${PORT}`);
});
