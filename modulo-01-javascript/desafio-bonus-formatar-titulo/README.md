# Desafio Bônus – Manipulação de Texto: Formatação de Título

## 🎯 Objetivo:
Criar uma função chamada `formatarTitulo` que recebe um texto desformatado e transforma ele em um título corretamente formatado.

## 📚 Regras:
1. A entrada pode conter letras maiúsculas e minúsculas misturadas
2. A entrada pode ter espaços a mais no início/fim
3. Palavras podem estar separadas por hífens
4. O resultado deve ter:
   - Primeira letra de cada palavra maiúscula
   - Palavras separadas por espaço
   - Nenhum espaço extra no início ou fim

## 🧩 Exemplo:

Entrada:
```js
const entrada = "   oReI-dAs-sOmBrAs   ";
```

Saída esperada:
```js
"Orei Das Sombras"
```

## 💡 Dicas:
- Use `.trim()`, `.toLowerCase()`, `.replace()`, `.split()`, `.map()`, `.join()`
- Para capitalizar: `.charAt(0).toUpperCase() + .slice(1)`
