# Aula 04 – Trabalhando com Arrays de Dados no Servidor (API de Sombras)

## 📚 O que você vai aprender:

- Retornar **arrays de objetos** como resposta do servidor
- Filtrar e manipular arrays no back-end
- Criar rotas que retornam coleções de dados
- Entender como APIs reais enviam listas

---

## 📦 Exemplo de estrutura de sombra:

```json
{
  "nome": "Beru",
  "nivel": 10,
  "tipo": "assassino"
}
```

---

## 🎯 Missão do desafio:

1. Criar um servidor que tenha 3 rotas:
- `/` → Texto "Página inicial da API de sombras"
- `/shadows` → Retornar todas as sombras cadastradas
- `/elite` → Retornar apenas sombras com nível maior ou igual a 9

2. Estruturar a resposta sempre em JSON.

3. Corrigir cabeçalho para UTF-8 (`Content-Type: application/json; charset=utf-8`).

---

## 📝 Onde fazer o desafio:

- Edite e resolva no arquivo `desafio-feito.js`
