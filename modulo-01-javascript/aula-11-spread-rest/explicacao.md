# Aula 11 – Spread e Rest (...)

## SPREAD – "espalha", "clona", "desempacota"
Usado para copiar arrays, objetos, ou passar elementos como argumentos:

```js
const original = [1, 2, 3];
const copia = [...original]; // [1, 2, 3]

const sombra = { nome: "Igris", nivel: 9 };
const copiaSombra = { ...sombra, nivel: 10 };
```

## REST – "agrupa", "captura", "coleta"
Usado em funções para capturar múltiplos argumentos:

```js
function somar(...valores) {
  return valores.reduce((a, b) => a + b);
}
console.log(somar(1, 2, 3)); // 6
```
