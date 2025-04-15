// Desenvolva aqui o sistema de registro em arquivo

// Use fs.writeFileSync e fs.readFileSync para manipular o arquivo sombras.json
// Use JSON.stringify e JSON.parse para salvar e carregar os dados

// O arquivo deve ser atualizado toda vez que uma sombra for registrada
const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "sombras.json");

// Array inicial (
const sombras = [
  { nome: "Beru", nivel: 10, data: "10/05/2025" },
  { nome: "Igris", nivel: 9, data: "11/05/2025" },
  { nome: "Bellion", nivel: 15, data: "12/05/2025" },
];

// Escreve no arquivo
fs.writeFileSync(caminho, JSON.stringify(sombras, null, 2));

// Lê o arquivo (se existir)
if (fs.existsSync(caminho)) {
  const data = fs.readFileSync(caminho, "utf-8");

  try {
    const sombrasLidas = JSON.parse(data);
    console.log("📜 Sombras lidas do arquivo:");
    console.log(sombrasLidas);
  } catch (erro) {
    console.error("Erro ao converter JSON:", erro.message);
  }
} else {
  console.log("Arquivo não encontrado.");
}
