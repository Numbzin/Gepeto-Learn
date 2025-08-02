# Aula 25 — PATCH parcial com validação

## 🎯 Objetivo

Atualizar parcialmente uma sombra existente, validando os campos enviados via método HTTP `PATCH`.

---

## 🧪 Exemplo de uso

```
PATCH /sombras/2
Content-Type: application/json

{
  "nivel": 7,
  "tipo": "arqueiro"
}
```

✅ Retorno esperado:

```json
{
  "id": 2,
  "nome": "Tusk",
  "nivel": 7,
  "tipo": "arqueiro"
}
```

---

## 📋 Regras de validação

- `nome`: string não vazia
- `nivel`: número inteiro de 1 a 10
- `tipo`: "guerreiro", "mago" ou "arqueiro"

---

## ✅ Cheatsheet

### 📌 PATCH vs PUT
- `PUT`: substitui toda a entrada
- `PATCH`: atualiza apenas os campos enviados

### 📌 Acessar dados
```js
const id = Number(req.params.id);
const atualizacoes = req.body;
```

### 📌 Validar campo
```js
if ('nivel' in atualizacoes && (typeof atualizacoes.nivel !== 'number' || atualizacoes.nivel < 1 || atualizacoes.nivel > 10)) {
  return res.status(400).json({ mensagem: "Nível inválido" });
}
```

### 📌 Atualizar objeto
```js
if (atualizacoes.nome) sombra.nome = atualizacoes.nome;
```

### 📌 Salvar dados
```js
salvarSombras(listaAtualizada);
```
