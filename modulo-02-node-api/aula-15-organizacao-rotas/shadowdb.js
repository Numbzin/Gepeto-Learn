const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "database", "shadows.json");

function lerShadows() {
  return JSON.parse(fs.readFileSync(caminho, "utf-8"));
}

function salvarShadows(dados) {
  fs.writeFileSync(caminho, JSON.stringify(dados, null, 2), "utf-8");
}

module.exports = { lerShadows, salvarShadows };
