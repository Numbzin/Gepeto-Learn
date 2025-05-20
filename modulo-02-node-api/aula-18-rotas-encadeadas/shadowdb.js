const fs = require("fs");
const path = require("path");

function lerSombras() {
  const data = fs.readFileSync(path.join(__dirname, "database", "sombras.json"));
  return JSON.parse(data);
}

module.exports = { lerSombras };
