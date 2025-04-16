# Desafio Bônus – Fusão de Efeitos com Composição Funcional

## 🎯 Objetivo:
Aplicar uma cadeia de transformações em nomes de sombras, utilizando arrow functions e composição funcional.

## 🧠 O que você vai praticar:
- Arrow functions
- Funções que retornam funções
- Composição funcional
- Iteração com array

## 🧩 Tarefa:

1. Crie as funções:
   - `gritar(nome)` → retorna o nome em MAIÚSCULAS
   - `marcarComFogo(nome)` → adiciona "🔥 " no início
   - `convocar(nome)` → imprime: `"🔥 NOME foi convocada!"`

2. Crie uma função `compor(f1, f2)` que retorna uma nova função encadeando `f1` com `f2`

3. Use um array com nomes de sombras, exemplo:
```js
const sombras = ["Beru", "Igris", "Iron"];
```

4. Para cada nome, aplique os efeitos e chame `convocar(...)`

## ✅ Exemplo de saída:
```
🔥 BERU foi convocada!
🔥 IGRIS foi convocada!
🔥 IRON foi convocada!
```
