# Aula 16 — Middlewares com Express

## 🎯 Objetivo:
Aprender a criar middlewares personalizados para:
- Logar informações da requisição
- Proteger rotas com verificação de token

---

## 🧠 O que são Middlewares no Express

### 📌 Definição
Um middleware é uma função que intercepta a requisição (`req`) e pode:
- Ler ou alterar `req` e `res`
- Bloquear ou autorizar o acesso
- Chamar `next()` para seguir o fluxo

---

## ✅ Exemplo de middleware básico:

```js
function meuMiddleware(req, res, next) {
  console.log("Interceptando requisição...");
  next(); // segue para o próximo middleware ou rota
}
```

---

## 🚀 Como usar no Express

### A) Middleware global
```js
app.use(meuMiddleware);
```

### B) Middleware por rota
```js
router.get("/", meuMiddleware, handlerFinal);
```

---

## 🔧 Desafio prático:

Você vai criar **dois arquivos** na pasta `middlewares/`:

### 1. logger.js

- Mostra o método e a URL de cada requisição
```js
function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}
module.exports = logger;
```

### 2. autenticar.js

- Verifica se há `?token=123` na query
- Se não houver, retorna `403 - Acesso negado`
```js
function autenticar(req, res, next) {
  const { token } = req.query;
  if (!token) {
    return res.status(403).json({ mensagem: "Acesso negado" });
  }
  next();
}
module.exports = autenticar;
```

---

## 🧩 Estrutura esperada:

```bash
middlewares/
├── logger.js        # ← middleware de log
└── autenticar.js    # ← middleware de proteção
```

---

## 🧪 Testes esperados:

- Com token:
```
GET http://localhost:3000/sombras?token=123
→ deve retornar os dados normalmente
```

- Sem token:
```
GET http://localhost:3000/sombras
→ deve retornar 403 com mensagem de acesso negado
```

---

## ✅ Conclusão:
Você agora consegue interceptar requisições com lógica personalizada,
o que abre portas para:
- Logs, autenticação, validações, permissões
- Segurança e rastreabilidade no backend

Quando finalizar, me avisa pra revisar com você ou seguimos pra Aula 17 ⚔️
