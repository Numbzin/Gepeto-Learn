# Aula 18 – Arrow Functions (Funções de seta)

## 🔹 O que são?

Uma forma **moderna e curta** de declarar funções em JavaScript, introduzida no ES6 (2015).

## 📌 Sintaxe básica

```js
// Forma tradicional
function somar(a, b) {
  return a + b;
}

// Arrow function
const somar = (a, b) => a + b;
```

## 🧠 Regras e detalhes:

- Se tiver **1 parâmetro**, os parênteses são opcionais: `x => x * 2`
- Se o corpo da função for **1 linha**, o `return` é implícito (não precisa escrever)
- Se for mais de 1 linha, **use `{}` e `return` normalmente**
- Arrow functions **não criam um novo `this`**

## ❌ Quando NÃO usar arrow:
- Dentro de métodos de objetos se precisar do `this`
- Quando quiser reutilizar contexto (`this`) da função

