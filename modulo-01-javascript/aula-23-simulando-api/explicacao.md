# Aula 23 – Simulando API: Consumo e Processamento de Dados

## 📦 O que você vai aprender:
- Como APIs enviam dados (arrays de objetos grandes)
- Como trabalhar como se estivesse recebendo uma resposta de API
- Como organizar, filtrar, mapear e calcular dados de APIs simuladas

---

## 📚 Exemplo de resposta de API:
```js
const resposta = [
  { id: 1, nome: "Beru", nivel: 10, tipo: "assassino" },
  { id: 2, nome: "Igris", nivel: 9, tipo: "tanque" },
  { id: 3, nome: "Iron", nivel: 7, tipo: "tanque" },
  { id: 4, nome: "Bellion", nivel: 15, tipo: "general" },
  { id: 5, nome: "Kaisel", nivel: 5, tipo: "cavalaria" },
];
```

---

## 🔹 Como processar:
- `.filter()` → Filtrar por tipo
- `.map()` → Criar listas de nomes
- `.reduce()` → Somar níveis ou contar quantidade
- `.sort()` → Ordenar por nível
- `.find()` → Buscar um específico

---

## 🧠 Pensa assim:
- Cada item é um registro do banco de dados
- Você vai aplicar transformações como se fosse montar uma API ou um front-end que consome isso
