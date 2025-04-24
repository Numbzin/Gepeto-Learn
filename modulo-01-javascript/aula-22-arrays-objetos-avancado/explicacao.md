# Aula 22 – Manipulação Avançada de Arrays com Objetos

## 🎯 Objetivo:
Aprender como manipular arrays de objetos com métodos como `.map()`, `.filter()`, `.reduce()`, `.find()`, `.some()`, `.every()`, `.sort()`.

---

## 🔹 Métodos principais:

### .map()
Transforma cada item do array e retorna um novo array
```js
array.map(obj => obj.nome);
```

### .filter()
Filtra os itens que passam em uma condição
```js
array.filter(s => s.nivel >= 10);
```

### .reduce()
Acumula valores, exemplo: somar níveis
```js
array.reduce((acc, s) => acc + s.nivel, 0);
```

### .find()
Encontra o primeiro item que satisfaz a condição
```js
array.find(s => s.nome === "Beru");
```

### .some()
Retorna true se ao menos um satisfaz a condição
```js
array.some(s => s.nivel < 5);
```

### .every()
Retorna true se todos satisfazem a condição
```js
array.every(s => s.nivel >= 1);
```

### .sort()
Ordena os elementos (cuidado, modifica o array original)
```js
array.sort((a, b) => b.nivel - a.nivel);
```
