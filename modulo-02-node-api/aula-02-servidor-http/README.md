/_ This code snippet is creating a basic HTTP server using Node.js. It sets up different routes based
on the URL requested by the client. Here's a breakdown of what the code is doing: _/

# Aula 02 – Criando Servidor com Node.js (HTTP puro)

## 📚 O que você vai aprender:

- Como criar um servidor HTTP manualmente com Node.js
- Entender o ciclo: Requisição → Resposta
- Trabalhar com rotas básicas (caminhos diferentes)
- Corrigir problemas de acentuação (charset UTF-8)

---

## 🔥 Exemplo básico:

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.write("Servidor funcionando!");
  res.end();
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
```

---

# 🎯 Missão do desafio:

- Criar um servidor que rode na porta 3000
- Criar 3 rotas:
  - `/` → Mostrar: "Página inicial do exército das sombras"
  - `/sombra` → Mostrar: "Beru foi convocado!"
  - `/status` → Mostrar: "Sistema operacional do exército ativo"
- Se acessar outra rota, responder: "Rota não encontrada"
- Corrigir acentuação usando `setHeader`
