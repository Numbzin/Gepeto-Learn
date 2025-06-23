# 📘 Aula 24 — Criar Nova Sombra com Validação (POST)

## 🎯 Objetivo
Aprender a validar dados enviados pelo cliente em `req.body`, e salvar no JSON.

---

## ✅ Sua missão:

1. Criar rota `POST /sombras`
2. Criar a função `criarSombra(req, res)` no controller
3. Validar os seguintes campos:
   - `nome` deve existir e ser string
   - `tipo` deve existir e ser string
   - `nivel` deve existir e ser número
4. Se faltar algo → retornar `400` com erro claro:
```json
{ "erro": "Campo 'nome' é obrigatório e deve ser string" }
```
5. Se estiver tudo certo:
   - Gerar um novo `id` (automático)
   - Adicionar no JSON
   - Retornar `201` com a nova sombra criada

---

## 🧪 Exemplos

**POST /sombras**

```json
{
  "nome": "Kaisel",
  "tipo": "montaria",
  "nivel": 85
}
```

**Resposta esperada:**

```json
{
  "id": 4,
  "nome": "Kaisel",
  "tipo": "montaria",
  "nivel": 85
}
```

---

Boa sorte, mestre do POST das sombras ⚔️
