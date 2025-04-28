# Aula 24 – Estruturando Pequenos Sistemas com JavaScript

## 📦 Objetivo:
Aprender a organizar sistemas de forma limpa e modular para crescer depois.

---

## 🧠 Conceitos principais:

### 1. Separação de responsabilidades
Cada função deve ter apenas uma missão. Ex:
- cadastrarSombra() → apenas cadastro
- gerarRelatorio() → apenas relatório

### 2. Modularização (arquivos ou funções)
Mesmo em um só arquivo, pense em:
- Parte de cadastro
- Parte de listagem
- Parte de relatório

Em projetos grandes, isso vira:
- controllers/
- services/
- models/

### 3. Nomeação inteligente
Funções e variáveis devem ser autoexplicativas:
- listarSombras()
- calcularMediaNivel()

### 4. Organização do fluxo
Chamadas principais no final:
```js
cadastrarSombra("Igris", 9, "tanque");
listarSombras();
gerarRelatorio();
```

---

## 📚 Benefícios:
- Código fácil de entender
- Fácil de dar manutenção
- Base para migrar pra frameworks reais depois
