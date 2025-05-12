const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "database", "shadows.json");

function lerShadows() {
  const conteudo = fs.readFileSync(caminho, "utf-8");
  return JSON.parse(conteudo);
}

function salvarShadows(novasSombras) {
  fs.writeFileSync(caminho, JSON.stringify(novasSombras, null, 2), "utf-8");
}

module.exports = { lerShadows, salvarShadows };
