# 📘 Aula 23 — Ordenação de Resultados por Campo

## 🎯 Objetivo
Aprender a ordenar resultados usando query string, como ?ordenar=nome ou ?ordenar=nivel

---

## ✅ Sua missão:

Crie uma rota GET `/sombras/ordenar?ordenar=nome` ou `?ordenar=nivel`.

### Regras:

- `?ordenar=nome` → retorna sombras ordenadas de A-Z pelo nome
- `?ordenar=nivel` → retorna sombras do maior nível para o menor
- Se não vier query, retorna todas como estão
- Se o valor for inválido, retorna 400 com `{ erro: "Parâmetro de ordenação inválido" }`

---

## 🧪 Exemplos:

- `/sombras/ordenar?ordenar=nome`
- `/sombras/ordenar?ordenar=nivel`
- `/sombras/ordenar` → sem ordenação
- `/sombras/ordenar?ordenar=forca` → erro 400

---

Boa sorte, mestre da ordem nas sombras ⚔️
