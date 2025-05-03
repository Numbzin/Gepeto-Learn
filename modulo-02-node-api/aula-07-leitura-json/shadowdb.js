const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "database", "shadows.json");

function lerShadows() {
  const conteudo = fs.readFileSync(caminho, "utf-8");
  return JSON.parse(conteudo);
}

function adicionarShadow(novaSombra) {
  const sombras = lerShadows();
  sombras.push(novaSombra);
  fs.writeFileSync(caminho, JSON.stringify(sombras, null, 2), "utf-8");
}

module.exports = {
  lerShadows,
  adicionarShadow,
};