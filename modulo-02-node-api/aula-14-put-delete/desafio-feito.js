// Resolva o desafio aqui

// Objetivo:
// - Criar rota PUT /sombra/:id para atualizar nome/nivel/tipo de uma sombra
// - Criar rota DELETE /sombra/:id para remover uma sombra pelo ID
// - Retornar mensagens e objetos atualizados corretamente
// - Validar se a sombra existe antes de atualizar ou remover

// Importa o framework Express para criar o servidor
const express = require("express");

// Importa as funções para ler e salvar as sombras do "banco de dados" (arquivo JSON)
const { lerShadows, salvarShadows } = require("./shadowdb");

// Inicializa a aplicação Express
const app = express();

// Permite que o servidor entenda requisições com corpo JSON
app.use(express.json());

// Rota raiz - apenas retorna uma mensagem de boas-vindas
app.get("/", (req, res) => {
  res.json({ mensagem: "Bem-vindo ao servidor de Sombras!" });
});

// Rota GET /shadows - retorna todas as sombras
app.get("/shadows", (req, res) => {
  const sombras = lerShadows(); // Lê todas as sombras do "banco de dados"
  res.json(sombras); // Retorna como JSON
});

// Rota para atualizar uma sombra existente
app.put("/sombra/:id", (req, res) => {
  const id = Number(req.params.id); // Converte o id da URL para número

  const { nome, nivel, tipo } = req.body; // Extrai os campos do corpo da requisição

  // Verifica se todos os campos foram fornecidos
  if (!nome || !nivel || !tipo) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
  }

  // Lê as sombras do arquivo
  const sombras = lerShadows();

  // Procura o índice da sombra com o ID fornecido
  const index = sombras.findIndex((sombra) => sombra.id === id);

  // Se não encontrar, retorna erro
  if (index === -1) {
    return res.status(404).json({ erro: "Sombra não encontrada" });
  }

  // Atualiza os dados da sombra
  sombras[index] = { id, nome, nivel, tipo };

  // Salva o array atualizado no JSON
  salvarShadows(sombras);

  // Retorna a sombra atualizada
  res.json({
    mensagem: "Sombra atualizada com sucesso",
    sombra: sombras[index],
  });
});

// Rota DELETE /sombra/:id - remove uma sombra pelo ID
app.delete("/sombra/:id", (req, res) => {
  const id = Number(req.params.id); // Pega o ID da URL

  const sombras = lerShadows(); // Lê todas as sombras
  const index = sombras.findIndex((s) => s.id === id); // Procura a sombra pelo ID

  // Se não encontrar a sombra, retorna erro
  if (index === -1) {
    return res.status(404).json({ erro: "Sombra não encontrada" });
  }

  // Remove a sombra do array e salva a sombra removida
  const sombraRemovida = sombras.splice(index, 1)[0];

  // Salva a lista atualizada no arquivo
  salvarShadows(sombras);

  // Retorna mensagem de sucesso com a sombra que foi removida
  res.json({
    mensagem: "Sombra removida com sucesso",
    sombra: sombraRemovida,
  });
});

// Inicia o servidor na porta 3000 e exibe mensagem no console
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor de Sombras rodando em http://localhost:${PORT}`);
});
