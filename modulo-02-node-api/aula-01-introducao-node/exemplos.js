// Exemplo 1 – Rodar console fora do navegador
console.log("Olá, Node.js! Estou rodando fora do navegador!");

// Exemplo 2 – Criar arquivo usando módulo fs
const fs = require('fs');

fs.writeFileSync('hello.txt', 'Esta mensagem foi escrita via Node.js');
console.log('Arquivo hello.txt criado com sucesso!');

// Exemplo 3 – Trabalhar com caminhos de arquivos
const path = require('path');

const caminhoCompleto = path.join(__dirname, 'hello.txt');
console.log("Caminho absoluto:", caminhoCompleto);
