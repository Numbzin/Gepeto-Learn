# Aula 19 – Funções de Alta Ordem e Composição Funcional

## 📌 O que é uma função de alta ordem?

É uma função que:
- Recebe outra função como parâmetro
**ou**
- Retorna uma função

Essas funções são base da programação funcional e usadas em `.map()`, `.filter()`, `.forEach()` e em frameworks modernos.

---

## 📌 Exemplos:

### Receber uma função:
```js
function executar(acao) {
  acao();
}
```

### Retornar uma função:
```js
function criarSaudacao(nome) {
  return () => {
    console.log("Olá,", nome);
  };
}
```

---

## 📌 Composição funcional:

Você pode combinar funções em cadeia para transformar dados:

```js
const dobrar = x => x * 2;
const somar = x => x + 3;

const compor = (f, g) => x => f(g(x));

const resultado = compor(dobrar, somar)(5); // (5 + 3) * 2 = 16
```
