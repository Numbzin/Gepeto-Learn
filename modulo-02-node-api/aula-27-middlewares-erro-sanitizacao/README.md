# Aula 27 — Middlewares de erro e sanitização

## 🎯 Objetivo

- Criar um endpoint POST `/sombras` que utiliza middlewares:
  - Para sanitizar o corpo da requisição (`trim`, `toLowerCase`)
  - Para tratar erros lançados com `throw`

---

## 🧪 Exemplo de uso

```
POST /sombras
Content-Type: application/json

{
  "nome": "  Baru  ",
  "nivel": 4,
  "tipo": "MaGo"
}
```

✅ Resposta esperada:
```json
{
  "id": 4,
  "nome": "Baru",
  "nivel": 4,
  "tipo": "mago"
}
```

---

## ✅ Cheatsheet — O que você vai precisar usar

### 📌 Criar middleware para sanitizar
```js
req.body.nome = req.body.nome.trim();
req.body.tipo = req.body.tipo.toLowerCase();
```

### 📌 Criar middleware de tratamento de erros
```js
function tratarErros(err, req, res, next) {
  return res.status(400).json({ mensagem: err.message });
}
```

### 📌 Lançar erros manualmente
```js
if (!nome || nome.length < 2) {
  throw new Error("Nome inválido");
}
```

### 📌 Usar middlewares na rota
```js
router.post("/", sanitizarBody, criarSombra);
```

---

## 🛠️ Tarefa

- Implementar `criarSombra` com validações e `throw`
- Testar sanitização e tratamento de erros
