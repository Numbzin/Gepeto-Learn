# Aula 26 — DELETE com validação

## 🎯 Objetivo

Implementar a rota `DELETE /sombras/:id` que remove uma sombra do exército se ela existir.

---

## 🧪 Exemplo de uso

```
DELETE /sombras/2
```

✅ Resposta esperada:

- Status: 204 No Content
- Sem corpo de resposta

---

## ❗ Regras

- Se o ID informado não existir, retornar:
```json
{
  "mensagem": "Sombra não encontrada"
}
```

---

## ✅ Cheatsheet — O que você vai precisar usar

### 📌 Acessar ID da URL
```js
const id = Number(req.params.id);
```

### 📌 Buscar item por ID
```js
const sombraExiste = sombras.some(s => s.id === id);
```

### 📌 Remover item da lista
```js
const novaLista = sombras.filter(s => s.id !== id);
```

### 📌 Salvar JSON atualizado
```js
salvarSombras(novaLista);
```

### 📌 Retornar 204 No Content
```js
return res.status(204).send();
```
