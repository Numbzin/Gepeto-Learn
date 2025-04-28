// Desafio – Usando Node.js e módulos internos

// Objetivo:

// 1. Criar um arquivo chamado 'sombra.txt' com o texto 'Sombra invocada com sucesso!'
const fs = require("fs");
const path = require("path");

// Criando o caminho para o arquivo no mesmo diretório do script
const arquivotxt = path.join(__dirname, "sombra.txt");

fs.writeFileSync(arquivotxt, "Sombra invocada com sucesso!");
console.log("Arquivo criado com sucesso em:", arquivotxt);

// 2. Depois, ler o conteúdo desse arquivo e exibir no console
const conteudo = fs.readFileSync(arquivotxt, "utf8");
console.log("Conteúdo do arquivo:", conteudo);

// 3. Mostrar o caminho absoluto do arquivo criado
console.log("Caminho absoluto do arquivo:", arquivotxt);
