const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "database", "shadows.json");

function lerShadows() {
  const conteudo = fs.readFileSync(caminho, "utf-8");
  return JSON.parse(conteudo);
}

module.exports = { lerShadows };
