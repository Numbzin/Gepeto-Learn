# 📘 Aula 22 — Busca Combinada por Nome e Tipo (Query)

## 🎯 Objetivo
Aprender a criar filtros dinâmicos usando `req.query`.

---

## ✅ Sua missão:

Crie uma rota GET `/sombras` com os seguintes filtros opcionais via query string:

1. `?nome=` → busca sombras que contêm esse nome (case insensitive)
2. `?tipo=` → busca sombras com tipo exato (case insensitive)
3. Pode combinar ambos: `?nome=ka&type=montaria`

---

## 🧪 Exemplos:

- `/sombras` → retorna todas
- `/sombras?tipo=tank` → retorna todas do tipo "tank"
- `/sombras?nome=ig` → retorna sombras com "ig" no nome
- `/sombras?nome=ig&type=tank` → retorna sombras do tipo tank que contenham "ig" no nome

---

## 🛠️ Dicas:

- Use `.filter()` para aplicar os filtros
- Use `.toLowerCase()` para evitar problemas de caixa
- Verifique se `req.query.nome` e `req.query.tipo` existem

---

Boa sorte, mestre dos filtros ⚔️
