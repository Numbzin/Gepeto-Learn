# Aula 15 – Organização com Express Router

Nesta aula você vai aprender a deixar seu código profissional separando:

- Rotas (`routes/`)
- Controladores (`controllers/`)
- Banco de dados (`database/`)
- Lógica de leitura (`shadowdb.js`)
- Inicialização do servidor (`server.js`)

## ✅ Objetivo

- Criar arquivos separados para rotas e lógica
- Usar express.Router para criar rotas em `routes/sombras.js`
- Criar funções de controle em `controllers/sombrasController.js`
- Usar `app.use()` para conectar as rotas no `server.js`

## 🧱 Estrutura esperada

```
/controllers
  └── sombrasController.js
/routes
  └── sombras.js
/database/shadows.json
shadowdb.js
server.js
```

## 🧪 Teste

- Rodar `node server.js`
- Acessar: http://localhost:3000/sombras → retorna todas as sombras

Pronto! Agora sua API está modularizada como nos projetos reais.
