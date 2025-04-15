// Objeto comum
const sombra = { nome: "Beru", nivel: 10 };

// Converter para JSON (string)
const jsonString = JSON.stringify(sombra);
console.log("Como JSON:", jsonString);

// Voltar para objeto
const objeto = JSON.parse(jsonString);
console.log("Como objeto:", objeto);
console.log("Nome da sombra:", objeto.nome);
