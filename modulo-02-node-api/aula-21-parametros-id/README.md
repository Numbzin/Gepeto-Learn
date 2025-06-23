# 📘 Aula 21 — Parâmetros de Rota: Buscar Sombra por ID

## 🎯 Objetivo
Aprender a acessar parâmetros de rota (`req.params`) para buscar um recurso específico por ID.

Exemplo:
```
GET /sombras/3 → retorna a sombra com id 3
```

## 🚧 O que você deve fazer:

1. Criar a rota GET `/:id` no arquivo `routes/sombras.js`
2. Criar a função `buscarSombraPorId` no `controllers/sombrasController.js`
3. Dentro da função:
   - Acessar o parâmetro com `req.params.id`
   - Converter `id` para número com `Number()`
   - Usar `.find()` sobre `lerShadows()` para buscar o item
   - Se não encontrar, responder com `res.status(404).json({ erro: "Sombra não encontrada" })`
   - Se encontrar, responder com `res.json(sombra)`

## ✅ Exemplo de retorno esperado:

```json
{
  "id": 3,
  "nome": "Iron",
  "tipo": "tank",
  "nivel": 40
}
```

Se o ID não existir:
```json
{
  "erro": "Sombra não encontrada"
}
```

---

🧠 Dica: você pode usar `const id = Number(req.params.id);` para garantir o tipo certo.

Boa sorte, dev das sombras ⚔️
