# Aula 28 — Projeto Final: API REST do Exército das Sombras

## 🎯 Desafio final

Crie uma API REST completa para gerenciar seu exército de sombras. Use tudo que aprendeu até agora!

---

## 📦 Rotas esperadas

| Método | Rota           | Descrição                           |
|--------|----------------|-------------------------------------|
| GET    | /sombras       | Lista todas as sombras              |
| GET    | /sombras/:id   | Retorna uma sombra por ID           |
| POST   | /sombras       | Cria uma nova sombra                |
| PATCH  | /sombras/:id   | Atualiza parcialmente uma sombra    |
| DELETE | /sombras/:id   | Remove uma sombra                   |

---

## ✅ Cheatsheet (Resumo de tudo)

### 📌 Acessar ID e corpo da requisição
```js
const id = Number(req.params.id);
const { nome, nivel, tipo } = req.body;
```

### 📌 Validar campos
- nome: string não vazia
- nivel: inteiro de 1 a 10
- tipo: "guerreiro", "mago", "arqueiro"

### 📌 Gerar ID único
```js
const novoId = sombras.length ? Math.max(...sombras.map(s => s.id)) + 1 : 1;
```

### 📌 Lançar erro com throw
```js
if (!nome || typeof nome !== "string") {
  throw new Error("Nome inválido");
}
```

### 📌 Filtrar ou atualizar sombra
```js
const sombra = sombras.find(s => s.id === id);
const novaLista = sombras.filter(s => s.id !== id);
```

---

## 🛠️ Tarefa

- Implemente todas as 5 rotas no controller
- Use os middlewares de sanitização e erro
- Teste sua API com dados válidos e inválidos
- Retorne status apropriados: 200, 201, 204, 400, 404

---

### Boa sorte! Último passo do módulo 02 ⚔️🔥
