const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "database", "shadows.json");

function lerShadows() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

module.exports = { lerShadows };
