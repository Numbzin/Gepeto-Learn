# Aula 03 – Servidor com JSON (simulando API)

## 📚 O que você vai aprender:

- Enviar dados em formato JSON pelo servidor
- Trabalhar com arrays e objetos como resposta
- Simular uma API com Node.js puro
- Configurar o cabeçalho de resposta para `application/json`
- Separar lógica por rotas (ex: /shadows)

---

## 📦 O que é JSON?

JSON (JavaScript Object Notation) é o **formato padrão de troca de dados entre sistemas**.

Exemplo de JSON:

```json
{
  "nome": "Beru",
  "nivel": 10,
  "tipo": "assassino"
}
```

---

## 📋 Diferença entre texto e JSON

- `text/plain` → mostra texto simples
- `application/json` → estrutura os dados em formato legível por sistemas

---

## ✅ Como enviar JSON no Node.js puro

```js
res.setHeader("Content-Type", "application/json");
const data = { nome: "Igris", nivel: 9 };
res.end(JSON.stringify(data));
```

---

## 🎯 Missão do desafio:

1. Criar um servidor que tenha:
- Rota `/` → responde com texto "API do exército das sombras"
- Rota `/shadows` → responde com um array de sombras em JSON
2. Cada sombra deve ter:
   - nome
   - nivel
   - tipo
3. Retornar os dados com `Content-Type: application/json`
