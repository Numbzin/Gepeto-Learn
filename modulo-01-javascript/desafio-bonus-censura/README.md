# Desafio Bônus – Censura de Palavras Proibidas

## 🎯 Objetivo:
Criar uma função chamada `censurarTexto(texto, palavrasProibidas)` que substitui palavras específicas em um texto por "***" (ou outro símbolo).

## 🧠 O que você vai praticar:
- Regex dinâmica com `new RegExp()`
- Substituição com `.replace()`
- Manipulação de strings + array

## 📋 Exemplo:
```js
const texto = "Beru é forte, mas Bellion é ainda mais perigoso.";
const proibidas = ["beru", "bellion"];

const resultado = censurarTexto(texto, proibidas);
// Resultado: "*** é forte, mas *** é ainda mais perigoso."
```

## 💡 Dica:
Use `.join("|")` para montar a regex com várias palavras.
Use `gi` para ignorar letras maiúsculas e substituir tudo.
