# Aula 01 – Introdução ao Node.js

## 📚 O que é o Node.js?

- É uma plataforma que permite rodar JavaScript fora do navegador.
- Serve para criar servidores, APIs, sistemas back-end.
- Permite trabalhar com arquivos, redes, banco de dados, etc.

---

## 🚀 Como executar um arquivo Node.js

1. Instale o Node.js no seu computador (já instalado no seu caso).
2. Crie um arquivo `index.js`.
3. Rode o arquivo no terminal com o comando:
```bash
node index.js
```

---

## 🔹 Módulos internos do Node:

- `fs` → Manipular arquivos
- `path` → Trabalhar com caminhos de arquivos
- `http` → Criar servidores web

Exemplo de uso básico:
```js
const fs = require('fs');
fs.writeFileSync('teste.txt', 'Hello, Node!');
```

---

## 📋 Exemplo de fluxo:

```plaintext
[Seu Código JavaScript]
→ Rodado pelo Node
→ Executado no sistema operacional
→ Sem precisar de navegador
```

---

# 🎯 Objetivo da aula:

- Entender que Node é JavaScript rodando fora do navegador
- Criar scripts simples usando Node.js
- Conhecer e usar módulos internos (`fs`, `path`)
