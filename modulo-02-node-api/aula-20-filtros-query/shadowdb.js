const fs = require("fs");
const path = require("path");

function lerSombras() {
  const filePath = path.join(__dirname, "database", "sombras.json");
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

module.exports = { lerSombras };
