// Desenvolva sua solução aqui
function registrarShadow(nome, nivel) {
  if (!nome || !nivel) {
    return { erro: "Nome e nível são obrigatórios." };
  }

  const shadows = {
    nome,
    nivel,
    data: new Date().toLocaleDateString("pt-BR"),
  };
  return shadows;
}

const registro = registrarShadow("Igris", 10);
console.log("Objeto original:", registro);

// Converte para JSON (string)
const jsonString = JSON.stringify(registro);
console.log("Como JSON:", jsonString);

// Converte de volta para objeto
const objeto = JSON.parse(jsonString);
console.log("Objeto reconvertido:", objeto);

// Exemplo de uso:
// const registro = registrarShadow("Igris", 9);
// const objeto = JSON.parse(registro);
// console.log(objeto);
