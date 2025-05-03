// Resolva o desafio aqui
const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "database", "shadows.json");
const conteudo = fs.readFileSync(caminho, "utf-8");
const sombras = JSON.parse(conteudo);

// Imprima as sombras no formato: Nome - Nível X
sombras.forEach((s) => {
  console.log(`${s.nome} - Nível ${s.nivel}`);
});
