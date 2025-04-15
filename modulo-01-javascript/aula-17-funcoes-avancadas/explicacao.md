# Aula 17 – Funções Avançadas, Escopo e Callbacks

## 🔹 Escopo
- Escopo global: disponível em todo o código
- Escopo local: só acessível dentro da função ou bloco
- Variáveis criadas com `let` e `const` respeitam escopo de bloco
- Variáveis `var` vazam escopo (não recomendado)

## 🔹 Funções dentro de funções
Uma função pode conter outra. A interna tem acesso ao escopo da externa.

## 🔹 Callbacks
Uma função passada como parâmetro para outra. Muito usado com eventos, listas e lógica assíncrona.
