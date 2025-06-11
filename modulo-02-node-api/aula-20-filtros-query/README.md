# Aula 20 — Sistema de Filtros com Query String

## 🎯 Objetivo da Aula
Permitir que o usuário consulte as sombras com base em múltiplos filtros via query string.

## 🧩 O que você vai montar
- Rota: GET /sombras
- Controller: filtrarSombras(req, res)
- Filtros:
  - `tipo` (ex: ?tipo=tank)
  - `nivelMin` (ex: ?nivelMin=70)
  - Pode usar ambos combinados

## 🔧 Tecnologias usadas
- Express
- `req.query`
- `Array.prototype.filter()`

## 💡 Exemplo de chamadas
- GET /sombras?tipo=mago
- GET /sombras?nivelMin=80
- GET /sombras?tipo=tank&nivelMin=50

## 📁 Estrutura esperada
- routes/sombras.js
- controllers/sombrasController.js
- database/sombras.json

## 📌 Dicas
- Converta nivelMin para número antes de comparar
- Filtros devem ser opcionais, ou seja: se não for passado, ignore

Boa sorte, monarca ⚔️
