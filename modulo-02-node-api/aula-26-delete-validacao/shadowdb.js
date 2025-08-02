const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "database", "shadows.json");

function carregarSombras() {
  const sombras = fs.readFileSync(filePath);
  return JSON.parse(sombras);
}

function salvarSombras(sombras) {
  fs.writeFileSync(filePath, JSON.stringify(sombras, null, 2));
}

module.exports = {
  carregarSombras,
  salvarSombras
};
