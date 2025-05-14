const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "database", "shadows.json");

function lerShadows() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

module.exports = { lerShadows };
