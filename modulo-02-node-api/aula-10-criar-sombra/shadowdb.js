const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "database", "shadows.json");

function lerShadows() {
  const conteudo = fs.readFileSync(caminho, "utf-8");
  return JSON.parse(conteudo);
}

function adicionarShadow(sombra) {
  const sombras = lerShadows();
  const nova = { id: sombras.length + 1, ...sombra };
  sombras.push(nova);
  fs.writeFileSync(caminho, JSON.stringify(sombras, null, 2), "utf-8");
  return nova;
}

module.exports = { lerShadows, adicionarShadow };
