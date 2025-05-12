# Aula 12 – Introdução ao Express.js

Nesta aula você vai aprender como começar a usar o framework **Express.js** para facilitar a criação de APIs no Node.

## ✅ Objetivos

- Criar um servidor com Express
- Organizar rotas GET de forma limpa
- Retornar JSON usando res.json()
- Usar parâmetros dinâmicos com req.params

## 📌 Rotas esperadas

| Método | Rota           | Descrição                         |
|--------|----------------|-----------------------------------|
| GET    | `/`            | Mensagem de boas-vindas           |
| GET    | `/shadows`     | Lista todas as sombras            |
| GET    | `/shadow/:id`  | Busca uma sombra específica       |

## 📁 Arquivos

- `shadowdb.js` – módulo para leitura de dados
- `database/shadows.json` – base de dados de sombras
- `desafio.js` – instruções
- `desafio-feito.js` – onde você irá resolver

Lembre-se de instalar o Express com:

```
npm install express
```
