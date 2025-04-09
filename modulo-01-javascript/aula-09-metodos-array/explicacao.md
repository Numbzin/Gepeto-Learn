# Aula 09 – Métodos de Array: map, filter, reduce

## .map()
Percorre o array e transforma os itens, retornando um NOVO array.

```js
const numeros = [1, 2, 3];
const dobrados = numeros.map(n => n * 2); // [2, 4, 6]
```

## .filter()
Retorna um novo array apenas com os itens que passarem no teste.

```js
const idades = [12, 18, 25];
const maiores = idades.filter(i => i >= 18); // [18, 25]
```

## .reduce()
Usado para somar ou reduzir o array a um único valor.

```js
const numeros = [10, 20, 30];
const total = numeros.reduce((acc, n) => acc + n, 0); // 60
```
